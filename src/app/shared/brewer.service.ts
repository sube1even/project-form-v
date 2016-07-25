import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Brewer } from '../shared';

@Injectable()
export class BrewerService {

  constructor(private http: Http) {}

  getBrewerOb(): Observable<Brewer[]> {
    return this.http
               .get(`[api_url]`)
               .map((r: Response) => r.json().response as Brewer[])
              // .catch(this.handleError).share();
  }


}
