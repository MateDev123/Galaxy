const t = document.querySelector("title"),
    w = "Galaxy",
    e = "Galaxy";
let c = 0;
let originalTitle = t.textContent; // Store the original title
let intervalId;

function startTitleAnimation() {
    intervalId = setInterval(() => {
        c = c < w.length ? c + 1 : 0;
        t.textContent = w.slice(0, c);
        if (c === w.length) {
            setTimeout(() => {
                t.textContent += `${e}`;
            }, 500);
        }
    }, 500);
}

function stopTitleAnimation() {
    clearInterval(intervalId);
    t.textContent = originalTitle; // Reset to the original title
}

// Start the title animation initially
startTitleAnimation();

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        stopTitleAnimation();
        t.textContent = "Gyere vissza!";
    } else {
        t.textContent = "Üdv itt újra!";
        setTimeout(() => {
            startTitleAnimation();
        }, 2000); // Delay restarting the animation to show the welcome message
    }
});
