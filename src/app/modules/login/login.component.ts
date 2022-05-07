import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fctrl: FormBuilder, private router: Router) {
    this.loginForm = fctrl.group({
      username:['', Validators.required],
      password:['', Validators.required]
    });
  }

  onSubmit() {
    let username = this.loginForm.controls['username'].value;
    let password = this.loginForm.controls['password'].value;
    console.log(`username ${username}`)
    /*this.auth.login(username, password).subscribe((res) => {
      if(res.response.length > 0) {
        console.log("Usuario encontrado!");
        sessionStorage.setItem('inSession', 'true');
        sessionStorage.setItem('userData', JSON.stringify(res.response[0]));
        const data = res.response[0];
        //this.router.navigate([`${data.PerfilPanel}`]);
        this.router.navigate(['/application']);
      } else {
        // No se han encontrado datos del usuario
        this.modalTitle = 'Error: Inicio de sesión';
        this.modalBody = 'El usuario no ha sido encontrado, por favor verifique!';
        this.showModal = true;
      }
    });*/

    // this.router.navigate(['/application']);
  }

}
