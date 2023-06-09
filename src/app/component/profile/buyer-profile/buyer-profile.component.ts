import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';






@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['./buyer-profile.component.css']
})
export class BuyerProfileComponent {
  public user:User;
  constructor(private userService: UserService,private router: Router,private location: Location) {
  };

  ngOnInit() {


      const storedUser = localStorage.getItem('usuario');
      if (storedUser) {
        this.user = JSON.parse(storedUser);
      }
      console.log(this.user);


  }
  logout(): void {
    localStorage.removeItem('usuario');
    localStorage.removeItem('productocarrito'); 
    localStorage.removeItem('productocarrito2'); 
    this.router.navigate(['/home']).finally(()=>window.location.reload());
  }
  
}


