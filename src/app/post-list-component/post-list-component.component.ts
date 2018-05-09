import { Component, Input, OnInit } from '@angular/core';
import { PostListItemComponentComponent } from '../post-list-item-component/post-list-item-component.component';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})

export class PostListComponentComponent implements OnInit {

  @Input() listposts: Post[];
  
  constructor() { }

  ngOnInit() {
    
  }

}
