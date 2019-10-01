import {Component, Input, OnInit} from '@angular/core';
import {Content} from './content-card-helper';

// @ts-ignore
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})

export class ContentCardComponent implements OnInit {
  @Input() content: Content;
  @Input() index: number;
  @Input() last: boolean;
  title: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  public click(content: Content) {
    console.log('Content ID: ' + content.contentId);
  }

}


