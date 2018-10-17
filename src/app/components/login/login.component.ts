import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from'../../services/autenticacion/autenticacion.service';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Autenticacion } from '../../models/autenticacion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AutenticacionService]
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    errorMessage: string = '';
    successMessage: string = '';
    public autenticacion: Autenticacion;


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _autenticacionService: AutenticacionService
  ) {
    this.createForm();
    this.autenticacion= new Autenticacion('','','','','',0);
   }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // doLogin(){
  //   this._autenticacionService.doLogin(value.email, value.password).subscribe(
  //     .then(res => {
  //       this.router.navigate(['/user']);
  //     },err => {
  //
  //         console.log(result);
  //     },
  //     error => {
  //       console.log(err);
  //       this.errorMessage = err.message;
  //     });
  // }

  doLogin(autenticacion){

    //console.log(this.autenticacion);

    this._autenticacionService.doLogin(this.autenticacion).subscribe(
      result => {

        if(result.code != 200){
          console.log(result.status);

        }else{
        
        }
        if(result.code="200"){
          this.successMessage = result.message;
          this.router.navigate(['/dashboard']);
        }else if( result.code="404"){
          this.errorMessage = result.message;
        }
      },
      error => {
        console.log(error);
        this.errorMessage = "Usuario o contraseña son incorrectos.";
      });
  }


}
