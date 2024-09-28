var video = document.getElementById("myVideo");
var body = document.querySelector("body");
var videoButtonsContainer = document.querySelector(".video-select");

function changeVideo(url, backgroundImageUrl) {
  // leállítjuk az aktuális lejátszást
  video.pause();
  // módosítjuk a video forrását
  video.src = url;
  // elindítjuk a lejátszást
  video.play();
  // módosítjuk a háttérképet
  body.style.backgroundImage = "url(" + backgroundImageUrl + ")";
}
