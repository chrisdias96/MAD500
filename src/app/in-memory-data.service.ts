import { Injectable } from '@angular/core';
import { Content} from './content-card/content-card-helper';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {CONTENT} from './contentDB';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const content: Content[] = CONTENT;
    return {content};
  }

  genId(content: Content[]): number {
    return content.length > 0 ? Math.max(...content.map(c => c.contentId)) + 1 : 2000;
  }
}
