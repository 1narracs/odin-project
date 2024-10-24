const dropdownSelect = document.querySelector(".dropdown-selection");
const dropdownOptions = document.querySelector("#dropdown-one");

dropdownSelect.addEventListener("click", (e) => {
  dropdownOptions.classList.toggle("show");
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropdown-selection")) {
    var dropdowns = document.getElementsByClassName("dropdown-options");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
