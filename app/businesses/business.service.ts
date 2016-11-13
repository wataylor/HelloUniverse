import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IBusiness } from './business';

/* The service must be registered to Angular so that it can be
 * injected.  It is available in all components which are children of
 * the component where it is registered, so it is registered in
 * app.component.ts. */

@Injectable()
export class BusinessService {
  /* This can refer to a sequential file whih contains a JSON object.
   * There is no timeout error if this file does not exist.*/
  private _businessUrl = 'api/businesses/businesses.json';

  constructor(private _http: Http) {}

  getBusinesses(): Observable<IBusiness[]> {
    return this._http.get(this._businessUrl)
      .map((response: Response) => <IBusiness[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleGetsError);
  }

  getBusiness(id: string): Observable<IBusiness> {
    return this.getBusinesses()
      .map((businesses: IBusiness[]) => businesses.find(b => b.uUID == id));
  }

  private handleGetsError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
