function loadMenu() {
  const content = document.getElementById("content");
  const headline = document.createElement("h1");
  headline.textContent = "Our Menu";
  content.appendChild(headline);

  const menuList = document.createElement("ul");
  const menuItem1 = document.createElement("li");
  menuItem1.textContent = "Pizza";
  const menuItem2 = document.createElement("li");
  menuItem2.textContent = "Pasta";

  menuList.appendChild(menuItem1);
  menuList.appendChild(menuItem2);
  content.appendChild(menuList);
}

export default loadMenu;
