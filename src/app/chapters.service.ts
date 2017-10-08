import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Chapter } from './chapter';
import { ChapterDisplay } from './chapterDisplay';

@Injectable()
export class ChaptersService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private chaptersUrl = 'http://localhost:8080/chapters';  // URL to web api

  constructor(private http: Http) { }

  getChapter(chapterId: String): Promise<Chapter> {
    const url = `${this.chaptersUrl}/${chapterId}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Chapter)
      .catch(this.handleError);
  }

  getLastChapter(): Promise<Chapter> {
    const url = `${this.chaptersUrl}/last`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Chapter)
      .catch(this.handleError);
  }

  getChaptersTitles(): Promise<ChapterDisplay[]> {
    const url = `${this.chaptersUrl}/titles`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as ChapterDisplay[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
