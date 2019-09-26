import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../content-card/content-card-helper';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})

export class ContentListComponent implements OnInit {
  contentList: Content[];


  constructor() {
  }

  ngOnInit() {
    this.contentList = [
      {
        contentId: 1,
        author: 'kordi_vahle',
        imgUrl: 'https://cdn.pixabay.com/photo/2017/03/27/16/50/beach-2179624_1280.jpg',
        body: 'picture of the ocean',
        type: 'beach',
        tags: []
      },
      {
        contentId: 2,
        author: 'stevepb',
        imgUrl: 'https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-cone-1274894_1280.jpg',
        body: 'picture of an ice cream',
        type: 'food',
        tags: ['ice', 'cream']
      },
      {
        contentId: 3,
        author: 'julesroman',
        imgUrl: 'https://cdn.pixabay.com/photo/2015/06/01/05/58/shells-792912_1280.jpg',
        body: 'picture of shells on the sand',
        type: 'beach',
        tags: ['shells', 'sand', 'beach']
      },
      {
        contentId: 4,
        author: 'minka2507',
        imgUrl: 'https://cdn.pixabay.com/photo/2019/09/13/14/31/elephant-4474027_1280.jpg',
        body: 'picture of an elephant taking a bath',
        type: 'animal',
        tags: ['elephant', 'water']
      },
      {
        contentId: 5,
        author: 'Free-Photos',
        imgUrl: 'https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826_1280.jpg',
        body: 'picture of a dog wrapped around a blanket',
        type: 'animal',
        tags: ['dog', 'wrapped', 'blanket']
      }
    ];
  }

}
