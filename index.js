function playAudio(param) {
    document.getElementById(param.id).load();
    document.getElementById(param.id).play();
}



function pauseAudio(param) {
    document.getElementById(param.id).pause();
}

function toggleNav() {
  if (document.getElementById("menu").style.left === "0px") {
    document.getElementById("menu").style.left = "-100vw";
    document.getElementById("menu").style.transition = "all ease 0.5s";
  } else {
    document.getElementById("menu").style.left = "0px";
    document.getElementById("menu").style.transition = "all ease 0.5s";
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
