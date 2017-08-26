import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Chapter } from './chapter';
import { ChapterContent } from './chapterContent';

@Injectable()
export class ChaptersService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private chaptersUrl = 'http://localhost:8080/chapters';  // URL to web api

  constructor(private http: Http) { }

  getChapters(chapterContent: ChapterContent): Promise<Chapter> {
    return this.http
      .get(this.chaptersUrl)
      .toPromise()
      .then(res => res.json() as Chapter[])
      .catch(this.handleError);
  }

  getChapter(chapterId: number): Promise<Chapter> {
    const url = `${this.chaptersUrl}/${chapterId}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as ChapterDisplay)
      .catch(this.handleError);
  }

  getLastChapter(): Promise<ChapterDisplay> {
    const url = `${this.chaptersUrl}/last`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as ChapterDisplay)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
