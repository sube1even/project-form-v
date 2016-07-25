import { Component, OnInit } from '@angular/core';

import { Brew, BrewService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-brew',
  templateUrl: 'brew.component.html',
  styleUrls: ['brew.component.css'],
  providers: [BrewService]
})
export class BrewComponent implements OnInit {
  brews: Brew[];
  brewerName: string;
  errorMessage: string;

    constructor(private brewService: BrewService) { }

    ngOnInit() {
      this.getBrews();
    }

    private getBrews() {
          this.brews = null;
          this.brewService.getBrews()
              .subscribe((brews) => {
                  if (brews) {
                      console.log(brews);
                      this.brews = brews;
                  }
              },
              error => {
                 this.errorMessage = <any>error
              });
      }

}
