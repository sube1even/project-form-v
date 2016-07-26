import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Brew } from '../shared';
import endpointUrl = require('../shared/endpointUrl');

@Injectable()
export class BrewService {

  endpoint = 'brew';

  constructor(private http: Http) { }

  getBrews(): Observable<Brew[]> {
    return this.http
      .get(endpointUrl.reverseProxy + endpointUrl.apiUrl + this.endpoint + '?access_token=' + endpointUrl.token)
      .map((r: Response) => r.json().response as Brew[])
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


}
