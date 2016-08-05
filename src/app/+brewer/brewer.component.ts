import { Component, OnInit } from '@angular/core';

import { Brewer, BrewerService } from '../shared';
import { BrewerStatusComponent } from './brewer-status.component';

@Component({
  moduleId: module.id,
  selector: 'app-brewer',
  templateUrl: 'brewer.component.html',
  styleUrls: ['brewer.component.css'],
  providers: [BrewerService],
  directives: [BrewerStatusComponent]
})
export class BrewerComponent implements OnInit {
  brewer: Brewer[];
  brewerName: string;
  id: number;
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
          this.id = this.brewer[0].id;
        }
      },
      error => {
        this.errorMessage = <any>error
      });
  }



}
