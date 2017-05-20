import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private apiUrl = `${(<any>window).Config.api}/api/user`;

  constructor(private http: Http) { }

  get(id: number): Promise<any> {
    return this.http
      .get(`${this.apiUrl}/${id}.json`)
      .toPromise()
      .then( (response) => response.json() )
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
