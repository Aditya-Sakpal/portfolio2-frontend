const express=require('express')
const {Certification,Project,Experience,Feedback} = require('./connect');
const cors = require('cors');

require('dotenv').config({ path: './.env' });
const axios = require('axios');

const app=express()
const port = 4000
app.use(cors());
app.use(express.json());


const {HUGGING_FACE_API}=process.env
const {CHAT_API_KEY}=process.env

app.get('/certifications', async (req, res) => {
    try {
      const certifications = await Certification.find();
      // console.log("reecived")
      res.status(200).json(certifications);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  app.get('/projects', async (req, res) => {
    try {
      const projects = await Project.find();
      res.json(projects);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  app.get('/getFeedback', async (req, res) => {
    try {
      const feedbacks = await Feedback.find();
      res.json(feedbacks);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  app.get('/data',async (req,res)=>{
    try{
      const [certifications,projects,experience,feedbacks] = await Promise.all([
        Certification.find(),
        Project.find(),
        Experience.find(),
        Feedback.find()
      ])
      const combinedData = {
        certifications,
        projects,
        experience,
        feedbacks
      };
      res.status(200).json(combinedData);
    }catch(e){
      res.status(500).send('Internal Server Error');
    }
  })

  async function evaluate_label(data) {
    try {
        const response = await axios.post(
            'https://api-inference.huggingface.co/models/lxyuan/distilbert-base-multilingual-cased-sentiments-student',
            data,
            {
                headers: {
                    Authorization: HUGGING_FACE_API,
                    'Content-Type': 'application/json',
                },
            }
        );
        const scores=response.data[0]
        console.log(response.data)
        const maxScore = Math.max(...scores.map((score) => score.score));
        const predictedLabel = scores.find((score) => score.score === maxScore).label;
        console.log(predictedLabel)
        return predictedLabel

    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

  app.post('/feedbacks', async (req, res) => {
    try {
      console.log(req.body)
      const lbl=await evaluate_label(req.body.feedback)
      const newFeedback = new Feedback({
        name:req.body.name,
        feedback:req.body.feedback,
        label:lbl
      });
  
      await newFeedback.save();
      const feedbacks = await Feedback.find();
      res.status(201).send({message:'Project added successfully!',feedbacks});
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  

  app.post('/chats',async (req,res)  =>{  
    console.log("reached")
      axios.post('https://general-runtime.voiceflow.com/knowledge-base/query', {
          question: req.body.query,
      }, {
          headers: {
              'Authorization': CHAT_API_KEY,
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
      })
      .then(response => {
          res.status(201).send(response.data)
      })
      .catch(error => {
          console.error(error);
      });
  })
  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
