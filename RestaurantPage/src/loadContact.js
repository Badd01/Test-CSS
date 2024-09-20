function loadContact() {
  const content = document.getElementById("content");
  const headline = document.createElement("h1");
  headline.textContent = "Contact Us";
  content.appendChild(headline);

  const contactInfo = document.createElement("p");
  contactInfo.textContent = "Phone: 123-456-7890";
  content.appendChild(contactInfo);
}

export default loadContact;
