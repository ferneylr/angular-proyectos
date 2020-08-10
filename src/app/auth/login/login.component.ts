import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  mensajeError: any = '';
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  async onLogin()
  {
    const  { email, password } = this.loginForm.value;
    try
    {
     const user = await this.authSvc.login(email, password);
     if (user)
     {
     this.router.navigate(['/form']);
     }
     else
     {
       this.mensajeError = 'No ha ingresado, registrese , si ya se registro verifique usuario o contraseña';
     }
    }
    catch (error)
    {
          this.mensajeError = error.message;
     //  console.log(error.message);
    }

  }

}
