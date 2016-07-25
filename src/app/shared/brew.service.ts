import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Brew } from '../shared';

@Injectable()
export class BrewService {

  constructor(private http: Http) {}

  getBrews(): Observable<Brew[]> {
    return this.http
               .get(`https://cors-anywhere.herokuapp.com/`)
               .map((r: Response) => r.json().response as Brew[])
               .catch(this.handleError);
  }

private handleError (error: any) {
  let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); // log to console instead
  return Observable.throw(errMsg);
}


}
