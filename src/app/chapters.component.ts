import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Router }            from '@angular/router';
import { Chapter }                from './chapter';
import { ChapterDisplay }                from './chapterDisplay';
import { Page }         from './page';

import { ChaptersService }         from './chapters.service';

@Component({
  selector: 'chapters',
  templateUrl: './chapters.component.html',
  styleUrls: [ './chapters.component.css' ]
})
export class ChaptersComponent implements OnInit {
  chapters: ChapterDisplay[];
  selectedChapterToRead: ChapterDisplay = null;
  currentChapter: Chapter;
  chapterNumber: String;
  leftPage: number;
  rightPage: number;

  constructor(
    private chaptersService: ChaptersService,
    private route: ActivatedRoute,
    private router: Router) { }

  initChapter(chapter: Chapter): void {
    this.currentChapter = chapter;
    if (typeof this.currentChapter.pages != 'undefined' && this.currentChapter.pages.length > 0) {
      this.leftPage = 0;
      this.rightPage = 1;
      this.customizePageSelectorButtons();
    }
    this.chaptersService.getChaptersTitles().then(titles => this.loadChaptersTitles(titles));
  }

  loadChaptersTitles(titles: ChapterDisplay[]): void {
    this.chapters = titles;
    this.chapters.forEach(chap => {
      if(chap.chapterNumber == this.currentChapter.chapNumber.toString()) {
        this.selectedChapterToRead = chap;
      }
    });
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

  goToChapter(): void {
    window.location.href = '/read/' + this.selectedChapterToRead.chapterNumber;
  }

  previousPage(): void {
    if(this.leftPage > 0) {
      this.leftPage = this.leftPage - 2;
      this.rightPage = this.rightPage - 2;
      this.customizePageSelectorButtons();
    } else {
      if(this.currentChapter.previousChapterId != null) {
        window.location.href = '/read/' + this.currentChapter.previousChapterId;
      }
    }
  }

  nextPage(): void {
    if(this.rightPage < this.currentChapter.pages.length - 1) {
      this.leftPage = this.leftPage + 2;
      this.rightPage = this.rightPage + 2;
      this.customizePageSelectorButtons();
    } else {
      if(this.currentChapter.nextChapterId != null) {
        window.location.href = '/read/' + this.currentChapter.nextChapterId;
      }
    }
  }

  customizePageSelectorButtons(): void {
      if(this.leftPage == 0) {
        document.getElementById('previousPageSelector').innerHTML = '<<';
      } else {
        document.getElementById('previousPageSelector').innerHTML = '<';
      }
      if(this.rightPage == this.currentChapter.pages.length) {
        document.getElementById('nextPageSelector').innerHTML = '>>';
      } else {
        document.getElementById('nextPageSelector').innerHTML = '>';
      }
  }
}
