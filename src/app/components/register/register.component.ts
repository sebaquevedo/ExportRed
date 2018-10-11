import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from'../../services/autenticacion/autenticacion.service';
import { Router, Params } from '@angular/router';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Autenticacion } from '../../models/autenticacion';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AutenticacionService]
})
export class RegisterComponent implements OnInit {
  //registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  public autenticacion: Autenticacion;

  constructor(
    public _autenticacionService: AutenticacionService,
    private router: Router,
  //  private fb: FormBuilder
  ) {
  //  this.createForm();
  }

  ngOnInit() {
  }

  // createForm() {
  //   this.registerForm = this.fb.group({
  //     email: ['', Validators.required ],
  //     password: ['',Validators.required]
  //   });
  // }

  doRegister(value){

    let register = new Autenticacion(value.email,value.password)
    this._autenticacionService.doRegister(register).subscribe(
      result => {
        console.log(result);

        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
        this.errorMessage = error.message;
      });
  }

}
