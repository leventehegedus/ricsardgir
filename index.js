function playAudio(param) {
    document.getElementById(param.id).load();
    document.getElementById(param.id).play();
}

function pauseAudio(param) {
    document.getElementById(param.id).pause();
}

function toggleNav() {
    if(document.getElementById("header").style.height === "391px") {
      document.getElementById("header").style.height = "40px";
      document.getElementById("header").style.transition = "all ease 0.5s";
      document.getElementsByClassName('block-container')[0].style.opacity = 1;
    }
    else {
      document.getElementById("header").style.height = "391px";
      document.getElementById("header").style.transition = "all ease 0.5s";
      document.getElementsByClassName('block-container')[0].style.opacity = 0.2;
    }
}

function toggleBoringDetails(clip) {
  if(clip.style.display === "block") {
    clip.style.display = "none"
  }
  else {
    clip.style.display = "block"
  }
}

function toggleTinder(param){
  if(document.getElementById(param).style.display !== "block") {
    document.getElementById(param).style.display = "block";
  }
  else {
    document.getElementById(param).style.display = "none";
  }
}

$(document).ready(function() {
  document.getElementsByClassName('header')[0].style.marginTop = '36px'
});
