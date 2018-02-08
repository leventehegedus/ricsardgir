function playAudio(param) {
    document.getElementById(param.id).load();
    document.getElementById(param.id).play();
}

function pauseAudio(param) {
    document.getElementById(param.id).pause();
}

function toggleNav() {
    if(document.getElementById("header").style.height === "250px") {
      document.getElementById("header").style.height = "40px";
      document.getElementById("header").style.transition = "all ease 0.5s";
    }
    else {
      document.getElementById("header").style.height = "250px";
      document.getElementById("header").style.transition = "all ease 0.5s";
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
