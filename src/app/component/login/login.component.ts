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
  user2: any;
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

    this.userService.getUserByUsernameAndRegister(this.form.value['username'], this.form.value['password'])
      .subscribe(user => this.user2 = user);
      console.log(this.user2);
      this.userService.getUserByUsernameAndRegister("jperez2","j.perez23*").subscribe(value => console.log(value));
  }
  login(): void{
    this.user.username = this.form.value['username'];
    this.user.password = this.form.value['password'];
    if(this.form.valid){
      this.userService.login(this.user.username, this.user.password)
      .subscribe(result => {
        if(result===true){
          
          this.userService.getType(this.user.username, this.user.password).subscribe(type => {
            const userType = type.toLowerCase();
            if(userType === "cliente"){
              this.router.navigate(['/home-buyer']);
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
    
    


  }
}
