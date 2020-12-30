import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Video } from '../video';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videosUrl: string;

  constructor(private http: HttpClient) {
    this.videosUrl = '';
  }

  public getAllVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.videosUrl)
      .pipe(
        catchError(this.handleError<Video[]>('getAllVideos', []))
      );
  }

  public save(video: Video): Observable<Video> {
    return this.http.post<Video>(this.videosUrl, video);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
