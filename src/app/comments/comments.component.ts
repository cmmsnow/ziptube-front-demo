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
  @Output() commentsUpdated = new EventEmitter();

  comment!: Comment;
  newComment!: string;
  username!: string;


  constructor(
    private commentsService: CommentsService
   ) { }
  ngOnInit(): void {
    this.getComments();
    // @ts-ignore
    this.username = sessionStorage.getItem(AUTHENTICATED_USER);
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

  editComments = () => {
    this.commentsService.updateComment(this.comment).subscribe(
      response => {

      }
    );
  }

 deleteComment(commentId: number): void {
    this.commentsService.deleteComment(commentId);
  }
}


