import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
//createDate = new Date();

posts =[
  new Post('Création appli blog','Cette appli permet pour le moment de liker les posts pré-créés',3),
  new Post('Limitation 1', "Cette appli ne permet pas pour le moment d'ajouter un post",-1),
  new Post('Limitation 2', "Cette appli ne permet pour le moment ni de supprimer ni d'éditer un post",-3)
];
}
