export default class Project {
    constructor(name, images, details, url){
      this.name = name;
      this.images = images;
      this.details = details;
      this.url = url;
    }
  
    addImage(img){
      this.images.push(img);
    }
    removeImage(img){
      this.images.includes(img)? this.images.pop(img): console.log("No Image Found");
    }
    
  }