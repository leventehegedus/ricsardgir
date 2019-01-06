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

};

function fetchBackground() {
  var youtube = document.querySelectorAll(".youtube");
  var facebook = document.querySelectorAll(".facebook");

  console.log('facebook', youtube, facebook);


  for (var i = 0; i < youtube.length; i++) {

    var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/hqdefault.jpg";



//    console.log('source', source);

    var image = new Image();
    image.src = source;
    if(!source){
      console.log('sikítok');
    }
    image.addEventListener("load", function() {
      youtube[i].appendChild(image);
    }(i));
  }
}
