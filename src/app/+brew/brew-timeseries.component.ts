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
  public lineChartLabels: Array<any>
  public lineChartOptions: any = {
    animation: {
      animateScale: true
    },
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false
        //,type: 'time',
        //         time: {
        //             displayFormats: {
        //                 quarter: 'h:mm:ss a'
        //             }
        //         }
      }]
    }
  };
  public lineChartColours: Array<any> = [
    {
      backgroundColor: 'rgba(0,0,0,0.05)',
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

          // console.log(temps);
          tempdata.push({ data: temps, label: 'Temp' });
          console.log(tempdata);
          this.lineChartData = tempdata;
          this.lineChartLabels = times;
        }
      },
      error => {
        this.errorMessage = <any>error
      });
  }

}
