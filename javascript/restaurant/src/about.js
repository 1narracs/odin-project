import aboutImg from "./imgs/about-us.jpg";

export default function about() {
  const content = document.querySelector("#content");

  const image = document.createElement("img");
  image.src = aboutImg;

  const textContainer = document.createElement("div");
  textContainer.className = "text-container";

  const textHeader = document.createElement("h1");
  textHeader.textContent = "About Us";

  const textCopy = document.createElement("p");
  textCopy.textContent =
    "We are a group of people who work in a restaurant for a wage.";

  content.append(image);
  content.append(textContainer);
  textContainer.append(textHeader);
  textContainer.append(textCopy);
}
