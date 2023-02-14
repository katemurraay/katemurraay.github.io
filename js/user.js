export default class User {
    constructor(name, profession, email, linkedin, github){
      this.name = name;
      this.profession = profession;
      this.biography = "";
      this.technologies = "";
      this.linkedin = linkedin;
      this.github = github;
      this.email =email;
    }

    addBiography(bio, tech){
      this.biography = bio;
      this.technologies = tech;
    }
}