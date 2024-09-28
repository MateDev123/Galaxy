const t = document.querySelector("title");
const w = "Galaxy";
const e = "Galaxy";
let c = 0;
let originalTitle = t.textContent; // Az eredeti cím tárolása
let intervalId;
let isPageVisible = true;

function startTitleAnimation() {
  if (!isPageVisible) return; // Ne indítsa el az animációt, ha az oldal nem látható

  intervalId = setInterval(() => {
    c = c < w.length ? c + 1 : 0;
    t.textContent = w.slice(0, c);
    if (c === w.length) {
      setTimeout(() => {
        if (isPageVisible) {
          t.textContent += `${e}`;
        }
      }, 500);
    }
  }, 500);
}

function stopTitleAnimation() {
  clearInterval(intervalId);
  t.textContent = originalTitle; // Visszaállítás az eredeti címre
}

// Az oldal betöltésekor indítsa el az animációt, ha az oldal látható
if (!document.hidden) {
  startTitleAnimation();
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    isPageVisible = false;
    stopTitleAnimation();
    t.textContent = "Gyere vissza!";
  } else {
    isPageVisible = true;
    t.textContent = "Üdv itt újra!";
    setTimeout(() => {
      startTitleAnimation();
    }, 2000); // Késleltetés az animáció újraindítása előtt, hogy megjelenjen az üdvözlő üzenet
  }
});
console.log(
  "%cGalaxy 🔛🔝",
  "color:#ffffff; background: linear-gradient(180deg, #402662, #3900A6); font-size:1.5rem; padding:0.15rem 0.25rem; margin: 1rem auto; font-family: sans-serif; border: 2px solid #151522; border-radius: 4px; font-weight: bold; text-shadow: 0px 3px 14px #f9fafb8f;",
);
