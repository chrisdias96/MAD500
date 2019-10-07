import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../content-card/content-card-helper';
import {findAll} from '@angular/compiler-cli/ngcc/src/utils';
import {isBoolean} from 'util';
import index from '@angular/cli/lib/cli';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})


export class ContentListComponent implements OnInit {
  contentList: Content[];
  searchedContentList: Content[];
  searchedResult: string;
  filteredResult: Content[];

  constructor() {
  }

  ngOnInit() {
    this.contentList = [
      {
        contentId: 1,
        title: 'beach sunset',
        author: 'kordi_vahle',
        // imgUrl: 'https://cdn.pixabay.com/photo/2017/03/27/16/50/beach-2179624_1280.jpg',
        body: 'picture of the ocean',
        type: 'News',
        tags: []
      },
      {
        contentId: 2,
        title: 'ice cream madness',
        author: 'stevepb',
        imgUrl: 'https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-cone-1274894_1280.jpg',
        body: 'picture of an ice cream',
        type: 'Story',
        tags: ['ice', 'cream']
      },
      {
        contentId: 3,
        title: 'seashells on the beach',
        author: 'julesroman',
        imgUrl: 'https://cdn.pixabay.com/photo/2015/06/01/05/58/shells-792912_1280.jpg',
        body: 'picture of shells on the sand',
        type: 'News',
        tags: ['shells', 'sand', 'beach']
      },
      {
        contentId: 4,
        title: 'baby elephant',
        author: 'minka2507',
        imgUrl: 'https://cdn.pixabay.com/photo/2019/09/13/14/31/elephant-4474027_1280.jpg',
        body: 'picture of an elephant taking a bath',
        type: 'Story',
        tags: ['elephant', 'water']
      },
      {
        contentId: 5,
        title: 'cold doggy',
        author: 'Free-Photos',
        imgUrl: 'https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826_1280.jpg',
        body: 'picture of a dog wrapped around a blanket',
        tags: ['dog', 'wrapped', 'blanket']
      },
      {
        contentId: 6,
        title: 'beach sunset',
        author: 'kordi_vahle',
        // imgUrl: 'https://cdn.pixabay.com/photo/2017/03/27/16/50/beach-2179624_1280.jpg',
        body: 'picture of the ocean',
        type: 'News',
        tags: []
      },
      {
        contentId: 7,
        title: 'ice cream madness',
        author: 'stevepb',
        imgUrl: 'https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-cone-1274894_1280.jpg',
        body: 'picture of an ice cream',
        type: 'Story',
        tags: ['ice', 'cream']
      },
      {
        contentId: 8,
        title: 'seashells on the beach',
        author: 'julesroman',
        imgUrl: 'https://cdn.pixabay.com/photo/2015/06/01/05/58/shells-792912_1280.jpg',
        body: 'picture of shells on the sand',
        type: 'News',
        tags: ['shells', 'sand', 'beach']
      },
      {
        contentId: 9,
        title: 'baby elephant',
        author: 'minka2507',
        imgUrl: 'https://cdn.pixabay.com/photo/2019/09/13/14/31/elephant-4474027_1280.jpg',
        body: 'picture of an elephant taking a bath',
        type: 'Story',
        tags: ['elephant', 'water']
      },
      {
        contentId: 10,
        title: 'cold doggy',
        author: 'Free-Photos',
        imgUrl: 'https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826_1280.jpg',
        body: 'picture of a dog wrapped around a blanket',
        tags: ['dog', 'wrapped', 'blanket']
      },
    ];
  }

  public searchTitle(input: string) {
    this.filteredResult = this.contentList.filter(c => c.title.startsWith(input.trim()));
    if (this.filteredResult.length > 0) {
      console.log(this.filteredResult);
      return this.searchedResult = 'The title ' + '\'' + input + '\'' + ' does exist in the content';
    } else {
      return this.searchedResult = 'The title ' + '\'' + input + '\'' + ' does not exist in the content';
    }
  }
}
