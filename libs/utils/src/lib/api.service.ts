import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

/** 
 * 
 *  #TODO
 * 
 * use process.env for environment variables
 * 
 */
import { environment } from '../../../../apps/todos/src/environments/environment';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getItems$(): Observable<any[]> {
    return this.http
      .get<any[]>(`${environment.auth.AUDIENCE}items`)
      .pipe(
        catchError(err => throwError(err))
      );
  }

  // get headers(): HttpHeaders {
  //   const headersConfig = {
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json',
  //   };

  //   return new HttpHeaders(headersConfig);
  // }

}