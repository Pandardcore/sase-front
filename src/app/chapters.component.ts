import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Router }            from '@angular/router';
import { ChapterDisplay }                from './chapterDisplay';
import { ChaptersService }         from './chapters.service';
import { Page }         from './page';

@Component({
  selector: 'chapters',
  templateUrl: './chapters.component.html',
  styleUrls: [ './chapters.component.css' ]
})
export class ChaptersComponent implements OnInit {
  chapterNumbers: number[];
  currentChapter: ChapterDisplay;
  chapterNumber: String;
  leftPage: Page;
  rightPage: Page;

  constructor(
    private chaptersService: ChaptersService,
    private route: ActivatedRoute,
    private router: Router) { }

  initChapter(chapter: ChapterDisplay): void {
    this.currentChapter = chapter;
    if (typeof this.currentChapter.pages !== 'undefined' && this.currentChapter.pages.length > 0) {
      this.leftPage = this.currentChapter.pages[0];
      this.rightPage = this.currentChapter.pages[1];
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        this.chapterNumber = params['id'];
        if(this.chapterNumber != undefined) {
          this.chaptersService.getChapter(this.chapterNumber).then(chap => this.initChapter(chap));
        } else {
          this.chaptersService.getLastChapter().then(chap => this.initChapter(chap));
        }
      });
  }

  previousPage(): void {
    this.leftPage = this.currentChapter.pages[0];
    this.rightPage = this.currentChapter.pages[1];
  }

  nextPage(): void {
    this.leftPage = this.currentChapter.pages[2];
    this.rightPage = this.currentChapter.pages[3];
  }
}
