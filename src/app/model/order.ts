import { User } from "./user";

export class Order{
    id: number = 0;
    date: Date = new Date(Date.now());
    shipping_address: string = "";
    state: string = "";
    total_amount: number = 0;
    user: User = new User();
  }
