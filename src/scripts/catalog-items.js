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

const menu= {
  coffee: [
    {
      name: "Irish coffee",
      image: coffee1,
      description: "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
      price: 7,
    },
    {
      name: "Kahlua coffee",
      image: coffee2,
      description: "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
      price: 7,
    },
    {
      name: "Honey raf",
      image: coffee3,
      description: "Espresso with frothed milk, cream and aromatic honey",
      price: 5.5,
    },
    {
      name: "Ice cappuccino",
      image: coffee4,
      description: "Cappuccino with soft thick foam in summer version with ice",
      price: 5,
    },
    {
      name: "Espresso",
      image: coffee5,
      description: "Classic black coffee",
      price: 4.5,
    },
    {
      name: "Latte",
      image: coffee6,
      description: "Espresso coffee with the addition of steamed milk and dense milk foam",
      price: 5.5,
    },
    {
      name: "Latte macchiato",
      image: coffee7,
      description: "Espresso with frothed milk and chocolate",
      price: 5.5,
    },
    {
      name: "Coffee with cognac",
      image: coffee8,
      description: "Fragrant black coffee with cognac and whipped cream",
      price: 6.5,
    },
  ],
  tea: [
    {
      name: "Moroccan",
      image: tea1,
      description: "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
      price: 4.5,
    },
    {
      name: "Ginger",
      image: tea2,
      description: "Original black tea with fresh ginger, lemon and honey",
      price: 5,
    },
    {
      name: "Cranberry",
      image: tea3,
      description: "Invigorating black tea with cranberry and honey",
      price: 5,
    },
    {
      name: "Sea buckthorn",
      image: tea4,
      description: "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
      price: 5.5,
    },
  ],
  dessert: [
    {
      name: "Marble cheesecake",
      image: dessert1,
      description: "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
      price: 3.5,
    },
    {
      name: "Red velvet",
      image: dessert2,
      description: "Layer cake with cream cheese frosting",
      price: 4,
    },
    {
      name: "Cheesecakes",
      image: dessert3,
      description: "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
      price: 5.5,
    },
    {
      name: "Creme brulee",
      image: dessert4,
      description: "Delicate creamy dessert in a caramel basket with wild berries",
      price: 4,
    },
    {
      name: "Pancakes",
      image: dessert5,
      description: "Tender pancakes with strawberry jam and fresh strawberries",
      price: 4.5,
    },
    {
      name: "Honey cake",
      image: dessert6,
      description: "Classic honey cake with delicate custard",
      price: 4.5,
    },
    {
      name: "Chocolate cake",
      image: dessert7,
      description: "Cake with hot chocolate filling and nuts with dried apricots",
      price: 5.5,
    },
    {
      name: "Black forest",
      image: dessert8,
      description: "A combination of thin sponge cake with cherry jam and light chocolate mousse",
      price: 6.5,
    },
  ],
}

export { menu }