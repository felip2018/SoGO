import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/shared/services/authentication.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fctrl: FormBuilder,
              private router: Router,
              public authentication: AuthenticationService) {
    this.loginForm = fctrl.group({
      username:['', Validators.required],
      password:['', Validators.required]
    });
  }

  onSubmit() {
    
    let username = this.loginForm.controls['username'].value;
    let password = this.loginForm.controls['password'].value;
    console.log(`username ${username}`)
    this.authentication.startSession(username, password).subscribe((res) => {
      console.log('res', res);
      // Guardar informacion en session storage y redireccionar a la aplicacion
    }, (err) => {
      console.log('err', err.error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.error?.message || 'Something was wrong!',
        footer: ''
      })
    });  
  }

}
