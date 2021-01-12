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
    this.canDelete = this.canUserDelete();
  }
  isLoggedIn(): boolean {
    if (this.username == null){
      return false;
    } else {
      return true;
    }
  }
  canUserDelete(): boolean {
    if (this.isLoggedIn() && this.videoUser === this.username){
      return true;
    }
    return false;
  }
  canUserEdit(): boolean {
    if (this.isLoggedIn() && this.videoUser === this.username){
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
  editComments = (commentID: number) => {
    this.commentsService.updateComment(commentID, this.editedComment).subscribe(
      response => {
        return response;
      }
    );
  }
  // editComments = (commentID: number, comment: Comment) => {
  //   this.commentsService.updateComment(commentID, comment).subscribe(
  //     response => {
  //       return response;
  //     }
  //   );
  // }

  deleteComment = (commentID: number) => {
    this.commentsService.deleteComment(commentID).subscribe(
      response => {
        return response;
      });
  }


}


