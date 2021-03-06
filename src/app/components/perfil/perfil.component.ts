import { Component, OnInit } from '@angular/core';
import { Autenticacion } from '../../models/autenticacion';
import { RegisterService } from'../../services/register/register.service';
//jquery
declare var $:any;

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [RegisterService]
})
export class PerfilComponent implements OnInit {

    public autenticacion: Autenticacion;
    errorMessage: string = '';
    successMessage: string = '';
    public passwordByDefault: boolean = false;
    public ischecked: any;
    public showPassword: boolean = false;
    public confirmPassword: string = '';

  constructor(
    private _registerService: RegisterService
  ) {
  this.autenticacion= new Autenticacion('','','','','',0);
  }

  ngOnInit() {
    $('body').layout('fix'); 
  }

  toggleEditable(event) {
      if ( event.target.checked ) {
          this.ischecked = $(this).is(':checked');
          this.passwordByDefault = true;
       }
       else if (!this.ischecked){
        this.passwordByDefault = false;
      }
  }
  toggleShowPassword(){
    if(this.showPassword){
      this.showPassword = false;
    }else if(!this.showPassword){
      this.showPassword = true;
    }
  }

  registerUser(autenticacion) {

      this._registerService.doRegister(this.autenticacion).subscribe(
        result => {

          if(result.code != 200){
            console.log(result.status);

          }else{
          //  console.log(respuesta);
          }
          if(result.code="200"){
            this.successMessage = result.message;
            //setear localStorage o cookie
            //alert success autoremovible
            setTimeout(function() {
                $(".alert-success").fadeOut(500);
            }, 2000);

            //borrado del modelo de autenticacion
            this.autenticacion= new Autenticacion('','','','','',0);
            //this.router.navigate(['/dashboard']);
          }else if( result.code="404"){
          setTimeout(function() {
              $(".alert-error").fadeOut(500);
          }, 2000);
            this.errorMessage = result.message;
          }
        },
        error => {
          console.log(error);
          setTimeout(function() {
              $(".alert-error").fadeOut(2000);
          }, 4000);
          this.errorMessage = error.error.message;
        });

  }

}
