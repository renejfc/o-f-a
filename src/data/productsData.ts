export const products: Array<{
  id: number;
  picFile: string;
  title: string;
  description: string;
  ingredients: Array<string>;
  price: number;
  stock: boolean;
}> = [
  {
    id: 1,
    picFile: "sliced_sandwich.jpg",
    title: "Sliced Sandwich",
    description: "Asd",
    ingredients: ["eggs"],
    price: 2,
    stock: true
  },
  {
    id: 2,
    picFile: "mutton_curry.jpg",
    title: "Mutton Curry",
    description: "Aslld",
    ingredients: ["basmati rice"],
    price: 5,
    stock: false
  },
  {
    id: 3,
    picFile: "veggie_burger.png",
    title: "Veggie Burger",
    description: "Aslsald",
    ingredients: ["eggplant bacon"],
    price: 3,
    stock: true
  },
  {
    id: 4,
    picFile: "vanilla_ice_cream.jpg",
    title: "Vanilla Ice Cream",
    description: "Aslsald",
    ingredients: ["chocolate"],
    price: 4,
    stock: true
  }
];

export default products;
