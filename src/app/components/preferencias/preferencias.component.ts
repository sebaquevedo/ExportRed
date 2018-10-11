import { Component, OnInit,AfterViewInit} from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-preferencias',
  templateUrl: './preferencias.component.html',
  styleUrls: ['./preferencias.component.css']
})
export class PreferenciasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $('#datepicker').datepicker();
  }

}
