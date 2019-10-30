import {Component, Input, OnInit} from '@angular/core';
import {async} from '@angular/core/testing';
import {Content} from '../content-card/content-card-helper';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {

  @Input() contentList: Content[];
  @Input() title: string;
  @Input() author: string;
  @Input() body: string;
  @Input() imageURL: string;
  @Input() tags: string;
  private submitContentResults: string;

  constructor() { }

  ngOnInit() {
  }

  public addContentToArray() {
    const contentPromise = new Promise((success, failure) => {
      let testPass = true;

      if (this.title == null) {
        testPass = false;
        this.submitContentResults = 'Please add a title';
      }
      if (this.author == null) {
        testPass = false;
        this.submitContentResults = 'Please add an author';
      }
      if (this.body == null) {
        testPass = false;
        this.submitContentResults = 'Please add a body';
      }

      if (testPass) {
        if (this.imageURL == null) {
          this.imageURL = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png';
        }

        this.contentList.push({
          author: this.author,
          title: this.title,
          body: this.body,
          contentId: this.contentList.length + 1,
          type: 'News',
          imgUrl: this.imageURL,
          tags: [this.tags]
        });
        this.submitContentResults = 'Content was added';
        success('Content was added with title:' + this.title);
        this.author = null;
        this.title = null;
        this.body = null;
        this.imageURL = null;
        this.tags = null;
      } else {
        failure('Failure :(');
      }
    });
    contentPromise.then(successResult => console.log(successResult)) .catch(failResult => console.log(failResult));
  }

}
