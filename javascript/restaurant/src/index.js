import "./styles.css";
import home from "./home";
import menu from "./menu";
import about from "./about";

const navigationController = (() => {
  home(); //deafult

  const content = document.querySelector("#content");
  const homeBtn = document.querySelector("#home");
  const menuBtn = document.querySelector("#menu");
  const aboutBtn = document.querySelector("#about");

  homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    home();
  });
  menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    menu();
  });
  aboutBtn.addEventListener("click", () => {
    content.innerHTML = "";
    about();
  });
})();
