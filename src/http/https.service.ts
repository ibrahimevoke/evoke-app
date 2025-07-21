// serive=> REST api using HttpClient - CRUD operations with Observables

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { json } from 'body-parser';
import { debounceTime, filter, map, Observable } from 'rxjs';

const jwt_tokeen = 'asdasdas3erewgrjtfgdwsdsa';

const httpOptions: any = {
  headers: new HttpHeaders({
    jwt: jwt_tokeen,
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class HttpsService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://localhost:3000';

  getFoods(): any {
    return this.http
      .get(this.baseUrl + '/api/foods')
      .pipe(debounceTime(2000))
      .pipe(filter((response) => response !== null && response !== undefined))
      .pipe(
        map((response: any) => {
          console.log('Response from getFoods:', response);
          return response;
        })
      );
  }

  //postFood(food: any): Observable<any> {
  addFood(food: any): Observable<any> {
    let body = JSON.stringify(food);
    return this.http.post(this.baseUrl + '/api/foods', body, httpOptions).pipe(
      map((response: any) => {
        console.log('Response from addFood:', response);
        return response;
      })
    );
  }

  //updateFood(food: any): Observable<any> {
  updateFood(food: any): Observable<any> {
    let body = JSON.stringify(food);
    return this.http.put(
      this.baseUrl + '/api/foods/' + food.id,
      body,
      httpOptions
    );
  }
  deleteFoods(id: number): Observable<any> {
    let body = JSON.stringify(id);
    return this.http.delete(this.baseUrl + '/api/foods/' + id);
  }
  // deleteFoods(food: any): <Observable<any> {
  //   let body=JSON.stringify(food);
  //   return this.http.delete(this.baseUrl+'/api/foods/'+food.id, body, httpOptions)
  // }
}
