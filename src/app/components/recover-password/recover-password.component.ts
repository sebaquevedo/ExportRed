import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecoverPassword } from '../../models/recoverPassword';
import { AutenticacionService } from'../../services/autenticacion/autenticacion.service';
import { Router, Params } from '@angular/router';


@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css'],
  providers: [AutenticacionService]
})
export class RecoverPasswordComponent implements OnInit {
      errorMessage: string = '';
      successMessage: string = '';
      recoverForm: FormGroup;
      public recoverPassword: RecoverPassword;


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _autenticacionService: AutenticacionService)
   {
    this.createForm();
    this.recoverPassword= new RecoverPassword('');
   }

  ngOnInit() {
  }

  createForm() {
    this.recoverForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  doRecover(recoverPassword){

    //console.log(this.autenticacion);

    this._autenticacionService.doRecoverPassword(this.recoverPassword).subscribe(
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
