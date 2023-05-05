import { Component } from '@angular/core';



@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['./buyer-profile.component.css']
})
export class BuyerProfileComponent {
  comprador ={

    id: 1,
    type: "cliente",
    name: "Juan",
    last_name: "Gomez",
    email: "juangomez@gmail.com",
    phone: "956789018",
    username: "jgomez1234",
    password: "juan@%4321",
  
  }

}


