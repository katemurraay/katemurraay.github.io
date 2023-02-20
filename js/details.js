
import Project from './project.js'
import User from './user.js'
window.onload = function() {


  let kateM = new User('Kate Murray', 'Mobile Developer', 'katem.murray1998@gmail.com', 'https://www.linkedin.com/in/kate-murray-343138151/', 'https://github.com/katemurraay')
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

function populateProjects() {
  let android_project1 = new Project('Manchester United Android App', ['../images/project_01/1.png', '../images/project_01/2.png', '../images/project_01/3.png', '../images/project_01/4.png', '../images/project_01/5.png', '../images/project_01/6.png', '../images/project_01/7.png'], 'Details Information about the Manchester United football players.', '<ul><li>Displays and Reads Data from XML files. </li> <li> Implements Horizontal and Vertical Scrolling. </li> </ul>', 'https://github.com/katemurraay/ManUnitedApp');
  let android_project2 = new Project('Timer Android App', ['../images/project_02/1.png', '../images/project_02/2.png', '../images/project_02/3.png'], 'Graphical Clock and Timer application.', '<ul><li>Employs Android Graphical Features. </li><li>Utilises Android Services and Notifications. </li> <li>Applies Bottom Navigation Bar for swift movement. </li> </ul>', 'https://github.com/katemurraay/TimerApp');
  let android_project3 = new Project('Vegan Checker Android App', ['../images/project_03/1.gif', '../images/project_03/2.png', '../images/project_03/3.png', '../images/project_03/4.png', '../images/project_03/5.png', '../images/project_03/6.png', '../images/project_03/7.png'], 'Provides information regarding the vegan validity of food and alcohol products. ', '<ul> \
  <li>Integrates with Externally Hosted AWS Database for CRUD operations. </li> <li>Implements External Barcode Scanning Library.</li>  <li>Applies Google ML Kit Translator.</li> </ul>', 'https://github.com/katemurraay/VeganChecker');
  let android_project4 = new Project('Covid Hero Android App', ['../images/project_04/1.png', '../images/project_04/2.png', '../images/project_04/3.png', '../images/project_04/4.png', '../images/project_04/5.png', '../images/project_04/6.png', '../images/project_04/7.png'], 'Renders COVID information for different countries as well as a collection of superheros.', '<ul> \
  <li>Derives Covid Data from Web API.</li>        <li>Renders Data using External Line Graph Library.</li>  <li> Implements CRUD operations to a Hero API.</li></ul>', 'https://github.com/katemurraay/CovidHeroApp');

  let ios_project1 = new Project('Manchester United iOS App', ['../images/project_04/1.png', '../images/project_04/2.png', '../images/project_04/3.png', '../images/project_04/4.png', '../images/project_04/5.png', '../images/project_04/6.png', '../images/project_04/7.png'], 'Information about Project', '', 'https://github.com/katemurraay/Cs6317_Assignment2');

  let allProjects = [android_project2, android_project3, android_project1, android_project4];

  return allProjects;
}

function addBiography(user) {
  let bio = "I enjoy developing high quality Android apps.\
  I have a Masters of Science (MSc) in Computing Science from University College Cork along with a BSc in Business Information Systems.";
  let technologies = "<b>Android: </b> Android Studio / Java / APIs/  Espresso & JUnit Tests / Services / Notifications / Graphics / Clean Architecture / Data Binding / Navigation Components ";
  user.addBiography(bio, technologies);

}

function showImages(projects) {
  projects.forEach(project => {
    let project_index = projects.indexOf(project)
    let project_title = "proj_" + project_index.toString();
    let name_id = project_title + "_name";
    let detail_id = project_title + '_detail';
    let url_id = project_title + '_url';
    let dev_id = project_title + '_dev';
    document.getElementById(name_id).innerHTML = project.name;
    document.getElementById(detail_id).innerHTML = project.details;
    document.getElementById(dev_id).innerHTML = project.dev_info;
    document.getElementById(url_id).addEventListener("click", function() { window.location.href = project.url });
    for (let j = 0; j < project.images.length; j++) {

      let imgId = project_title + "_img_" + j.toString();
      let image = document.getElementById(imgId);
      image.src = project.images[j];
      image.alt = imgId + "Not Found";

    }
  });

}

