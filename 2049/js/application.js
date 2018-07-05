// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "../2049/img/212/2.gif",
        "../2049/img/212/4.gif",
        "../2049/img/212/8.gif",
        "../2049/img/212/16.gif",
        "../2049/img/212/32.gif",
        "../2049/img/212/64.gif",
        "../2049/img/212/128.gif",
        "../2049/img/212/256.gif",
        "../2049/img/212/512.gif",
        "../2049/img/212/1024.gif",
        "../2049/img/212/2048.png",
        "../2049/img/212/4096.png",
        "../2049/img/212/8192.png"
    ];
    for(var i = 0; i < imageList.length; i++ )
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
