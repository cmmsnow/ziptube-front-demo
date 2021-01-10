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
  // @Output() outUpdateComment = new EventEmitter()<CommentUpdate>();
  // @Output() outCreateComment = new EventEmitter<Comment>()
  // @ViewChild() ('commentContentEditable') commentContentEditable: ElementRef;
  comment!: string;
  newComment!: string;
  username!: string;


  constructor(
    private commentsService: CommentsService) { }
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
    this.commentsService.updateComment(this.comment, this.videoID).subscribe(
      response => {

      }
    );
  }






  // tslint:disable-next-line:typedef
  post() {
    // @ts-ignore
    this.comments.push(this.newComment);
  }

  deleteComment(commentId: number): void {
    this.commentsService.deleteComment(commentId);
  }
}


