import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Launch } from './model/launch';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  private readonly url: string = 'https://api.spaceXdata.com/v3/launches?limit=100'; //Main API endpoint

  constructor(private http: HttpClient) { }

  getLaunches(params:string): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${this.url}${params}`)
      .pipe(
        catchError(this.handleError)
      );
  } 

  private handleError(error: any) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    }
    else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
