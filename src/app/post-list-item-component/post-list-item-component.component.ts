import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postItem: Post;
  
  constructor() { }

  ngOnInit() {
  }

  getColor(){
    if(this.postItem.postLoveIt > 0){
      return 'green';
    }else if(this.postItem.postLoveIt < 0){
      return 'red';
    }
  }
  onLoveIt(){
    this.postItem.postLoveIt+=1;
  }
  onDontLoveIt(){
    this.postItem.postLoveIt-=1;
  }
}
