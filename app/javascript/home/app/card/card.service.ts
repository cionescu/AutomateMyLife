import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CardService {
  private apiUrl = `${(<any>window).Config.api}/api/card`;

  constructor(private http: Http) { }

  create(card: any): Promise<any> {
    return this.http
      .post(`${this.apiUrl}.json`, {card})
      .toPromise()
      .then( (response) => response.json())
      .catch( this.handleError );
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
