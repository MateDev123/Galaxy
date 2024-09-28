document.addEventListener("DOMContentLoaded", function () {
    const startElement = document.querySelector(".start");
    const endElement = document.querySelector(".end");
    const differenceElement = document.querySelector("#kulonbseg");

    const startValue = parseInt(
        startElement.textContent.trim().replace(/\D/g, ""),
    );
    const endValue = parseInt(endElement.textContent.trim().replace(/\D/g, ""));

    const progressBar = document.querySelector(".progress-bar3");
    const progressLabel = document.querySelector(".progress-label");
    const percentage =
        100 -
        ((endValue - startValue) / (endValue - startValue + startValue)) * 100;
    progressBar.style.width = percentage + "%";

    progressLabel.textContent = Math.floor(percentage) + "%";
    console.log(
        "%cA célnak a " + percentage + "%" + "-át már sikreűlt elérni!",
        "color:#ffffff; background: linear-gradient(180deg, #402662, #3900A6); font-size:1.5rem; padding:0.15rem 0.25rem; margin: 1rem auto; font-family: sans-serif; border: 2px solid #151522; border-radius: 4px; font-weight: bold; text-shadow: 0px 3px 14px #f9fafb8f;",
    );
});
