import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../video';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET videos from the server */
  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(`${API_URL}/storage/video/allvideos`);
  }

  /** DELETE: delete the video from the server */
  deleteVideo = (videoId: number) => this.http.delete<any>(
  `${API_URL}/storage/deletevideo/${videoId}`)

  /** PUT: update the video on the server (title/description) */
  updateVideo = (videoId: number, userName: string | null, title: string, description: string) =>
    this.http.put<any>(
      `${API_URL}/storage/video/${videoId}`,
      {videoId, userName, title, description}
    )
}
