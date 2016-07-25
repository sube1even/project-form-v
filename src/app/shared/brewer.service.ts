import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Brewer } from '../shared';

@Injectable()
export class BrewerService {

  constructor(private http: Http) {}

  getBrewer(): Observable<Brewer[]> {
    return this.http
               .get(`https://cors-anywhere.herokuapp.com/`)
               .map((r: Response) => r.json().response as Brewer[])
               .catch(this.handleError);
  }


//   getHeroes (): Observable<Hero[]> {
//   return this.http.get(this.heroesUrl)
//                   .map(this.extractData)
//                   .catch(this.handleError);
// }

private handleError (error: any) {
  let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); // log to console instead
  return Observable.throw(errMsg);
}


}
