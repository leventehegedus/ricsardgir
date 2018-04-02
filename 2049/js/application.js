// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "../2049/img/212/doge-derp-212.gif",
        "../2049/img/212/doge-fat-212.gif",
        "../2049/img/212/doge-gradient-212.gif",
        "../2049/img/212/doge-hat-212.gif",
        "../2049/img/212/doge-peepers-212.gif",
        "../2049/img/212/doge-prizza-212.gif",
        "../2049/img/212/doge-rainbow-212.gif",
        "../2049/img/212/doge-shake-space-212.gif",
        "../2049/img/212/doge-sunglasses-212.gif",
        "../2049/img/212/doge-shake-212.gif",
        "../2049/img/212/2.png"
    ];
    for(var i = 0; i < imageList.length; i++ )
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
