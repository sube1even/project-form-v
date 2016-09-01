import { Component, Input, OnInit } from '@angular/core';

import { BrewerStatus, BrewerStatusService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-brew',
  templateUrl: 'brew.component.html',
  styleUrls: ['../+brewer/brewer.component.css'],
  providers: [BrewerStatusService]
})
export class BrewComponent implements OnInit {
  brewerStatus: BrewerStatus;
  @Input() id: number;
  errorMessage: string;

    constructor(private brewerStatusService: BrewerStatusService) {
  
    }

    ngOnInit() {
      this.getBrewerStatus(this.id);
      console.log(this.brewerStatus);

    }

    private getBrewerStatus(id:number) {
          //this.brewerStatus = null;
          this.brewerStatusService.getBrewerStatus(this.id)
              .subscribe((brewerStatus) => {
                  if (brewerStatus) {
                      this.brewerStatus = brewerStatus;
                      console.log(this.brewerStatus);
                  }
              },
              error => {
                 this.errorMessage = <any>error
              });
      }

}
