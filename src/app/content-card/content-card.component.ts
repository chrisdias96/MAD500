import { Component, OnInit } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})

export class ContentCardComponent implements OnInit {
  contentList: ContentList;

  picture1: Content = {
    contentId: 1,
    author: 'kordi_vahle',
    imgUrl: 'https://pixabay.com/photos/beach-north-sea-sea-sunset-water-2179624/',
    body: 'picture of the ocean'
  };

  picture2: Content = {
    contentId: 2,
    author: 'stevepb',
    imgUrl: 'https://pixabay.com/photos/ice-cream-cone-melting-hot-1274894/',
    body: 'picture of an ice cream'
  };

  picture3: Content = {
    contentId: 3,
    author: 'julesroman',
    imgUrl: 'https://pixabay.com/photos/shells-sand-beach-vacation-792912/',
    body: 'picture of shells on the sand',
    tags: ['shells', 'sand', 'beach']
  };

  ngOnInit() {
    this.contentList = new ContentList();
    this.contentList.add(this.picture1);
    this.contentList.add(this.picture2);
    this.contentList.add(this.picture3);
  }
}

export class ContentList {
  content: Content[];

  constructor() {
    this.content = [];
  }

  get picture(): Content[] {
    return this.content;
  }

  add(picture) {
    this.content.push(picture);
  }

  numOfPics() {
    return this.content.length;
  }

  getPicData(i: number) {
    return '<h2>ID:</h2> ' + this.picture[i].contentId +
      '<h2>Author:</h2> ' + this.picture[i].author +
      '<h2>imgUrl:</h2> ' + this.picture[i].imgUrl +
      '<h2>type:</h2> ' + this.picture[i].type +
      '<h2>Body:</h2> ' + this.picture[i].body +
      '<h2>Tags:</h2> ' + this.picture[i].tags;
  }
}

interface Content {
  contentId: number;
  author: string;
  imgUrl?: string;
  type?: string;
  body: string;
  tags?: string[];
}
