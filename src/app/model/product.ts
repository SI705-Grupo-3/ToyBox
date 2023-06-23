import { Category } from "./category";

export class Product{
  id: number = 0;
  name: string = "";
  description: string = "";
  price: number = 0;
  stock: number = 0;
  image: string = "";
  category: Category = new Category();
  quantity: number = 0;
}
