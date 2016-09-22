import { Component, Input, OnInit } from '@angular/core';

import { Brew, BrewService } from '../shared';

import 'chartjs';
declare let Chart;
import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts';

@Component({
  moduleId: module.id,
  selector: 'app-brew-timeseries',
  templateUrl: 'brew-timeseries.component.html',
  styleUrls: ['../+brewer/brewer.component.css'],
  providers: [BrewService],
  directives: [CHART_DIRECTIVES]
})
export class BrewTimeseriesComponent implements OnInit {
  brewTimeseries: Brew[];
  @Input() currentBrewId: number;
  errorMessage: string;




  public lineChartData: Array<any>;
  public lineChartLabels: Array<any>;
  public lineChartOptions: any = {
    animation: {
      animateScale: true,
      animationEasing: 'easeInOutQuad'
    },
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: true,
        // ,type: 'time',
        //         time: {
        //             displayFormats: {
        //                 quarter: 'h:mm:ss a'
        //             }
        //         }

      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  public lineChartColours: Array<any> = [
    {
      // backgroundColor: 'rgba(0,0,0,0.05)',
      //backgroundColor: 'rgba(0,0,0,1)',
      backgroundColor : 'rgba(98, 39, 8, 0.25)',
      borderColor: 'rgb(243, 99, 34)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: 'rgb(243, 99, 34)',
      pointHoverBackgroundColor: 'rgba(77,83,96,1)',
      pointHoverBorderColor: 'rgb(243, 99, 34)',
      pointRadius: 1
    }
  ];

  public lineChartType: string = 'line';

  constructor(private brewService: BrewService) { }

  ngOnInit() {
    this.getBrewTimeseries(this.currentBrewId);

    // let c = document.getElementById("myCanvas");
    // let ctx = c.getContext("2d");
    // let grd = ctx.createLinearGradient(0, 0, 170, 0);
    // grd.addColorStop(0, "black");
    // grd.addColorStop(1, "white");
    // ctx.fillStyle = grd;
    // ctx.fillRect(20, 20, 150, 100);

  }

  private getBrewTimeseries(currentBrewId: number) {
    this.brewTimeseries = null;
    let tempdata = [];
    let temps = [];
    let times = [];
    this.brewService.getBrewTimeseries(this.currentBrewId)
      .subscribe((brewTimeseries) => {
        if (brewTimeseries) {
          this.brewTimeseries = brewTimeseries;

          this.brewTimeseries.map(function (temp) {
            temps.push(temp.tempBrew8L / 10);
            times.push(temp.timestamp);
          });

          //console.log(brewTimeseries);
          tempdata.push({ data: temps.reverse(), label: 'Temp' });
          console.log(tempdata);
          this.lineChartData = tempdata;
          this.lineChartLabels = times;
        }
      },
      error => {
        this.errorMessage = <any>error;
      });
  }

}
