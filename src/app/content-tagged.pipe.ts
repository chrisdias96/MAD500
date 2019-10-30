import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './content-card/content-card-helper';

@Pipe({
  name: 'filterType',
  pure: false
})

export class ContentTaggedPipe implements PipeTransform {
  transform(contentList: Content[], filterType?: string): Content[] {
    return contentList.filter(c => c.type === filterType ? c : null);
  }
}
