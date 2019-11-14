import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../content-card/content-card-helper';
import {ContentService} from '../services/content.service';
import {Observable, of} from 'rxjs';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})


export class ContentListComponent implements OnInit {
  contentList: Content[];
  contentItem: Content;
  searchedContentList: Content[];
  searchedResult: string;
  filteredResult: Content[];

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
//    this.contentArray = this.contentService.getContent();
    this.contentService.getContent().subscribe(content => {
      this.contentList = content;
      console.log("Before: ", this.contentList);
    });

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
