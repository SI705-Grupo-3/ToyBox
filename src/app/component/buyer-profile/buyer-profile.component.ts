import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';



@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['./buyer-profile.component.css']
})
export class BuyerProfileComponent {


  public user:User;
  

  
  


  constructor(private userService: UserService) {
    
  };
  
  ngOnInit() {
    

      const storedUser = localStorage.getItem('usuario');
      if (storedUser) {
        this.user = JSON.parse(storedUser);
      }
      console.log(this.user);


  }
    

  
}


