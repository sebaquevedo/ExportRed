import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';

import { Autenticacion } from '../../models/autenticacion';
import { GLOBAL } from '../global';

@Injectable()
export class RegisterService{
  public url:string;
  public autenticacion: Autenticacion;

  constructor(public _http: HttpClient)
  {
      this.url = GLOBAL.urlLogin;
  }

  doRegister(autenticacion: Autenticacion): Observable<any>{
    let json = JSON.stringify(autenticacion);
    console.log(json);
     let params = "json="+json;
     let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
     return this._http.post(this.url+'register', params, {headers: headers});

  }




}
