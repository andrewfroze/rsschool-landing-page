import "../styles/main.scss";
import "../styles/catalog.scss";
import { loadActiveTheme } from "./themes";
import { renderHeaderMenu } from "./header";
import { renderContacts } from "./contacts";
import { renderCatalog } from "./catalog";

loadActiveTheme();

const header = document.createElement("header");
header.className = "header";

const main = document.createElement("main");
main.className = "main";

const footer = document.createElement("footer");
footer.className = "footer";

header.append(renderHeaderMenu("../", "#"));
main.append(renderCatalog());
footer.append(renderContacts());

document.body.append(header, main, footer);