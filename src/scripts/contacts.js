import "../styles/contacts.scss";

import pinIcon from "../images/pin-alt.svg?raw";
import phoneIcon from "../images/phone.svg?raw";
import clockIcon from "../images/clock.svg?raw";
import twitterIcon from "../images/twitter.svg?raw";
import instagramIcon from "../images/instagram.svg?raw";
import facebookIcon from "../images/facebook.svg?raw";

function renderContacts() {
  const contacts = document.createElement("section");
  contacts.className = "contacts";
  contacts.id = "contacts";

  const contactsContainer = document.createElement("div");
  contactsContainer.className = "contacts__container";

  const contactsOffer = document.createElement("div");
  contactsOffer.className = "contacts__offer";

  const contactsTitle = document.createElement("h2");
  contactsTitle.className = "contacts__title";
  contactsTitle.innerHTML = "Sip, Savor, Smile. <em>It’s coffee time!</em>";

  const socials = document.createElement("div");
  socials.className = "contacts__socials";

  function createSocialButton(icon, label, link) {
    const social = document.createElement("a");
    social.className = "contacts__social";
    social.href = link;
    social.target = "_blank";
    social.rel = "noopener noreferrer";
    social.setAttribute("aria-label", label);
    social.innerHTML = icon;

    return social;
  }

  socials.append(
    createSocialButton(twitterIcon, "Twitter", "https://twitter.com/"),
    createSocialButton(instagramIcon, "Instagram", "https://instagram.com/"),
    createSocialButton(facebookIcon, "Facebook", "https://facebook.com/"),
  );

  contactsOffer.append(contactsTitle, socials);

  const contactsInfo = document.createElement("div");
  contactsInfo.className = "contacts__info";

  const contactsInfoTitle = document.createElement("h3");
  contactsInfoTitle.className = "contacts__info-title";
  contactsInfoTitle.textContent = "Contact us";

  const contactsList = document.createElement("div");
  contactsList.className = "contacts__list";

  function createContactLink(icon, text, href = "#") {
    const link = document.createElement("a");
    link.className = "contacts__link";
    link.href = href;

    const iconContainer = document.createElement("span");
    iconContainer.className = "contacts__link-icon";
    iconContainer.innerHTML = icon;

    const textElement = document.createElement("span");
    textElement.textContent = text;

    link.append(iconContainer, textElement);

    return link;
  }

  contactsList.append(
    createContactLink(
      pinIcon,
      "8558 Green Rd., LA",
      "#",
    ),
    createContactLink(
      phoneIcon,
      "+1 (603) 555-0123",
      "tel:+16035550123",
    ),
    createContactLink(
      clockIcon,
      "Mon–Sat: 9:00–23:00",
      "#",
    ),
  );

  contactsInfo.append(contactsInfoTitle, contactsList);

  contactsContainer.append(contactsOffer, contactsInfo);
  contacts.append(contactsContainer);
  return contacts;
}

export { renderContacts }