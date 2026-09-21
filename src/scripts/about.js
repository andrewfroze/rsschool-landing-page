import about1 from "../images/about-1.jpg";
import about2 from "../images/about-2.jpg";
import about3 from "../images/about-3.jpg";
import about4 from "../images/about-4.jpg";

function renderAboutSection() {
  const about = document.createElement("section");
  about.className = "about";
  about.id = "about";

  const aboutContainer = document.createElement("div");
  aboutContainer.className = "about__container";

  const aboutTitle = document.createElement("h2");
  aboutTitle.className = "about__title";
  aboutTitle.innerHTML =
    'Resource is <em>the perfect and cozy place</em> where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done.';

  const aboutImages = document.createElement("div");
  aboutImages.className = "about__images";

  const column1 = document.createElement("div");
  column1.className = "about__column";

  const column2 = document.createElement("div");
  column2.className = "about__column";

  function createAboutBox(image, className) {
    const box = document.createElement("div");
    box.className = `about__box ${className}`;

    const imageElement = document.createElement("img");
    imageElement.className = "about__image";
    imageElement.src = image;
    imageElement.alt = "";

    box.append(imageElement);

    return box;
  }

  column1.append(
    createAboutBox(about1, "about__box--large"),
    createAboutBox(about2, "about__box--small"),
  );

  column2.append(
    createAboutBox(about3, "about__box--small"),
    createAboutBox(about4, "about__box--large"),
  );

  aboutImages.append(column1, column2);
  aboutContainer.append(aboutTitle, aboutImages);
  about.append(aboutContainer);
  return about;
}

export { renderAboutSection }