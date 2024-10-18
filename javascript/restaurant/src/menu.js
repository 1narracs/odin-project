import menuImg from "./imgs/menu.jpg";

export default function menu() {
  const content = document.querySelector("#content");

  const image = document.createElement("img");
  image.src = menuImg;

  const textContainer = document.createElement("div");
  textContainer.className = "text-container";

  const textHeader = document.createElement("h1");
  textHeader.textContent = "Menu";

  const menuContainer = document.createElement("div");
  menuContainer.className = "menu-container";

  const menuItemOne = document.createElement("div");
  const menuItemOneName = document.createElement("h3");
  menuItemOneName.textContent = "Goo";
  const menuItemOneDesc = document.createElement("p");
  menuItemOneDesc.textContent =
    "A strange gelatanous substance found on the planet Xiasr - $58.99";

  const menuItemTwo = document.createElement("div");
  const menuItemTwoName = document.createElement("h3");
  menuItemTwoName.textContent = "Smear";
  const menuItemTwoDesc = document.createElement("p");
  menuItemTwoDesc.textContent =
    "A deli sandwich with a smear of something the bun - $7.59";

  const menuItemThree = document.createElement("div");
  const menuItemThreeName = document.createElement("h3");
  menuItemThreeName.textContent = "The Substance";
  const menuItemThreeDesc = document.createElement("p");
  menuItemThreeDesc.textContent = "A dose of The Substance - $600.00";

  
  content.append(image);
  content.append(textContainer);
  textContainer.append(textHeader);
  textContainer.append(menuContainer);
  menuContainer.append(menuItemOne);
  menuItemOne.append(menuItemOneName);
  menuItemOne.append(menuItemOneDesc);
  menuContainer.append(menuItemTwo);
  menuItemTwo.append(menuItemTwoName);
  menuItemTwo.append(menuItemTwoDesc);
  menuContainer.append(menuItemThree);
  menuItemThree.append(menuItemThreeName);
  menuItemThree.append(menuItemThreeDesc);
}
