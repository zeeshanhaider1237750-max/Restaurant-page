export let homeLayoutFunction = () => {
  //HTML DOM Manipulation
  const homeBox = document.createElement("div");
  homeBox.id = "homeContainer";

  const homeHeading = document.createElement("div");
  homeHeading.id = "hOne";
  homeBox.appendChild(homeHeading);

  const homeTxt = document.createElement("div");
  homeTxt.id = "paragraphs";
  homeBox.appendChild(homeTxt);

  const homeFooter = document.createElement("div");
  homeFooter.id = "foot";
  homeBox.appendChild(homeFooter);

  const headOne = document.createElement("h1");
  headOne.id = "header";
  homeHeading.appendChild(headOne);
  headOne.textContent = "HOME";

  const paraOne = document.createElement("p");
  paraOne.id = "pOne";
  homeTxt.appendChild(paraOne);
  paraOne.textContent = "This is a food service Restaurant";

  const paraTwo = document.createElement("p");
  paraTwo.id = "dummyTxt";
  homeTxt.appendChild(paraTwo);
  paraTwo.textContent =
    "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, atque. Suscipit neque fugit iusto nemo itaque, commodi, minus aliquid excepturi accusantium porro eligendi, natus nihil? Assumenda reprehenderit dolore nesciunt non!";

  const paraThree = document.createElement("p");
  paraThree.id = "aboutUs";
  homeTxt.appendChild(paraThree);
  paraThree.textContent =
    "This Site is Developed as a learner course Project: Restaurant Page from The Odin Project (TOP).";

  const footerContent = document.createElement("p");
  footerContent.id = "copy";
  homeFooter.appendChild(footerContent);
  footerContent.innerHTML =
    "&copy; 2026 The Odin Project (TOP) - Zeeshan Haider";

  //CSS styling
  homeBox.style.minWidth = "auto";
  homeBox.style.padding = "1rem";
  homeBox.style.display = "flex";
  homeBox.style.flexDirection = "column";
  homeBox.style.justifyContent = "center"
  homeBox.style.textAlign = "center";
  homeBox.style.height = "100%";
  homeBox.style.alignItems = "center";
  
  homeHeading.style.height = "20%";

  headOne.style.fontWeight = "700";
  headOne.style.padding = "1rem";

  homeTxt.style.display = "flex";
  homeTxt.style.flexDirection = "column";
  homeTxt.style.textAlign = "center";
  homeTxt.style.height = "60%";
  homeTxt.style.gap = "1.4rem";
  homeTxt.style.width = "40%";

  paraOne.style.fontSize = "1.1rem";

  paraTwo.style.fontSize = "1.1rem";

  paraThree.style.fontSize = "1.1rem";

  homeFooter.style.height = "10%";

  footerContent.style.fontSize = "1rem";

  return homeBox;
};
