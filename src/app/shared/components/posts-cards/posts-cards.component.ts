import { Component, OnInit } from '@angular/core';
import { postsArr } from '../../const/post';
import { Ipost } from '../../models/student.interface';


@Component({
  selector: 'app-posts-cards',
  templateUrl: './posts-cards.component.html',
  styleUrls: ['./posts-cards.component.scss']
})
export class PostsCardsComponent implements OnInit {
  postsData : Array<Ipost> = postsArr//array of objects
  constructor() { }

  ngOnInit(): void {
  }

}





















