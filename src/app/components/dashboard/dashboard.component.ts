import { Component, OnInit,AfterViewInit } from '@angular/core';
declare var $:any;
declare var Chart: any;
import { GraficosService } from'../../services/graficos/graficos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [GraficosService]

})
export class DashboardComponent implements OnInit {
  chart = [];

  constructor(
    private _graficosService: GraficosService
  ) { }


  ngOnInit() {
    //   this.chart = new Chart('barChart',{
    //   type: 'bar',
    //   data: {
    //     labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    //     datasets: [
    //       {
    //         label: "Population (millions)",
    //         backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
    //         data: [2478,5267,734,784,433]
    //       }
    //     ]
    //   },
    //   options: {
    //     legend: { display: false },
    //     title: {
    //       display: true,
    //       text: 'Predicted world population (millions) in 2050'
    //     }
    //   }
    // });
    new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});

new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});


  }

  ngAfterViewInit() {
    $('#datepicker').datepicker();
  }


}
