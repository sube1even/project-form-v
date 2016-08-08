import { Component, OnInit } from '@angular/core';

import { Brewer, BrewerService } from '../shared';
import { BrewComponent } from '../+brew/brew.component';
import { BrewTimeseriesComponent } from '../+brew/brew-timeseries.component';

@Component({
  moduleId: module.id,
  selector: 'app-brewer',
  templateUrl: 'brewer.component.html',
  styleUrls: ['brewer.component.css'],
  providers: [BrewerService],
  directives: [BrewComponent,BrewTimeseriesComponent]
})
export class BrewerComponent implements OnInit {
  brewer: Brewer[];
  brewerName: string;
  id: number;
  currentBrewId: number;
  errorMessage: string;

  constructor(private brewerService: BrewerService) { }

  ngOnInit() {
    this.getBrewer();
  }


  private getBrewer() {
    this.brewer = null;
    this.brewerService.getBrewer()
      .subscribe((brewer) => {
        if (brewer) {
          console.log(brewer);
          this.brewer = brewer;
          // this.id = this.brewer[0].id;
          this.id = this.brewer['id'];
          this.currentBrewId = this.brewer['currentBrewId'];
        }
      },
      error => {
        this.errorMessage = <any>error
      });
  }



}
