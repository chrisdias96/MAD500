import { Injectable } from '@angular/core';
import {Content} from '../content-card/content-card-helper';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ContentService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
        'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>('api/content');
  }

  addContent(c: Content): Observable<Content> {
    return this.http.post<Content>('api/content', c, this.httpOptions);
  }
  updateContent(c: Content): Observable<any> {
    return this.http.put('api/content', c,
      this.httpOptions);
  }
}
