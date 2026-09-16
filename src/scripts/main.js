import "../styles/main.scss";

import { loadActiveTheme } from "./themes";
import { renderHomeMain } from "./home";
import { renderHeaderMenu } from "./header";
import { renderContacts } from "./contacts";

loadActiveTheme();

const header = document.createElement("header");
header.className = "header";
const main = document.createElement("main");
main.className = "main";
const footer = document.createElement("footer");
footer.className = "footer";

header.append(renderHeaderMenu());
main.append(...renderHomeMain());
footer.append(renderContacts());

document.body.append(header, main, footer);
