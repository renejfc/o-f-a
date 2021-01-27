export const products: Array<{
  id: number;
  title: string;
  description: string;
  ingredients: Array<string>;
  price: number;
  stock: boolean;
}> = [
  {
    id: 1,
    title: "Asd",
    description: "Asd",
    ingredients: ["Coconut", "Lemon", "Rice"],
    price: 25,
    stock: true
  },
  {
    id: 2,
    title: "Asdp",
    description: "Aslld",
    ingredients: ["Coconuñllt", "Lemjkon", "Riioce"],
    price: 25,
    stock: false
  }
];

export default products;
