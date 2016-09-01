import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { BrewerStatus } from '../shared';
import endpointUrl = require('../shared/endpointUrl');

@Injectable()
export class BrewerStatusService {

  constructor(private http: Http) {}

  getBrewerStatus(id: number): Observable<BrewerStatus> {
    return this.http
               .get(endpointUrl.reverseProxy + endpointUrl.apiUrl + 'brewer/' + id + '/brew' + '?access_token=' + endpointUrl.token)
               .map((r: Response) => r.json().response as BrewerStatus)
               .catch(this.handleError);
  }

private handleError (error: any) {
  let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); // log to console instead
  return Observable.throw(errMsg);
}


}
