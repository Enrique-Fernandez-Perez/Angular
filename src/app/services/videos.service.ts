import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Video } from '../interfaces/video';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  private apiURL = "http://127.0.0.1:8000/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getIndex(): Observable<Video[]> {
    return this.httpClient.get<Video[]>(this.apiURL + '/videos/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  // create(post : Video): Observable<Video> {
  //   return this.httpClient.post<Video>(this.apiURL + '/video', JSON.stringify(post), this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }

  create(peticion : FormData): Observable<Video> {
    const headers = new HttpHeaders();

    headers.append('Content-Type','multipart/form-data');
    headers.append('Accept','application/json');

    // console.log(headers);

    return this.httpClient.post<Video>(this.apiURL + '/video', peticion, {headers})
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id : number): Observable<Video> {
    return this.httpClient.get<Video>(this.apiURL + '/video/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id : Number, post : Video): Observable<Video> {
    return this.httpClient.put<Video>(this.apiURL + '/video/update/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id : Number){
    return this.httpClient.delete<Video>(this.apiURL + '/video/delete/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  errorHandler(error : any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
