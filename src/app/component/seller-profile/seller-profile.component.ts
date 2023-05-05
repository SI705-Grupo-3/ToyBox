import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.css']
})
export class SellerProfileComponent {
  constructor(public route:ActivatedRoute) { }
  vendedor={

    id: 2,
    type: "vendedor",
    name: "Joaquín",
    last_name: "Pérez",
    email: "j.perez23456789@gmail.com",
    phone: "956789012",
    username: "jperez2",
    password: "j.perez23*",

  }

}
