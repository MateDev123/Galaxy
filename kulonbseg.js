const startElem = document.querySelector("p.start");
const endElem = document.querySelector("p.end");
const startSzam =
  parseFloat(
    startElem.textContent
      .replace("Ft", "")
      .replace(/\s/g, "")
      .replace(",", "."),
  ) * 1000;
const endSzam =
  parseFloat(
    endElem.textContent.replace("Ft", "").replace(/\s/g, "").replace(",", "."),
  ) * 1000;
const kulonbseg = endSzam - startSzam;
const kulonbsegElem = document.querySelector("p.kulonbseg");
const completeButton = document.getElementById("completeButton");

// Ellenőrizd a kulonbseg értékét, és jelenítsd meg vagy rejtsd el a megfelelő elemeket
if (kulonbseg <= 0) {
  kulonbsegElem.style.display = "none"; // Elrejti a szöveget
  completeButton.style.display = "block"; // Megjeleníti a gombot
} else {
  kulonbsegElem.innerHTML =
    "Ennyi van még hátra: " + kulonbseg.toLocaleString("hu-HU") + " Ft";
  completeButton.style.display = "none"; // Elrejti a gombot, ha még nem teljesült a cél
}
