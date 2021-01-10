import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Comment } from '../comment';
import {API_URL} from '../app.constants';
import {map} from 'rxjs/operators';
import {AUTHENTICATED_USER, TOKEN} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private commentsUrl = 'http://localhost:8080/comments/allcomments';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET comments from the server */
  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>('http://localhost:8080/comments/allcomments');
  }

  /** POST: add a new comment to the server */
  addNewComment = (userName: string, comment: string, videoId: number) => this.http.post<any>(
    'http://localhost:8080/comment/addcomment', {userName, videoId, comment}
  )

  addComment = (userName: string, videoId: number, comment: string) => this.http.post<any>(
    'http://localhost:8080/comment/addcomment', {userName, videoId, comment}
  )

  /** DELETE: delete the video from the server */
  // deleteVideo(video: Video | number): Observable<Video> {
  //   const id = typeof video === 'number' ? video : video.id;
  //   const url = `${this.videosUrl}/${id}`;
  //
  //   return this.http.delete<Video>(url, this.httpOptions);
  // }

  /** PUT: update the video on the server */
  // updateVideo(video: Video): Observable<any> {
  //   return this.http.put(this.videosUrl, video, this.httpOptions);
  // }
}
