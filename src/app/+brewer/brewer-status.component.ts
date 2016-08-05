import { Component, Input, OnInit } from '@angular/core';

import { BrewerStatus, BrewerStatusService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-brewer-status',
  templateUrl: 'brewer-status.component.html',
  styleUrls: ['brewer.component.css'],
  providers: [BrewerStatusService]
})
export class BrewerStatusComponent implements OnInit {
  brewerStatus: BrewerStatus[];
  @Input() id: number;
  errorMessage: string;

    constructor(private brewerStatusService: BrewerStatusService) { }

    ngOnInit() {
      this.getBrewerStatus(this.id);
    }

    private getBrewerStatus(id:number) {
          this.brewerStatus = null;
          this.brewerStatusService.getBrewerStatus(this.id)
              .subscribe((brewerStatus) => {
                  if (brewerStatus) {
                      console.log(brewerStatus);
                      this.brewerStatus = brewerStatus;
                      console.log(this.brewerStatus);
                  }
              },
              error => {
                 this.errorMessage = <any>error
              });
      }

}
