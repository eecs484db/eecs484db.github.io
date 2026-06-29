// Hide Webby in the footer

(function () {
    webby();
})();

function webby() {
    const e = document.createElement("img");
    e.src = "assets/images/eecs484logo.png";
    e.style = "height: 40px; filter: drop-shadow(white 0px 0px 8px);";

    const backstory = `
You found Webby!
Webby is a spider, whose name and species are inspired by the "Web" in "Web Systems." He is very good at deBUGging programs :)
Webby was born Fall 2024 on a whiteboard in GSI Melina O'Dell's lab.`;

    const tooltip = document.createElement("span");
    tooltip.style = "margin: 0 auto;";
    tooltip.dataset.variation = "wide";
    tooltip.dataset.position = "top center";
    tooltip.dataset.content = backstory;

    tooltip.appendChild(e);
    document.querySelector("footer").firstElementChild.appendChild(tooltip);
}
