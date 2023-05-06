import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.css']
})
export class SellerProfileComponent {
  public vendedor:User;
  constructor(public route:ActivatedRoute,private userService: UserService,private router: Router,private location: Location) { }

  ngOnInit() {


    const storedUser = localStorage.getItem('usuario');
    if (storedUser) {
      this.vendedor = JSON.parse(storedUser);
    }
    console.log(this.vendedor);


}
logout(): void {
  localStorage.removeItem('usuario');
  this.router.navigate(['/home']).finally(()=>window.location.reload());
}
}
