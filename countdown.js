function updateTimer() {
  future = Date.parse("August 18, 2024 12:00:00");
  now = new Date();
  diff = future - now;

  years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);

  y = years;
  d = days - years * 365;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;

  // Ha az időzítő letelt, akkor a "Vége" szöveget írjuk ki
  if (diff <= 0) {
    document.getElementById("timer").innerHTML =
      '<div class="calacend">Vége<div>';
    return;
  }

  document.getElementById("timer").innerHTML =
    "<div>" +
    d +
    "<span>Nap</span></div>" +
    "<div>" +
    h +
    "<span>Óra</span></div>" +
    "<div>" +
    m +
    "<span>Perc</span></div>" +
    "<div>" +
    s +
    "<span>Másodperc</span></div>";
}

setInterval("updateTimer()", 1);
