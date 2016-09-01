import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Recipe } from '../shared';
import endpointUrl = require('../shared/endpointUrl');

@Injectable()
export class RecipeService {

  endpoint = 'recipe';

  constructor(private http: Http) {}

  getRecipe(recipeId): Observable<Recipe> {
    return this.http
               .get(endpointUrl.reverseProxy + endpointUrl.apiUrl + this.endpoint + '?access_token=' + endpointUrl.token)
               .map((r: Response) => r.json().response.filter((r) => { return r.id === recipeId })[0] as Recipe)
               .catch(this.handleError);


  }

private handleError (error: any) {
  let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); // log to console instead
  return Observable.throw(errMsg);
}


}
