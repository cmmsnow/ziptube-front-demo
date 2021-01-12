import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Comment } from '../comment';
import {API_URL} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET comments from the server */
  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${API_URL}/comments/allcomments`);
  }

  /** POST: add a new comment to the server */
  addComment = (userName: string, videoId: number, comment: string) => this.http.post<any>(
    `${API_URL}/comment/addcomment`, {userName, videoId, comment}
  )

  /** DELETE: delete the video from the server */
  deleteComment = (commentID: number) => this.http.delete<any>(
  `${API_URL}/deletecomment/${commentID}`
  )

  /** PUT: update the video on the server */
  updateComment = (commentId: number, comment: string) => this.http.put<any>(`${API_URL}/comment/${commentId}`, {comment}
  )
}
