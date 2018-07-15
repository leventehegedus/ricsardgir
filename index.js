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
  if(user.indexOf('andris') > -1){
    let number = Math.floor(Math.random() * 2 + 1);
    let filename = 'andrislike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('alma') > -1) {
    let number = Math.floor(Math.random() * 4 + 1);
    let filename = 'almalike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('bali') > -1) {
    let number = Math.floor(Math.random() * 3 + 1);
    let filename = 'balilike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('barbi') > -1) {
    let number = Math.floor(Math.random() * 4 + 1);
    let filename = 'barbilike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('boldi') > -1) {
    let number = Math.floor(Math.random() * 4 + 1);
    let filename = 'boldilike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('edina') > -1) {
    let number = Math.floor(Math.random() * 4 + 1);
    let filename = 'edinalike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('eszter') > -1) {
    let number = Math.floor(Math.random() * 3 + 1);
    let filename = 'eszterlike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('eva') > -1) {
    let number = Math.floor(Math.random() * 3 + 1);
    let filename = 'evalike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('ford') > -1) {
    let number = Math.floor(Math.random() * 3 + 1);
    let filename = 'fordlike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('fruzsi') > -1) {
    let number = Math.floor(Math.random() * 1 + 1);
    let filename = 'fruzsilike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('flora') > -1) {
    let number = Math.floor(Math.random() * 1 + 1);
    let filename = 'floralike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('laci') > -1) {
    let number = Math.floor(Math.random() * 3 + 1);
    let filename = 'lacilike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('martondani') > -1) {
    let number = Math.floor(Math.random() * 1 + 1);
    let filename = 'martondanilike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('nora') > -1) {
    let number = Math.floor(Math.random() * 1 + 1);
    let filename = 'noralike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
}

function getDislikeSound(user){
  if(user.indexOf('andris') > -1){
    let number = Math.floor(Math.random() * 2 + 1);
    let filename = 'andrisdislike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('alma') > -1) {
    let number = Math.floor(Math.random() * 2 + 1);
    let filename = 'almadislike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('bali') > -1) {
    let number = Math.floor(Math.random() * 3 + 1);
    let filename = 'balidislike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('barbi') > -1) {
    let number = Math.floor(Math.random() * 4 + 1);
    let filename = 'barbidislike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('boldi') > -1) {
    let number = Math.floor(Math.random() * 4 + 1);
    let filename = 'boldidislike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('edina') > -1) {
    let number = Math.floor(Math.random() * 5 + 1);
    let filename = 'edinadislike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('eszter') > -1) {
    let number = Math.floor(Math.random() * 1 + 1);
    let filename = 'eszterdislike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('eva') > -1) {
    let number = Math.floor(Math.random() * 1 + 1);
    let filename = 'evadislike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('ford') > -1) {
    let number = Math.floor(Math.random() * 3 + 1);
    let filename = 'forddislike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('fruzsi') > -1) {
    let number = Math.floor(Math.random() * 1 + 1);
    let filename = 'fruzsidislike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('flora') > -1) {
    let number = Math.floor(Math.random() * 1 + 1);
    let filename = 'floradislike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('laci') > -1) {
    let number = Math.floor(Math.random() * 4 + 1);
    let filename = 'lacidislike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('martondani') > -1) {
    let number = Math.floor(Math.random() * 1 + 1);
    let filename = 'martondanidislike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('nora') > -1) {
    let number = Math.floor(Math.random() * 3 + 1);
    let filename = 'noradislike' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
}

function getSuperLikeSound(user){
  if(user.indexOf('andris') > -1){
    let number = Math.floor(Math.random() * 2 + 1);
    let filename = 'andris' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('alma') > -1) {
    let number = Math.floor(Math.random() * 3 + 1);
    let filename = 'alma' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('bali') > -1) {
    let number = Math.floor(Math.random() * 2 + 1);
    let filename = 'bali' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('barbi') > -1) {
    let number = Math.floor(Math.random() * 4 + 1);
    let filename = 'barbi' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('boldi') > -1) {
    let number = Math.floor(Math.random() * 3 + 1);
    let filename = 'boldi' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('edina') > -1) {
    let number = Math.floor(Math.random() * 6 + 1);
    let filename = 'edina' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('eszter') > -1) {
    let number = Math.floor(Math.random() * 3 + 1);
    let filename = 'eszter' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('eva') > -1) {
    let number = Math.floor(Math.random() * 4 + 1);
    let filename = 'eva' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('ford') > -1) {
    let number = Math.floor(Math.random() * 3 + 1);
    let filename = 'ford' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('fruzsi') > -1) {
    let number = Math.floor(Math.random() * 1 + 1);
    let filename = 'fruzsi' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('flora') > -1) {
    let number = Math.floor(Math.random() * 1 + 1);
    let filename = 'flora' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('laci') > -1) {
    let number = Math.floor(Math.random() * 5 + 1);
    let filename = 'laci' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('martondani') > -1) {
    let number = Math.floor(Math.random() * 1 + 1);
    let filename = 'martondani' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
  else if (user.indexOf('nora') > -1) {
    let number = Math.floor(Math.random() * 1 + 1);
    let filename = 'nora' + number;
    document.getElementById(filename).load();
    document.getElementById(filename).play();
  }
}
