import { Component, Input, OnInit } from '@angular/core';

import { BrewerStatus, BrewerStatusService, RecipeService, Recipe } from '../shared';

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
                      console.log(this.brewerStatus);
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

}
