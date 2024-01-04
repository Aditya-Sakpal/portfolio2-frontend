const express = require('express');
const multer = require('multer');
const fs = require('fs');
const {Certification,Project, Experience} = require('./connect');

const app = express();
const port = 5000;

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

app.post('/certifications', upload.single('image'), async (req, res) => {
  try {
    console.log(req.body)
    const newCertification = new Certification({
        cert_name: req.body.cert_name,
        issue_date: req.body.issue_date,
        expire_date: req.body.expire_date,
        credential_id: req.body.credential_id,
        org_name:req.body.org_name,
        image: req.file.buffer, 
    });

    await newCertification.save();
    res.status(201).send('Certification added successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.post('/projects', upload.single('image'), async (req, res) => {
  try {
    console.log(req.body)
    const newProject = new Project({
        proj_name:req.body.proj_name,
        stack:req.body  .stack,
        description:req.body.description,
        url:req.body.url,
        image: req.file.buffer, 
    });

    await newProject.save();
    res.status(201).send('Project added successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/experience', upload.single('image'), async (req, res) => {
  try {
    console.log(req.body)
    const newExperience = new Experience({
      role:req.body.role,
      company:req.body.company,
      salary:req.body.salary,
      work_done:req.body.work_done,
      start_month:req.body.start_month,
      end_month:req.body.end_month,
      image: req.file.buffer, 
    });

    await newExperience.save();
    res.status(201).send('Experience added successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.put('/certifications/updateImage', upload.single('image'), async (req, res) => {
  try {
    const orgNameToUpdate = 'Microsoft'; // Specify the org_name you want to update
    const certificationToUpdate = await Certification.findOne({ org_name: orgNameToUpdate });

    if (!certificationToUpdate) {
      return res.status(404).send('Certification not found');
    }

    certificationToUpdate.image = req.file.buffer;

    await certificationToUpdate.save();
    res.status(200).send('Image updated successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.put('/certifications/updatePath', async (req, res) => {
  try {
    const certNameToUpdate = req.body.cert_name; // Get the cert_name from the request body
    const pathToUpdate = req.body.path; // Get the path from the request body

    // Find the certification with the specified cert_name
    const certificationToUpdate = await Certification.findOne({ cert_name: certNameToUpdate });

    if (!certificationToUpdate) {
      return res.status(404).send('Certification not found');
    }

    // Update the path field
    certificationToUpdate.path = pathToUpdate;

    // Save the updated certification
    await certificationToUpdate.save();

    res.status(200).send('Path updated successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
