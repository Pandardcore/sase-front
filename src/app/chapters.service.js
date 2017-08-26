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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var ChaptersService = (function () {
    function ChaptersService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.chaptersUrl = 'http://localhost:8080/chapters'; // URL to web api
    }
    ChaptersService.prototype.getChapters = function (chapterContent) {
        return this.http
            .get(this.chaptersUrl)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ChaptersService.prototype.getChapter = function (chapterId) {
        var url = this.chaptersUrl + "/" + chapterId;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ChaptersService.prototype.getLastChapter = function () {
        var url = this.chaptersUrl + "/last";
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ChaptersService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ChaptersService;
}());
ChaptersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ChaptersService);
exports.ChaptersService = ChaptersService;
//# sourceMappingURL=chapters.service.js.map