import { Order } from "./order";
import { Product } from "./product";

export class Order_Detail{
  id: number = 0;
  order: Order = new Order();
  product: Product = new Product();
  quantity:number=0;
  amount:number=0;
}



