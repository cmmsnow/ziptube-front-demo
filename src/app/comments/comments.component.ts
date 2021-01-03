import {Component, Input, OnInit} from '@angular/core';
import {MockComments} from '../mock-comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments = MockComments;
  @Input() videoID!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
