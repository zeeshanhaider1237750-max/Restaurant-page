import headerImage from "./images/header-back-img.jpg";
import { homeLayoutFunction } from "./home.js";
import {menuLayoutFunction} from "./menu.js";
 
const mainHeader = document.querySelector("header");
const headingOne = document.querySelector("h1");
const paragraphOne = document.querySelector("p");
const headerStyle = document.querySelector("header");
const headingParagraph = document.querySelector(".heads");
const buttonS = document.querySelectorAll("button");
const naV = document.querySelector("nav");
const bodyStyling = document.querySelector("body");
const content = document.querySelector("#content");

bodyStyling.style.display = "grid";
bodyStyling.style.minHeight = "auto";
bodyStyling.style.gridTemplateRows = "auto 1fr";
bodyStyling.style.gridTemplateColumns = "1fr";

mainHeader.style.backgroundImage = `url(${headerImage})`;
mainHeader.style.backgroundSize = "cover";
mainHeader.style.backgroundPosition = "center";
mainHeader.style.padding = "80px 20px";

document.body.style.boxSizing = "border-box";
document.body.style.padding = "0";
document.body.style.margin = "0";
headingOne.style.color = "white";
paragraphOne.style.color = "white";
headerStyle.style.display = "flex";
headerStyle.style.flexDirection = "column";
headerStyle.style.alignItems = "center";
headingOne.style.fontSize = "4rem";
headerStyle.style.padding = "1rem";
paragraphOne.style.fontSize = "2rem";
headingParagraph.style.display = "flex";
headingParagraph.style.flexDirection = "column";
headingParagraph.style.justifyContent = "center";
headingParagraph.style.alignItems = "center";

buttonS.forEach((button) => {
  button.style.minWidth = "6rem";
  button.style.width = "6rem";
  button.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
  button.style.color = "#2c3e50";
  button.style.border = "1px solid #ccc";
  button.style.borderRadius = "4px";
  button.style.padding = "6px 0";
  button.style.cursor = "pointer";
  button.style.gap = "2rem"
});

buttonS.forEach((button) => {
  button.style.transition = "transform 0.2s ease";

  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-6px)";
  });
  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
  });
});

content.style.height = "100%";

content.innerHTML = "";
content.appendChild(homeLayoutFunction());

buttonS.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerText === "Home") {
      content.innerHTML = "";
      content.appendChild(homeLayoutFunction());
    }
    else if(button.innerText === "Menu"){
       content.innerHTML = "";
       content.appendChild(menuLayoutFunction());
    }
  });
});
