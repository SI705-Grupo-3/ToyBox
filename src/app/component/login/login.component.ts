import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  user: User = new User();
  user2: User =new User();
  idg: number;

  errorMessage: string;
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });
    this.errorMessage="";
    
    
  }
  login(): void{
    this.user.username = this.form.value['username'];
    this.user.password = this.form.value['password'];

    if(this.form.valid){
      this.userService.login(this.user.username, this.user.password)
      .subscribe(result => {
        if(result===true){
          this.userService.getId(this.user.username, this.user.password).subscribe(id4 => this.userService.listId(id4).subscribe(user5 =>{this.userService.sendUser(user5);console.log(user5)}));
          //-------------

          

          //-------------
          this.userService.getType(this.user.username, this.user.password).subscribe(type => {
            const userType = type.toLowerCase();
            if(userType === "cliente"){
              this.router.navigate(['/buyer-profile']);
            }else{
              this.router.navigate(['/home-seller']); 
            }
          });
        }else{
          this.errorMessage = "Usuario o contraseña incorrecta.";
          this.form.reset();
        }
      });
    }else{
      this.errorMessage="Complete correctamente los campos."
    }
    /* this.userService.getUserByUsernameAndRegister(this.user.username, this.user.password).subscribe(id4 => {this.idg = id4; console.log(id4)}); */
    
    // this.userService.listId(this.userService.idg).subscribe(user5 =>{this.user2=user5});

}
}

