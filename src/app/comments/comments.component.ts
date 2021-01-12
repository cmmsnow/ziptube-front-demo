import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MockComments} from '../mock-comments';
import {CommentsService} from '../service/comments.service';
import { Comment } from '../comment';
import {AUTHENTICATED_USER} from '../service/authentication.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})


export class CommentsComponent implements OnInit {
  comments!: Comment[];
  @Input() videoID!: number;
  @Input() videoUser!: string;

  comment!: string;
  newComment!: string;
  username!: string;
  isUserLoggedIn!: boolean;
  canDelete!: boolean;
  editedComment!: string;

  constructor(private commentsService: CommentsService) { }
  ngOnInit(): void {
    this.getComments();
    // @ts-ignore
    this.username = sessionStorage.getItem(AUTHENTICATED_USER);
    this.isUserLoggedIn = this.isLoggedIn();

  }
  isLoggedIn(): boolean {
    if (this.username == null){
      return false;
    } else {
      return true;
    }
  }
  canUserDelete(commentUsername: string): boolean {
    if (this.isLoggedIn() && this.videoUser === this.username){
      return true;
    } else if (this.isLoggedIn() && commentUsername === this.username){
      return true;
    }
    return false;
  }

  getComments(): void {
    this.commentsService.getComments()
      .subscribe((comments: Comment[]) => this.comments = comments);
  }
  addComment(): void {
    this.commentsService.addComment(this.username, this.videoID, this.newComment).subscribe(
      response => {
        console.log(response);
      },
      error => {
        window.onbeforeunload = null;
        console.log(error);
      });
  }


  editComments(commentId: number): void {
    this.commentsService.updateComment(commentId, this.editedComment).subscribe(
      response => {
        console.log(this.editedComment);
        console.log(response);
      }
    );
  }

  deleteComment = (commentID: number) => {
    this.commentsService.deleteComment(commentID).subscribe(
      response => {
        return response;
      });
  }


}


