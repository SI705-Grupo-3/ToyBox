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
  constructor(paymentMethodService: PaymentMethodService){

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
}
