import {Component, Input, OnInit} from '@angular/core';
import {Content} from './content-card-helper';
import {ContentService} from '../services/content.service';
import {Observable, of} from 'rxjs';
import { MessageService } from '../message.service';

// @ts-ignore
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})

export class ContentCardComponent implements OnInit {
  @Input() content: Content;
  @Input() contentList: Content[];
  @Input() contentItem: Content;
  @Input() index: number;
  @Input() last: boolea
  title: string;

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
  }

  save(): void {
    this.contentService.addContent(this.contentItem)
      .subscribe(content => {
        this.contentList.push(content);
        console.log("After: ", this.contentList);
      });
  }
  update(): void {
    this.contentService.updateContent(this.contentItem)
      .subscribe(_ => console.log("Content updated"));
  }

  public click(content: Content) {
    console.log('Content ID: ' + content.contentId);
  }



}


