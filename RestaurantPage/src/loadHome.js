import restaurantImage from "./images.jpg";
function loadHome() {
  const content = document.getElementById("content");
  // Create and append a headline
  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Restaurant";
  content.appendChild(headline);

  // Create and append an image
  const image = new Image();
  image.src = restaurantImage; // Placeholder image
  image.alt = "Restaurant Image";
  content.appendChild(image);

  // Create and append some text
  const description = document.createElement("p");
  description.textContent = "Good Restaurant";
  content.appendChild(description);
}

export default loadHome;
