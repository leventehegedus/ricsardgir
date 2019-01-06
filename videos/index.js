function playVideo() {

  var youtube = document.querySelectorAll(".youtube");

  for (var i = 0; i < youtube.length; i++) {

    youtube[i].addEventListener("click", function() {

      var iframe = document.createElement("iframe");

      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

      this.innerHTML = "";
      this.appendChild(iframe);
    });
  };

  var facebook = document.querySelectorAll(".fbvideo");
  for (var i = 0; i < facebook.length; i++) {

    facebook[i].addEventListener("click", function() {

      var iframe = document.createElement("iframe");

      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("src", "https://www.facebook.com/plugins/video.php?autoplay=true&href=https%3A%2F%2Fwww.facebook.com%2Fricsardgir%2Fvideos%2F" + this.dataset.embed + "%2F&show_text=0&width=560");
      this.innerHTML = "";
      this.appendChild(iframe);
    });


  }

};

function fetchBackground() {
  var youtube = document.querySelectorAll(".youtube");

  for (var i = 0; i < youtube.length; i++) {

    var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/hqdefault.jpg";

    var image = new Image();
    image.src = source;
    image.addEventListener("load", function() {
      youtube[i].appendChild(image);
    }(i));
  }

  var facebook = document.querySelectorAll(".fbvideo");
  for (var i = 0; i < facebook.length; i++) {

    console.log(facebook);

    var source = "./" + facebook[i].dataset.embed + ".jpg";

    var image = new Image();
    image.src = source;
    image.addEventListener("load", function() {
      facebook[i].appendChild(image);
    }(i));
  }
}

//<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fricsardgir%2Fvideos%2F1202651653093018%2F&show_text=0&width=560" preload="none" width="300" height="180" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
