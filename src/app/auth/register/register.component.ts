import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]

})
export class RegisterComponent implements OnInit {

  mensajeError: any = '';
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor( private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  async onRegister()
  {
    const {email, password} = this.registerForm.value;
    try
    {
     const user = await this.authSvc.register(email, password);
     if (user)
     {
     this.router.navigate(['/form']);
     }
     else
     {
    this.mensajeError = 'La dirección de correo electrónico no cumple con la nomenclatura , La contraseña debe tener al menos 6 caracteres';
     }
    }
    catch (error)
    {
      console.log(error);
    }
  }

}
