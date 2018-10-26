import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
//import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';

@Injectable()
export class GraficosService{
  public url:string;

  constructor(public _http: HttpClient)
  {
      this.url = GLOBAL.urlLogin;
  }

  dailyForecast(){
      return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22");
  }




}
