import { Token } from '@angular/compiler';
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
  token: string;

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
      .subscribe((result: any) => { console.log(result);
        this.token = result.jwttoken;

        localStorage.setItem('token',JSON.stringify(this.token));
        if(result!=null){
          this.userService.getUser(this.user.username, this.user.password).subscribe(user1 =>{
            localStorage.setItem('usuario', JSON.stringify(user1));
            if(user1.type.toLowerCase() === "cliente"){
              this.router.navigate(['/home-buyer']).finally(()=>window.location.reload());

            }else{
              this.router.navigate(['/home-seller']).finally(()=>window.location.reload());
            }

          })
        }else{
          this.errorMessage = "Usuario o contraseña incorrecta.";
          this.form.reset();
        }
      }
      );
    }else{
      this.errorMessage="Complete correctamente los campos."
    }
    /* this.userService.getUserByUsernameAndRegister(this.user.username, this.user.password).subscribe(id4 => {this.idg = id4; console.log(id4)}); */

    // this.userService.listId(this.userService.idg).subscribe(user5 =>{this.user2=user5});

}
}

