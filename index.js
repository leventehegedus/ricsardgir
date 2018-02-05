function playAudio(param) {
    document.getElementById(param.id).load();
    document.getElementById(param.id).play();
}

function pauseAudio(param) {
    document.getElementById(param.id).pause();
}

function openNav() {
    document.getElementById("header").style.height = "240px";
    document.body.style.backgroundColor = "rgba(255,255,0,1)";
    document.getElementsByClassName("closebtn")[0].style.opacity = "1";
    document.getElementsByClassName("closebtn")[0].style.display = "block";
    document.getElementsByClassName("openbtn")[0].style.color = "#f0f";
}

function closeNav() {
    document.getElementById("header").style.height = "40px";
    document.body.style.backgroundColor = "white";
    document.getElementsByClassName("closebtn")[0].style.opacity = "0";
    document.getElementsByClassName("closebtn")[0].style.display = "none";
    document.getElementsByClassName("openbtn")[0].style.color = "#ff0";
}
