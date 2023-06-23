export class PaymentMethod{
  id: number = 0;
  card_holder: string = "";
  card_number: number = 0;
  security_code: number = 0;
  expiration_date: Date = new Date(Date.now());
  address: string = "";
}
