import { Order } from "./order";
import { PaymentMethod } from "./payment_method";

export class Payment{
  id: number = 0;
  total: number = 0;
  date: Date = new Date(Date.now());
  order: Order = new Order();
  payment_method: PaymentMethod= new PaymentMethod();
}
