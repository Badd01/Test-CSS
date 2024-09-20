import loadHome from "./loadHome";
import loadMenu from "./loadMenu";
import loadContact from "./loadContact";
import "./style.css"; // Thêm dòng này
const btns = document.querySelectorAll("button");
const content = document.getElementById("content");

function switchTab(name) {
  content.innerHTML = "";
  switch (name) {
    case "Home":
      loadHome();
      break;
    case "Menu":
      loadMenu();
      break;
    case "Contact":
      loadContact();
      break;
    default:
      loadHome(); // Default to home page
  }
}

// Add event listeners to the nav buttons
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === "Home") {
      switchTab("Home");
    } else if (e.target.innerHTML === "Menu") {
      switchTab("Menu");
    } else {
      switchTab("Contact");
    }
  });
});
