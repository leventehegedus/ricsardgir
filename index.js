function playAudio(param) {
    document.getElementById(param.id).load();
    document.getElementById(param.id).play();
}



function pauseAudio(param) {
    document.getElementById(param.id).pause();
}

function toggleNav() {
    if(document.getElementById("header").style.height === "366px") {
      document.getElementById("header").style.height = "40px";
      document.getElementById("header").style.transition = "all ease 0.5s";
//      document.getElementsByClassName('block-container')[0].style.opacity = 1;
    }
    else {
      document.getElementById("header").style.height = "366px";
      document.getElementById("header").style.transition = "all ease 0.5s";
//      document.getElementsByClassName('block-container')[0].style.opacity = 0.2;
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

function getLikeSound(user){
  if(user.indexOf('martondani') > -1){
    let number = Math.floor(Math.random() * 1 + 1);
    let filename = 'martondanilike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  } else if (user.indexOf('laci') > -1) {
    let number = Math.floor(Math.random() * 3 + 1);
    let filename = 'lacilike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  } else if (user.indexOf('eva') > -1) {
    let number = Math.floor(Math.random() * 3 + 1);
    let filename = 'evalike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
}
function getDislikeSound(user){
  if(user.indexOf('martondani') > -1){
    let number = Math.floor(Math.random() * 1 + 1);
    let filename = 'martondanidislike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  } else if (user.indexOf('laci') > -1) {
    let number = Math.floor(Math.random() * 4 + 1);
    let filename = 'lacidislike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  } else if (user.indexOf('eva') > -1) {
    let number = Math.floor(Math.random() * 1 + 1);
    let filename = 'evadislike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
}

function getSuperLikeSoundLaci(){
  let number = Math.floor(Math.random() * 5 + 1);
  let filename = 'laci' + number;
  document.getElementById(filename).load();
  document.getElementById(filename).play();
}

function getSuperLikeSoundEva(){
  let number = Math.floor(Math.random() * 4 + 1);
  let filename = 'eva' + number;
  document.getElementById(filename).load();
  document.getElementById(filename).play();
}
