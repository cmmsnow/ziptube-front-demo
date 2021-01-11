import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Comment } from '../comment';
import {API_URL} from '../app.constants';

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
    return this.http.get<Comment[]>(this.commentsUrl);
  }

  /** POST: add a new comment to the server */
  // addNewComment = (userName: string, comment: string, videoId: number) => this.http.post<any>(
  //   'http://localhost:8080/comment/addcomment', {userName, videoId, comment}
  // )

  addComment = (userName: string, videoId: number, comment: string) => this.http.post<any>(
    `${API_URL}/comment/addcomment`, {userName, videoId, comment}
  )

  /** DELETE: delete the video from the server */
  deleteComment = (commentID: number) => this.http.delete<any>(
  `${API_URL}/deletecomment/${commentID}`
)
  // deleteComment(commentId: number): Observable<Comment> {
  //   // const id = typeof comment === 'string' ? comment : this;
  //   const url = `${API_URL}/deletecomment/${commentId}`;
  //
  //   return this.http.delete<Comment>(url, this.httpOptions);
  // }

  /** PUT: update the video on the server */
  updateComment(comment: Comment): Observable<any> {
    return this.http.put<any>(this.commentsUrl, comment, this.httpOptions);
  }
}
