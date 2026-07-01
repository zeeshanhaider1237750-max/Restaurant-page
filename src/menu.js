import friesImg from "./images/Fries-img.jpg";
import RiceAndkababImg from "./images/Ricekabab-img.jpg";
import chickenFry from "./images/Chicken-fry-img.jpg";
import shawarmaImg from "./images/shwarma-img.jpg";
import burgerImg from "./images/Burger-img.jpg";

export let menuLayoutFunction = () => {
  //HTML
  const menuBox = document.createElement("div");

  const menuHead = document.createElement("div");
  menuHead.id = "Head";
  menuBox.appendChild(menuHead);

  const menuBody = document.createElement("div");
  menuBody.id = "bodyS";
  menuBox.appendChild(menuBody);

  const menuFooter = document.createElement("div");
  menuFooter.id = "foot";
  menuBox.appendChild(menuFooter);
  menuFooter.innerHTML = "&copy; 2026 The Odin Project (TOP) - Zeeshan Haider";

  const menuHeadContent = document.createElement("h2");
  menuHead.appendChild(menuHeadContent);
  menuHeadContent.innerHTML = "MENU";

  const menuCheckList = document.createElement("p");
  menuCheckList.id = "ourMenu";
  menuCheckList.innerHTML = "Our Menu";
  menuBody.appendChild(menuCheckList);

  const menuList = document.createElement("div");
  menuBody.appendChild(menuList);

  const extraCharges = document.createElement("div");
  menuBody.appendChild(extraCharges);
  extraCharges.innerHTML = "We Charge an Extra $0.05 as for Tax.";

  const fries = document.createElement("div");
  menuList.appendChild(fries);

  const riceAndKabab = document.createElement("div");
  menuList.appendChild(riceAndKabab);

  const chickenFries = document.createElement("div");
  menuList.appendChild(chickenFries);

  const shwarma = document.createElement("div");
  menuList.appendChild(shwarma);

  const burger = document.createElement("div");
  menuList.appendChild(burger);

  const fryImg = document.createElement("img");
  fries.appendChild(fryImg);
  fryImg.src = friesImg;

  const riceImg = document.createElement("img");
  riceAndKabab.appendChild(riceImg);
  riceImg.src = RiceAndkababImg;

  const chickenImg = document.createElement("img");
  chickenFries.appendChild(chickenImg);
  chickenImg.src = chickenFry;

  const shwarmaImg = document.createElement("img");
  shwarma.appendChild(shwarmaImg);
  shwarmaImg.src = shawarmaImg;

  const burgerPic = document.createElement("img");
  burger.appendChild(burgerPic);
  burgerPic.src = burgerImg;

  const friesTxt = document.createElement("div");
  fries.appendChild(friesTxt);
  friesTxt.innerHTML = " French-Fries, $2.14/Plate";

  const riceTxt = document.createElement("div");
  riceAndKabab.appendChild(riceTxt);
  riceTxt.innerHTML = "Rice with Kabab's, $6.49/Plate";

  const chickenTxt = document.createElement("div");
  chickenFries.appendChild(chickenTxt);
  chickenTxt.innerHTML = "Chicken Fried, $16.81/Piece";

  const shwarmaTxt = document.createElement("div");
  shwarma.appendChild(shwarmaTxt);
  shwarmaTxt.innerHTML = "Shwarma, $4.27/Plate";

  const burgerTxt = document.createElement("div");
  burger.appendChild(burgerTxt);
  burgerTxt.innerHTML = "Burger, $4.27/Plate";

  //CSS

  menuBox.style.display = "flex";
  menuBox.style.flexDirection = "column";
  menuBox.style.justifyContent = "center";
  menuBox.style.alignItems = "center";
  menuBox.style.minWidth = "80%";
  menuBox.style.height = "100%";

  menuHeadContent.style.fontWeight = "1000";
  menuHeadContent.style.fontSize = "1.8rem";

  menuBody.style.display = "flex";
  menuBody.style.flexDirection = "column";
  menuBody.style.alignItems = "left";
  menuBody.style.margin = "0.1rem 2rem";

  menuCheckList.style.fontSize = "1.4rem";
  menuCheckList.style.fontWeight = "800";

  menuList.style.display = "flex";
  menuList.style.flexDirection = "row";
  menuList.style.gap = "1.3rem";
  menuList.style.flexWrap = "wrap";

  const food = [fries, riceAndKabab, chickenFries, shwarma, burger];
  food.forEach((element) => {
    element.style.display = "flex";
    element.style.flexDirection = "column";
    element.style.border = "1px solid black";
    element.style.width = "200px";
    element.style.height = "auto"
    element.style.cursor = "pointer";
  });

  const images = [fryImg, riceImg, chickenImg, shwarmaImg, burgerPic];
  images.forEach((img) => {
    img.style.width = "100%";
    img.style.height = "150px";
    img.style.objectFit = "cover";
  });

  const text = [friesTxt, riceTxt, chickenTxt, shwarmaTxt, burgerTxt]; 
  text.forEach((word) => {
    word.style.fontSize = "1.05rem";
    word.style.textAlign = "center";
    word.style.padding = "1rem";
  })
   
  extraCharges.style.fontSize = "1.3rem";

  menuFooter.style.fontSize = "1.35rem";
  menuFooter.style.padding = "1.5rem";

  return menuBox;
};
