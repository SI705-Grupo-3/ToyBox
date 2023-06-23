import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form: FormGroup = new FormGroup({});
  user: User = new User();
  errorMessage: string;
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      type: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
      ]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    this.errorMessage = '';
  }
  register(): void {
    this.user.type = this.form.value['type'];
    this.user.name = this.form.value['name'];
    this.user.last_name = this.form.value['last_name'];
    this.user.email = this.form.value['email'];
    this.user.phone = this.form.value['phone'];
    this.user.username = this.form.value['username'];
    this.user.image = "user1.png";
    //falta generar un token al registrar para evitar el error de registro en algunos casos
    if (this.form.valid) {
      const hashedPassword = bcrypt.hashSync(this.form.value['password'], 12);
      this.user.password = hashedPassword;
      this.userService.register(this.user).subscribe((data) => {
        this.router.navigate(['users']);
        this.userService
          .getUser(this.user.username)
          .subscribe((user1) =>{localStorage.setItem('usuario', JSON.stringify(user1));}
        );
        console.log(this.user);
        console.log(data);
        if(this.user.type.toLowerCase()=="cliente"){ //inicio comprador o vendedor
          this.router.navigate(['/home-buyer']).finally(()=>window.location.reload());
        }else{
          this.router.navigate(['/home-seller']).finally(()=>window.location.reload());
        }
      });

    } else {
      this.errorMessage = 'Complete correctamente los campos.';
    }
  }
}
