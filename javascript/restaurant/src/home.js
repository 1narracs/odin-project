import homeImg from "./imgs/restaurant.jpg";

export default function home() {
  const content = document.querySelector("#content");

  const image = document.createElement("img");
  image.src = homeImg;

  const textContainer = document.createElement("div");
  textContainer.className = "text-container";

  const textHeader = document.createElement("h1");
  textHeader.textContent = "The Restaurant";

  const textCopy = document.createElement("p");
  textCopy.textContent =
    "This is The Restaurant. A place for sensory delight and absolute pleasure on your taste buds. Please join us for the experience of a lifetime here at The Restaurant!";

  content.append(image);
  content.append(textContainer);
  textContainer.append(textHeader);
  textContainer.append(textCopy);
}
