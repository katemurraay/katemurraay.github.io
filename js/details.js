
import Project from './project.js'
import User from './user.js'
window.onload = function(){


    let kateM = new User('Kate Murray', 'Mobile Developer', 'katem.murray1998@gmail.com', 'https://www.linkedin.com/in/kate-murray-343138151/', 'https://github.com/katemurraay' )
    var email = "mailto: " + kateM.email;
    addBiography(kateM);
    document.getElementById('header_email').href = email;
    document.getElementById('header_linkedin').href = kateM.linkedin;
    document.getElementById('header_github').href = kateM.github;
    document.getElementById('footer_email').href = email;
    document.getElementById('footer_linkedin').href = kateM.linkedin;
    document.getElementById('footer_github').href = kateM.github;
    document.getElementById('bio').innerHTML = kateM.biography;
    document.getElementById('tech').innerHTML = kateM.technologies;
    let projects = populateProjects();
    showImages(projects);
};

function populateProjects(){
  let android_project1 = new Project('Manchester United App', ['https://i.ibb.co/BGqc6sY/completed-no-frame-2.png', 'https://i.ibb.co/BGqc6sY/completed-no-frame-2.png'], 'Information about Project', 'https://github.com/katemurraay');
  let android_project2 = new Project('Timer App', ['https://i.ibb.co/BGqc6sY/completed-no-frame-2.png', 'https://i.ibb.co/BGqc6sY/completed-no-frame-2.png'], 'Information about Project', 'https://github.com/katemurraay');
  let android_project3 = new Project('The Vegan Checker App', ['../images/project_03/1.gif', '../images/project_02/2.png','../images/project_03/3.png', '../images/project_03/4.png', '../images/project_03/5.png', '../images/project_03/6.png', '../images/project_03/7.png'], 'Information about Project', 'https://github.com/katemurraay/VeganCheckerApp');
  
  let ios_project1 = new Project('Manchester United App', ['https://i.ibb.co/BGqc6sY/completed-no-frame-2.png', 'https://i.ibb.co/BGqc6sY/completed-no-frame-2.png'], 'Information about Project', 'https://github.com/katemurraay');
  let ios_project2 = new Project('Timer App', ['https://i.ibb.co/BGqc6sY/completed-no-frame-2.png', 'https://i.ibb.co/BGqc6sY/completed-no-frame-2.png'], 'Information about Project', 'https://github.com/katemurraay');
  
  let allProjects = [android_project1, android_project2, android_project3];
  
  return allProjects;
}

function addBiography(user){
  let bio = "I'm an Mobile Developer. \
  I enjoy developing high quality Android and iOS apps.\
  I have a degree in Masters of Science (MSc) in Computing Science along with a BSc in Business Information Systems.";
  let technologies = "<b>Android: </b> Android Studio / Java / APIs/  Espresso & JUnit Tests / Clean Architecture  <br> <br> <b> iOS: </b> Xcode /  Swift / Storyboard / Data Binding / Navigation Components ";
  user.addBiography(bio, technologies);
  
}

function showImages(projects){
  projects.forEach(project => {
    let project_index = projects.indexOf(project)
    let project_title =  "proj_" + project_index.toString();
    let name_id = project_title + "_name";
    let detail_id = project_title + '_detail';
    let url_id = project_title + '_url';
    document.getElementById(name_id).innerHTML = project.name;
    document.getElementById(detail_id).innerHTML = project.details;     
    document.getElementById(url_id).addEventListener( "click", function(){window.location.href=project.url});
    for (let j = 0; j < project.images.length; j++) {
        
        let imgId = project_title +"_img_" + j.toString();
        let image = document.getElementById(imgId);
        image.src = project.images[j];

    }});
  
}

