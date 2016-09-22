import { Component, Input, OnInit } from '@angular/core';

import { BrewerStatus, BrewerStatusService, RecipeService, Recipe } from '../shared';
import { BrewTimeseriesComponent } from '../+brew/brew-timeseries.component';

@Component({
  moduleId: module.id,
  selector: 'app-brew',
  templateUrl: 'brew.component.html',
  styleUrls: ['../+brewer/brewer.component.css'],
  providers: [BrewerStatusService, RecipeService]
})
export class BrewComponent implements OnInit {
  brewerStatus: BrewerStatus;
  recipe: Recipe;
  @Input() id: number;
  recipeId: number;
  errorMessage: string;
  brewstart: any;
  brewstartDaysago:number;
  brewstartHoursago:number;

    constructor(private brewerStatusService: BrewerStatusService, private recipeService: RecipeService) {

    }

    ngOnInit() {

      this.getBrewerStatus(this.id);
      console.log(this.brewerStatus);

    }

    private getBrewerStatus(id: number) {
          this.brewerStatus = null;
          this.brewerStatusService.getBrewerStatus(this.id)
              .subscribe((brewerStatus) => {
                  if (brewerStatus) {
                      this.brewerStatus = brewerStatus;
                      this.getCurrentRecipe(brewerStatus.recipeId);
                      // console.log(this.brewerStatus);
                      this.brewstart = this.brewerStatus.dateCreated;
                      this.calcDaysHours(new Date(this.brewstart));
                  }
              },
              error => {
                 this.errorMessage = <any>error
              });
      }


      private getCurrentRecipe(recipeId: number) {
            this.recipe = null;
            this.recipeService.getRecipe(recipeId)
                .subscribe((recipe) => {
                    if (recipe) {
                        this.recipe = recipe;
                        console.log(recipe);
                    }
                },
                error => {
                   this.errorMessage = <any>error
                });
        }

        private calcDaysHours(created: Date) {
          let msSinceCreated = new Date().getTime() - created.getTime();
          let hrsSinceCreated = msSinceCreated/1000/60/60;
          this.brewstartDaysago = hrsSinceCreated/24;
          this.brewstartHoursago = hrsSinceCreated%24;
        }

}
