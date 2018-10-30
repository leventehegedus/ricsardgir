function playAudio(param) {
    document.getElementById(param.id).load();
    document.getElementById(param.id).play();
}



function pauseAudio(param) {
    document.getElementById(param.id).pause();
}

function toggleNav() {
    if(document.getElementById("menu").style.left === "0px") {
      if(window.innerWidth < 768){
        document.getElementById("menu").style.left = "-50vw";
      } else {
        document.getElementById("menu").style.left = "-25vw";
      }

      document.getElementById("menu").style.transition = "all ease 0.5s";
//      document.getElementsByClassName('block-container')[0].style.opacity = 1;
    }
    else {
      document.getElementById("menu").style.left = "0px";
      document.getElementById("menu").style.transition = "all ease 0.5s";
//      document.getElementsByClassName('block-container')[0].style.opacity = 0.2;
    }
}

function toggleBoringDetails(clip) {
  if(clip.style.display === "block") {
    clip.style.display = "none"
    document.getElementsByClassName(clip.id)[0].innerText = "katt"
  }
  else {
    clip.style.display = "block"
    document.getElementsByClassName(clip.id)[0].innerText = "x"
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
