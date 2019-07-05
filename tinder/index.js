function swipeleft(param){
  getDislikeSound(param);
  document.getElementsByClassName(param)[0].className = document.getElementsByClassName(param)[0].className + ' dislikedTinderCard';
  if(param === 'fruzsiswipe'){
    // TODO: koalaur legyen majd
    setTimeout(function(){restartSwiping()},1666);
  }
}

function swiperight(param) {
  getLikeSound(param);
  document.getElementsByClassName(param)[0].className = document.getElementsByClassName(param)[0].className + ' likedTinderCard';
  if(param === 'fruzsiswipe'){
    // TODO: koalaur legyen
    setTimeout(function(){restartSwiping()},1666);
  }
}

function restartSwiping(){
  var cards = document.getElementsByClassName('tinder-card-container')

  Array.prototype.forEach.call(cards, function(card) {
    card.classList.remove('dislikedTinderCard');
    card.classList.remove('likedTinderCard');
  });
}

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
  else if (user.indexOf('mate') > -1) {
    let number = Math.floor(Math.random() * 3 + 1);
    let filename = 'matelike' + number;
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
  else if (user.indexOf('mate') > -1) {
    let number = Math.floor(Math.random() * 3 + 1);
    let filename = 'matedislike' + number;
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
  else if (user.indexOf('mate') > -1) {
    let number = Math.floor(Math.random() * 3 + 1);
    let filename = 'mate' + number;
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
