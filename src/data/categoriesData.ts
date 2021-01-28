export const categories: Array<{
  id: number;
  iconFile: string;
  title: string;
  description: string;
  stock: boolean;
}> = [
  {
    id: 1,
    iconFile: "breakfast.png",
    title: "Breakfast",
    description: "Asd",
    stock: true
  },
  {
    id: 2,
    iconFile: "fast_food.png",
    title: "Fast Food",
    description: "Aslld",
    stock: false
  },
  {
    id: 3,
    iconFile: "dinner.png",
    title: "Dinner",
    description: "Asd",
    stock: true
  },
  {
    id: 4,
    iconFile: "desserts.png",
    title: "Desserts",
    description: "Asd",
    stock: true
  },
  {
    id: 5,
    iconFile: "drinks.png",
    title: "Drinks",
    description: "Asd",
    stock: true
  }
];

export default categories;
