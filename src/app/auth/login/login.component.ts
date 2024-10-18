import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class LoginComponent implements OnInit {

//s

  usuario: any[] = []
  formLogin!: FormGroup;

  constructor(
    private _loginService : LoginService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.formLogin = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  login(){
    if(this.formLogin.valid){
      console.log("Acceso", this.formLogin.value)
      this._loginService.ingresar(this.formLogin.value)
      .subscribe({
        next: (res) => {
          console.log("Response: ", res)
          this.route.navigate(['/'])
        },
        error: (err: HttpErrorResponse) => {
          this.alertaError()
        }
      });
    }
  }

  alertaError(){
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Correo o contraseña incorrecta ",
      showConfirmButton: false,
      timer: 1500
    });
    this.formLogin.reset();
  }


}
