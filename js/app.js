function archerproj(){
    var dirPath = dirname(location.href);
    fullPath = dirPath + "/archer.html";
    window.location = fullPath;
  }
  
  function jinaproj(){
    var dirPath = dirname(location.href);
    fullPath = dirPath + "/jina.html";
    window.location = fullPath;
  }
  
  function home(){
      var dirPath = dirname(location.href);
      fullPath = dirPath + "/index.html";
      window.location = fullPath;
  }
  
  function contacts(){
      var dirPath = dirname(location.href);
      fullPath = dirPath + "/contact.html";
      window.location = fullPath;
  }
  
  function projects(){
      var dirPath = dirname(location.href);
      fullPath = dirPath + "/project.html";
      window.location = fullPath;
  }
  function dirname(path){
      return path.replace(/\\/g,'/').replace(/\/[^\/]*$/,'');
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }


  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navDropDown() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topNav") {
      x.className += " responsive";
    } else {
      x.className = "topNav";
    }
  }