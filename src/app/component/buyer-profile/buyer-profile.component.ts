import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';



@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['./buyer-profile.component.css']
})
export class BuyerProfileComponent {

  public data:User;
  
  


  constructor(private userService: UserService) {
    
  };
  
  ngOnInit() {
    
      this.userService.getUser().subscribe((message:any) => {
      this.data = message;
      console.log(message); 
      console.log(this.data);
    }
    ); 

  }
  
}


