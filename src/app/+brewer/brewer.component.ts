import { Component, OnInit } from '@angular/core';

import { Brewer, BrewerService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-brewer',
  templateUrl: 'brewer.component.html',
  styleUrls: ['brewer.component.css'],
  providers: [BrewerService]
})
export class BrewerComponent implements OnInit {
  brewer: Brewer[];
  brewerName: string;
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
                  }
              },
              error => {
                 this.errorMessage = <any>error
              });
      }

}
