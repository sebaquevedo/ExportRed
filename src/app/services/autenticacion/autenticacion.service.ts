import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
//import { Observable } from 'rxjs/Observable';
import { Autenticacion } from '../../models/autenticacion';
import { RecoverPassword } from '../../models/recoverPassword';
import { GLOBAL } from '../global';

@Injectable()
export class AutenticacionService{
  public url:string;
  public autenticacion: Autenticacion;

  constructor(public _http: HttpClient)
  {
      this.url = GLOBAL.urlLogin;
  }

  // doLogin(email, password){
  //   return this._http.post(this.url+'login').map(res => res.json());
  // }

  doLogin(autenticacion: Autenticacion): Observable<any>{
     let json = JSON.stringify(autenticacion);

      let params = "json="+json;
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      return this._http.post(this.url+'login', params, {headers: headers});
 }

  doRegister(autenticacion: Autenticacion): Observable<any>{
    let json = JSON.stringify(autenticacion);

     let params = "json="+json;
     let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
     return this._http.post(this.url+'register', params, {headers: headers});

  }

  doRecoverPassword(recoverPassword: RecoverPassword): Observable<any>{
    let json = JSON.stringify(recoverPassword);
  
     let params = "json="+json;
     let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
     return this._http.post(this.url+'recuperarContrasena', params, {headers: headers});
  }




}
