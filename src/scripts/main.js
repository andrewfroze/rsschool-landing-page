import "../styles/main.scss";

import { loadActiveTheme } from "./themes";
import { renderHomeMain } from "./home";
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

const openCatalog = () => main.replaceChildren(renderCatalog());
const openHome = () => 
  main.replaceChildren(...renderHomeMain(
      {
        onClickMenu: openCatalog,
      }
    ));

header.append(renderHeaderMenu({
  onClickMenu: openCatalog,
  onClickLogo: openHome,
}));

openHome();
footer.append(renderContacts());

document.body.append(header, main, footer);
