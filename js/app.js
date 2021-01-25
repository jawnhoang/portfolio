
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

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}