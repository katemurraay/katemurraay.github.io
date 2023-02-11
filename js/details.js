
import Project from './project.js'
import User from './user.js'
window.onload = function(){

    
    let kateM = new User('Kate Murray', 'Mobile Developer', 'katem.murray1998@gmail.com', 'https://www.linkedin.com/in/kate-murray-343138151/', 'https://github.com/katemurraay' )
    var email = "mailto: " + kateM.email;
    document.getElementById('header_email').href = email;
    document.getElementById('header_linkedin').href = kateM.linkedin;
    document.getElementById('header_github').href = kateM.github;
    document.getElementById('footer_email').href = email;
    document.getElementById('footer_linkedin').href = kateM.linkedin;
    document.getElementById('footer_github').href = kateM.github;
    let projects = populateProjects();
    showImages(projects);
};

function populateProjects(){
  let project1 = new Project('Name of Project', ['https://i.ibb.co/BGqc6sY/completed-no-frame-2.png', 'https://i.ibb.co/BGqc6sY/completed-no-frame-2.png'], 'Information about Project', 'https://www.github.com');
  let project2 = new Project('Name of Project', ['https://i.ibb.co/BGqc6sY/completed-no-frame-2.png', 'https://i.ibb.co/BGqc6sY/completed-no-frame-2.png'], 'Information about Project', 'https://github.com/katemurraay');

  let allProjects = [project1, project2];
  
  return allProjects;
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

