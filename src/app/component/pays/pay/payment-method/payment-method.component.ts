import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentMethod } from 'src/app/model/payment_method';
import { PaymentMethodService } from 'src/app/service/payment-method.service';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent {
  paymentMethod: PaymentMethod = new PaymentMethod();
  errorMessage: string;
  form: FormGroup = new FormGroup({});
  constructor(private paymentMethodService: PaymentMethodService){

  }
  ngOnInit(){
    this.form = new FormGroup({
      card_holder: new FormControl('', Validators.required),
      card_number: new FormControl('', Validators.required),
      security_code: new FormControl('', Validators.required),
      expiration_day: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    });
  }
  pagar(): void{
    this.paymentMethod.card_holder=this.form.value['card_holder'];
    this.paymentMethod.card_number=this.form.value['card_number'];
    this.paymentMethod.security_code=this.form.value['security_code'];
    this.paymentMethod.expiration_date=this.form.value['expiration_day'];
    this.paymentMethod.address=this.form.value['address'];

    if (this.form.valid) {
      console.log(this.paymentMethod);
      this.paymentMethodService.insert(this.paymentMethod).subscribe((data)=>{
        localStorage.setItem('payment_method', JSON.stringify(this.paymentMethod));
      });

    }else {
    this.errorMessage = 'Complete correctamente los campos.';
    }
  }
}
