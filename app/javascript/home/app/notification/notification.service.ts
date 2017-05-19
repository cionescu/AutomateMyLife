import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class NotificationService {
  private apiUrl = `${(<any>window).Config.api}/api/notification`;

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  create(): Promise<any> {
    const url = `${this.apiUrl}.json`;
    return this.http
      .post(url, {}, {headers: this.headers})
      .toPromise()
      .then(() => true)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
