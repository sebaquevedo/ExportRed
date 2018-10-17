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

  constructor(
    private _registerService: RegisterService
  ) {
  this.autenticacion= new Autenticacion('','','','','',0);
  }

  ngOnInit() {
  }

  toggleEditable(event) {
      if ( event.target.checked ) {
          let ischecked = $(this).is(':checked');
          this.passwordByDefault = true;
       }
       else if (!ischecked){
        this.passwordByDefault = false;
      }
  }

  registerUser(autenticacion) {

      //console.log(this.autenticacion);
      if(this.passwordByDefault){
        alert("se creara contraseña por defecto!");
      }
      this._registerService.doRegister(this.autenticacion).subscribe(
        result => {

          if(result.code != 200){
            console.log(result.status);

          }else{
          //  console.log(respuesta);
          }
          if(result.code="200"){
            this.successMessage = result.message;
            //this.router.navigate(['/dashboard']);
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
