import coffee1 from "../images/coffee-1.webp";
import coffee2 from "../images/coffee-2.webp";
import coffee3 from "../images/coffee-3.webp";
import coffee4 from "../images/coffee-4.webp";
import coffee5 from "../images/coffee-5.webp";
import coffee6 from "../images/coffee-6.webp";
import coffee7 from "../images/coffee-7.webp";
import coffee8 from "../images/coffee-8.webp";
import tea1 from "../images/tea-1.webp";
import tea2 from "../images/tea-2.webp";
import tea3 from "../images/tea-3.webp";
import tea4 from "../images/tea-4.webp";
import dessert1 from "../images/dessert-1.webp";
import dessert2 from "../images/dessert-2.webp";
import dessert3 from "../images/dessert-3.webp";
import dessert4 from "../images/dessert-4.webp";
import dessert5 from "../images/dessert-5.webp";
import dessert6 from "../images/dessert-6.webp";
import dessert7 from "../images/dessert-7.webp";
import dessert8 from "../images/dessert-8.webp";

const menuImagesMap =
  {
    "Irish coffee": coffee1,
    "Kahlua coffee": coffee2,
    "Honey raf": coffee3,
    "Ice cappuccino": coffee4,
    "Espresso": coffee5,
    "Latte": coffee6,
    "Latte macchiato": coffee7,
    "Coffee with cognac": coffee8,
    "Moroccan": tea1,
    "Ginger": tea2,
    "Cranberry": tea3,
    "Sea buckthorn": tea4,
    "Marble cheesecake": dessert1,
    "Red velvet": dessert2,
    "Cheesecakes": dessert3,
    "Creme brulee": dessert4,
    "Pancakes": dessert5,
    "Honey cake": dessert6,
    "Chocolate cake": dessert7,
    "Black forest": dessert8,
  };

function getImage(name) {
  return menuImagesMap[name];
}

export { getImage }