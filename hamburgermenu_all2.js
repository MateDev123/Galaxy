const openGpopu2Button = document.querySelector(".open-gpopu2-button");
const gpopu2Container = document.querySelector(".gpopu2-container");
const closeGpopu2Button = document.querySelector(".close-gpopu2");

openGpopu2Button.addEventListener("click", function() {
  gpopu2Container.style.display = "block";
});

closeGpopu2Button.addEventListener("click", function() {
  gpopu2Container.style.display = "none";
});

gpopu2Container.addEventListener("click", function(event) {
  if (event.target === gpopu2Container) {
    gpopu2Container.style.display = "none";
  }
});

