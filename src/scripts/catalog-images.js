import coffee1 from "../images/coffee-1.jpg";
import coffee2 from "../images/coffee-2.jpg";
import coffee3 from "../images/coffee-3.jpg";
import coffee4 from "../images/coffee-4.jpg";
import coffee5 from "../images/coffee-5.jpg";
import coffee6 from "../images/coffee-6.jpg";
import coffee7 from "../images/coffee-7.jpg";
import coffee8 from "../images/coffee-8.jpg";
import tea1 from "../images/tea-1.jpg";
import tea2 from "../images/tea-2.jpg";
import tea3 from "../images/tea-3.jpg";
import tea4 from "../images/tea-4.jpg";
import dessert1 from "../images/dessert-1.jpg";
import dessert2 from "../images/dessert-2.jpg";
import dessert3 from "../images/dessert-3.jpg";
import dessert4 from "../images/dessert-4.jpg";
import dessert5 from "../images/dessert-5.jpg";
import dessert6 from "../images/dessert-6.jpg";
import dessert7 from "../images/dessert-7.jpg";
import dessert8 from "../images/dessert-8.jpg";

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