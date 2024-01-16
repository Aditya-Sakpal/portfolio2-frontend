




export function pcHomePageAnimation(requiredTime) {
  setTimeout(() => {
    var intro_main = document.getElementById("intro_main");
    intro_main.classList.add("animate-slideTop");

    var cv_div = document.getElementById("upload-resume");
    cv_div.classList.add("animate-slideBottom1");

    var container = document.getElementById("location-container");
    container.classList.add("animate-slideLeft");

    var parent_chat = document.getElementById("chatbot-container");
    parent_chat.classList.add("animate-slideRight");
  }, requiredTime);
}

export function pcAboutPageAnimation(requiredTime) {
  setTimeout(() => {
    var imageSection = document.getElementById("imageSection");
    imageSection.classList.add("animate-slideLeft");

    var about_headings = document.getElementById("about_headings");
    about_headings.classList.add("animate-slideTop");

    var about_info1 = document.getElementById("about_info1");
    about_info1.classList.add("animate-slideRight");

    var about_info2 = document.getElementById("about_info2");
    about_info2.classList.add("animate-slideRight");

    var personalInfo = document.getElementById("personalInfo");
    personalInfo.classList.add("animate-slideBottom1");
  }, requiredTime);
}

const progressPercent = (element) => {
  var value = element.getAttribute("value");
  var numericValue = parseInt(value, 10);
  let counter = 0;
  setInterval(() => {
    if (counter >= numericValue) {
      clearInterval();
    } else {
      counter += 10;
      element.setAttribute("value", counter + "%");
    }
  }, 310);
};

export function pcSkillsPageAnimation(requiredTime) {
  setTimeout(() => {
    var webDevDiv = document.getElementById("web-dev-skills")
    webDevDiv.classList.add("animate-slideLeft")

    var mlDiv = document.getElementById("ml-skills")
    mlDiv.classList.add("animate-slideBottom1")

    var cloudDiv = document.getElementById("cloud-skills")
    cloudDiv.classList.add("animate-slideRight")

    var progress_line = document.getElementsByClassName("progress-line");
    for (var i = 0; i < progress_line.length; i++) {
      var element = progress_line[i];
      element.classList.add("animate-progress");
      progressPercent(element);
    }


  }, requiredTime)
}

export function pcCertificationsPageAnimation(requiredTime) {
  setTimeout(() => {
    var certificateDivs = document.getElementsByClassName('certificate-div');
    if(certificateDivs.length > 0){
      certificateDivs[0].classList.add('animate-slideLeft')
      certificateDivs[1].classList.add('animate-slideRight')
      certificateDivs[2].classList.add('animate-slideTop')
      certificateDivs[3].classList.add('animate-slideBottom1')
      certificateDivs[4].classList.add('animate-slideLeft')
      certificateDivs[5].classList.add('animate-slideRight')
      certificateDivs[6].classList.add('animate-slideTop')
      certificateDivs[7].classList.add('animate-slideBottom1')
      certificateDivs[8].classList.add('animate-slideLeft')
    }
  }, requiredTime)
}

export function pcProjectsPageAnimation(requiredTime) {

  setTimeout(() => {
    var ProjectDivs = document.getElementsByClassName('project-div');
    if (ProjectDivs.length > 0) {
      ProjectDivs[0].classList.add('animate-slideLeft')
      ProjectDivs[1].classList.add('animate-slideRight')
      ProjectDivs[2].classList.add('animate-slideTop')
      ProjectDivs[3].classList.add('animate-slideBottom1')
      ProjectDivs[4].classList.add('animate-slideLeft')
      ProjectDivs[5].classList.add('animate-slideRight')
      ProjectDivs[6].classList.add('animate-slideTop')
      ProjectDivs[7].classList.add('animate-slideBottom1')
      ProjectDivs[8].classList.add('animate-slideLeft')
    }
  }, requiredTime)
}

export function pcExperiencePageAnimation(requiredTime){
  setTimeout(()=>{
    var experienceContent=document.getElementById("experience-content")
    var chart = document.getElementById("chart")

    experienceContent.classList.add("animate-slideLeft")
    chart.classList.add("animate-slideRight")

  },requiredTime)
}

export function pcEducationPageAnimation(requiredTime){
  setTimeout(()=>{
    var EducationYears=document.getElementsByClassName('year')
    EducationYears[0].classList.add('animate-slideTop')
    EducationYears[1].classList.add('animate-slideLeft')
    EducationYears[2].classList.add('animate-slideRight')
    EducationYears[3].classList.add('animate-slideBottom1')


    var EducationContent=document.getElementsByClassName('education-content-body-ele')
    EducationContent[0].classList.add('animate-slideTop')
    EducationContent[1].classList.add('animate-slideLeft')
    EducationContent[2].classList.add('animate-slideRight')
    EducationContent[3].classList.add('animate-slideBottom1')
  },requiredTime)
}

export function pcFeedbackPageAnimation(requiredTime){
  setTimeout(()=>{
    var chartContainer=document.getElementById("chart-container")
    var feedbackForm=document.getElementById("feedback-form")
    var feedbackDisplayArea=document.getElementById("feedback-display-area")

    chartContainer.classList.add('animate-slideTop')
    feedbackForm.classList.add('animate-slideLeft')
    feedbackDisplayArea.classList.add('animate-slideRight')
  },requiredTime)
}

export function pcContactPageAnimation(requiredTime){
  setTimeout(()=>{
    var queryForm=document.getElementById("contact-content-left-form")
    var contactDetails=document.getElementById("contact-content-right-container")

    queryForm.classList.add("animate-slideTop")
    contactDetails.classList.add("animate-slideBottom1")
  },requiredTime)
}


// MOBILE RELATED FUNCTIONS

export function mobileHomePageAnimation(requiredTime) {
  setTimeout(() => {
    var mobileIntroDiv = document.getElementById("mobile-intro-div");
    mobileIntroDiv.classList.add("mobile-animate-slideRight");

    var mobileWelcomeMsg = document.getElementById("mobile-welcome-msg");
    mobileWelcomeMsg.classList.add("mobile-animate-slideLeft");

    var mobileResume = document.getElementById("mobile-download-resume")
    mobileResume.classList.add("mobile-animate-slideRight")
  }, requiredTime);
}

export function mobileChabotPageAnimation(requiredTime) {
  setTimeout(() => {
    var mobileChatbot = document.getElementById("mobile-chatbot")
    mobileChatbot.classList.add("mobile-animate-slideLeft")
  }, requiredTime)
}

export function mobileAboutPageAnimation(requiredTime) {
  setTimeout(() => {
    var mobileImgSection = document.getElementById("mobile-img-section")
    mobileImgSection.classList.add("mobile-animate-slideTop")

    var mobileAboutHeader = document.getElementById("mobile-about-card-bottom-header")
    mobileAboutHeader.classList.add("mobile-animate-slideTop")

    var mobileAboutInfo1 = document.getElementById("mobile-about-info1")
    mobileAboutInfo1.classList.add("mobile-animate-slideLeft")

    var mobileAboutInfo2 = document.getElementById("mobile-about-info2")
    mobileAboutInfo2.classList.add("mobile-animate-slideRight")

    var mobileAboutFooter = document.getElementById("mobile-about-card-bottom-footer")
    mobileAboutFooter.classList.add("mobile-animate-slideBottom")

  }, requiredTime)
}

export function mobileSkillsPageAnimation(requiredTime) {
  setTimeout(() => {
    var mobileWebDevSection = document.getElementById("mobile-web-dev-skills")
    mobileWebDevSection.classList.add("mobile-animate-slideLeft")

    var mobileMLSection = document.getElementById("mobile-ml-skills")
    mobileMLSection.classList.add("mobile-animate-slideRight")

    var mobileCloudSection = document.getElementById("mobile-cloud-skills")
    mobileCloudSection.classList.add("mobile-animate-slideLeft")

    var progress_line = document.getElementsByClassName("mobile-progress-line");
    for (var i = 0; i < progress_line.length; i++) {
      var element = progress_line[i];
      element.classList.add("animate-progress");
      progressPercent(element);
    }

  }, requiredTime)
}

export function mobileCertificationsPageAnimation(requiredTime){
  setTimeout(()=>{
    var certificateDivs = document.getElementsByClassName('mobile-certificate-div');
    if(certificateDivs.length > 0){
      certificateDivs[0].classList.add('animate-slideLeft')
      certificateDivs[1].classList.add('animate-slideRight')
      certificateDivs[2].classList.add('animate-slideLeft')
      certificateDivs[3].classList.add('animate-slideRight')
      certificateDivs[4].classList.add('animate-slideLeft')
      certificateDivs[5].classList.add('animate-slideRight')
      certificateDivs[6].classList.add('animate-slideLeft')
      certificateDivs[7].classList.add('animate-slideRight')
      certificateDivs[8].classList.add('animate-slideLeft')
    }
  },requiredTime)
}

export function mobileProjectsPageAnimation(requiredTime) {

  setTimeout(() => {
    var ProjectDivs = document.getElementsByClassName('mobile-project-div');
    if (ProjectDivs.length > 0) {
      ProjectDivs[0].classList.add('animate-slideLeft')
      ProjectDivs[1].classList.add('animate-slideRight')
      ProjectDivs[2].classList.add('animate-slideLeft')
      ProjectDivs[3].classList.add('animate-slideRight')
      ProjectDivs[4].classList.add('animate-slideLeft')
      ProjectDivs[5].classList.add('animate-slideRight')
      ProjectDivs[6].classList.add('animate-slideLeft')
      ProjectDivs[7].classList.add('animate-slideRight')
      ProjectDivs[8].classList.add('animate-slideLeft')
    }
  }, requiredTime)
}

export function mobileExperiencePageAnimation(requiredTime){
  setTimeout(()=>{
    var experienceContent=document.getElementById("mobile-experience-content")
    var chart = document.getElementById("mobile-chart")

    experienceContent.classList.add("animate-slideTop")
    chart.classList.add("animate-slidebBottom1")

  },requiredTime)
}

export function mobileEducationPageAnimation(requiredTime){
  setTimeout(()=>{
    var EducationYears=document.getElementsByClassName('mobile-year')
    EducationYears[0].classList.add('animate-slideTop')
    EducationYears[1].classList.add('animate-slideLeft')
    EducationYears[2].classList.add('animate-slideRight')
    EducationYears[3].classList.add('animate-slideBottom1')


    var EducationContent=document.getElementsByClassName('mobile-detail')
    EducationContent[0].classList.add('animate-slideTop')
    EducationContent[1].classList.add('animate-slideLeft')
    EducationContent[2].classList.add('animate-slideRight')
    EducationContent[3].classList.add('animate-slideBottom1')
  },requiredTime)
}

export function mobileContactPageAnimation(requiredTime){
  setTimeout(()=>{
    var contactDetails = document.getElementById("mobile-contact-details")
    var queryForm = document.getElementById("mobile-contact-form")

    contactDetails.classList.add('animate-slideLeft')
    queryForm.classList.add('animate-slideRight')
  },requiredTime)
}

export function mobileFeedbackPageAnimation(requiredTime){
  setTimeout(()=>{
    var feedbackTopLeft = document.getElementById("mobile-feedback-top-left")
    var feedbackTopRight = document.getElementById("mobile-feedback-top-right")
    var feedbackForm=document.getElementById("mobile-feedback-form")

    feedbackTopLeft.classList.add("animate-slideLeft")
    feedbackTopRight.classList.add("animate-slideTop")
    feedbackForm.classList.add("animate-slideBottom1")

  },requiredTime)
}

export function mobileFeatsPageAnimation(requiredTime){
  setTimeout(()=>{
    var feats=document.getElementsByClassName('feat')
    feats[0].classList.add('animate-slideLeft')
    feats[1].classList.add('animate-slideRight')
    feats[2].classList.add('animate-slideLeft')
    feats[3].classList.add('animate-slideRight')
    
  },requiredTime)
}
