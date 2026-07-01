export let aboutLayoutFunction = () => {
  //HTML
  const aboutBox = document.createElement("div");

  const aboutHead = document.createElement("div");
  aboutBox.appendChild(aboutHead);

  const aboutBody = document.createElement("div");
  aboutBox.appendChild(aboutBody);

  const aboutFoot = document.createElement("div");
  aboutBox.appendChild(aboutFoot);
  aboutFoot.innerHTML = "&copy; 2026 The Odin Project (TOP) - Zeeshan Haider";

  const headContent = document.createElement("p");
  aboutHead.appendChild(headContent);
  aboutHead.innerHTML = "About Us";

  const aboutBodyInfo = document.createElement("div");
  aboutBody.appendChild(aboutBodyInfo);

  const aboutBodyContact = document.createElement("div");
  aboutBody.appendChild(aboutBodyContact);

  const infoTxtOne = document.createElement("p");
  aboutBodyInfo.appendChild(infoTxtOne);
  infoTxtOne.innerHTML = "We provide you one of the best food.";

  const infoTxtTwo = document.createElement("p");
  aboutBodyInfo.appendChild(infoTxtTwo);
  infoTxtTwo.innerHTML =
    "We Always Ensure that you receive your order on time.";

  const contact = document.createElement("div");
  aboutBodyContact.appendChild(contact);

  const whatContact = document.createElement("div");
  contact.appendChild(whatContact);
  whatContact.innerHTML = "To-Contact";

  const number = document.createElement("div");
  contact.appendChild(number);
  number.innerHTML = "0123-4567890";
  
  const thanks = document.createElement("div");
  aboutBodyContact.appendChild(thanks);
  thanks.innerHTML = "Thank You!";

  //CSS
  aboutBox.style.display = "flex";
  aboutBox.style.flexDirection = "column";
  aboutBox.style.alignItems = "left";
  aboutBox.style.padding = "2rem";
   
  headContent.style.textAlign = "center";

  aboutHead.style.fontWeight = "800";
  aboutHead.style.fontSize = "1.4rem"
  aboutHead.style.textAlign = "center";

  aboutBody.style.display = "flex";
  aboutBody.style.flexDirection = "column";

  aboutBodyInfo.style.display = "flex";
  aboutBodyInfo.style.flexDirection = "column";
  aboutBodyInfo.style.alignItems = "left";
  aboutBodyInfo.style.gap = "0.2rem";
  aboutBodyInfo.style.marginBottom = "0.6rem";
 
  aboutBodyContact.style.display = "flex";
  aboutBodyContact.style.flexDirection = "column";
  aboutBodyContact.style.alignItems = "center";
  aboutBodyContact.style.textAlign = "center";

  infoTxtOne.style.textAlign = "center";
  infoTxtOne.style.fontSize = "1.4rem";
  infoTxtOne.style.fontWeight = "500";

  infoTxtTwo.style.textAlign = "center";
  infoTxtTwo.style.fontSize = "1.4rem";
  infoTxtTwo.style.fontWeight = "500";

  contact.style.margin = "1rem";
  contact.style.fontWeight = "400";

  whatContact.style.fontSize = "1.1rem";
  

  number.style.fontSize = "1.1rem";
  number.style.fontWeight = "400";

  thanks.style.fontSize = "1.2rem";
  thanks.style.margin = "1.5rem";

 aboutFoot.style.textAlign = "center";
 aboutFoot.style.fontSize = "1.2rem";

  return aboutBox;
};
