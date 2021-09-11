import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': ['Content-Type', 'Authorization']
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  get(url: any): Observable<any> {
    // url = this.urlGenerate(url);
    
    return this.http.get<any>(url, httpOptions).pipe(map(data => {
      return data;
    }));
  }

  post(url: any, obj: any): Observable<any> {
    
    return this.http.post(url, JSON.stringify(obj), httpOptions).pipe(map(data => {
      return data;
    }));
  }
  
  filePost(url: any, obj: any): Observable<any> {
   
    return this.http.post(url, obj).pipe(map(data => {
      return data;
    }));
  }

  put(url: any, Obj: any): Observable<any> {
   
    return this.http.put(url, JSON.stringify(Obj), httpOptions).pipe(map(data => {
      return data;
    }));
  }

  delete(url: any): Observable<any> {
    return this.http.delete<any>(url, httpOptions).pipe(
      tap((data) => console.log(`get api w/ id=${data.id}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    console.error(result);
    /*return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      // return of(result as T);
      if (error) {
        return of(error);
      } else if (result) {
        return of(error as T);
      }

    };*/
    return result;
  }
}
