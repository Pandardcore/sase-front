"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var chapters_service_1 = require("./chapters.service");
var ChaptersComponent = (function () {
    function ChaptersComponent(chaptersService, route, router) {
        this.chaptersService = chaptersService;
        this.route = route;
        this.router = router;
        this.selectedChapterToRead = null;
    }
    ChaptersComponent.prototype.initChapter = function (chapter) {
        var _this = this;
        this.currentChapter = chapter;
        if (typeof this.currentChapter.pages != 'undefined' && this.currentChapter.pages.length > 0) {
            this.leftPage = 0;
            this.rightPage = 1;
            this.customizePageSelectorButtons();
        }
        this.chaptersService.getChaptersTitles().then(function (titles) { return _this.loadChaptersTitles(titles); });
    };
    ChaptersComponent.prototype.loadChaptersTitles = function (titles) {
        var _this = this;
        this.chapters = titles;
        this.chapters.forEach(function (chap) {
            if (chap.chapterNumber == _this.currentChapter.chapNumber.toString()) {
                _this.selectedChapterToRead = chap;
            }
        });
    };
    ChaptersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.chapterNumber = params['id'];
            if (_this.chapterNumber != undefined) {
                _this.chaptersService.getChapter(_this.chapterNumber).then(function (chap) { return _this.initChapter(chap); });
            }
            else {
                _this.chaptersService.getLastChapter().then(function (chap) { return _this.initChapter(chap); });
            }
        });
    };
    ChaptersComponent.prototype.goToChapter = function () {
        window.location.href = '/read/' + this.selectedChapterToRead.chapterNumber;
    };
    ChaptersComponent.prototype.previousPage = function () {
        if (this.leftPage > 0) {
            this.leftPage = this.leftPage - 2;
            this.rightPage = this.rightPage - 2;
            this.customizePageSelectorButtons();
        }
        else {
            if (this.currentChapter.previousChapterId != null) {
                window.location.href = '/read/' + this.currentChapter.previousChapterId;
            }
        }
    };
    ChaptersComponent.prototype.nextPage = function () {
        if (this.rightPage < this.currentChapter.pages.length - 1) {
            this.leftPage = this.leftPage + 2;
            this.rightPage = this.rightPage + 2;
            this.customizePageSelectorButtons();
        }
        else {
            if (this.currentChapter.nextChapterId != null) {
                window.location.href = '/read/' + this.currentChapter.nextChapterId;
            }
        }
    };
    ChaptersComponent.prototype.customizePageSelectorButtons = function () {
        if (this.leftPage == 0) {
            document.getElementById('previousPageSelector').innerHTML = '<<';
        }
        else {
            document.getElementById('previousPageSelector').innerHTML = '<';
        }
        if (this.rightPage == this.currentChapter.pages.length) {
            document.getElementById('nextPageSelector').innerHTML = '>>';
        }
        else {
            document.getElementById('nextPageSelector').innerHTML = '>';
        }
    };
    return ChaptersComponent;
}());
ChaptersComponent = __decorate([
    core_1.Component({
        selector: 'chapters',
        templateUrl: './chapters.component.html',
        styleUrls: ['./chapters.component.css']
    }),
    __metadata("design:paramtypes", [chapters_service_1.ChaptersService,
        router_1.ActivatedRoute,
        router_2.Router])
], ChaptersComponent);
exports.ChaptersComponent = ChaptersComponent;
//# sourceMappingURL=chapters.component.js.map