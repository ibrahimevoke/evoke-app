import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';

const jwt_token = 'asdasdas3erewgrjtfgdwsdsa';

const httpOptions = {
  headers: new HttpHeaders({
    jwt: jwt_token,
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class HttpsService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:3000'; // Changed from https to http

  getFoods(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/foods').pipe(
      map((response: any) => {
        console.log('Response from getFoods:', response);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  addFood(food: any): Observable<any> {
    let body = JSON.stringify(food);
    return this.http.post(this.baseUrl + '/api/foods', body, httpOptions).pipe(
      map((response: any) => {
        console.log('Response from addFood:', response);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  updateFood(food: any): Observable<any> {
    return this.http
      .put(this.baseUrl + '/api/foods/' + food.id, food, httpOptions)
      .pipe(
        map((response: any) => {
          console.log('Response from updateFood:', response);
          return response;
        }),
        catchError(this.handleError)
      );
  }

  deleteFoods(food: number): Observable<any> {
    return this.http
      .delete(this.baseUrl + '/api/foods/' + food, httpOptions)
      .pipe(
        map((response: any) => {
          console.log('Response from deleteFoods:', response);
          return response;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('HTTP Error:', error);
    return throwError(() => error);
  }
}
