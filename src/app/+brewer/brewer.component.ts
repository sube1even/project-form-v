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


    constructor(private brewerService: BrewerService) { }

    ngOnInit() {
      this.getBrewer();
    }

    private getBrewer() {
          this.brewer = null;
          this.brewerService.getBrewerOb()
              .subscribe((brewer) => {
                  // if (brewer) {
                  //     console.log(brewer);
                  //     this.brewer = brewer;
                  //     this.getBrewerName();
                  // }
                  console.log(brewer);
                  brewer.forEach((b) => {
                    this.brewer.push(b);
                });
                 console.log(this.brewer);

              },
              error => {
                 // this.isLoading = false;
              });
      }

     private getBrewerName() {
       //this.brewerName = this.brewerService.name;
      }




}
