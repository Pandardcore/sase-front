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
var common_1 = require("@angular/common");
var characters_service_1 = require("./characters.service");
require("rxjs/add/operator/switchMap");
var HeroDetailsComponent = (function () {
    function HeroDetailsComponent(charactersService, route, location) {
        this.charactersService = charactersService;
        this.route = route;
        this.location = location;
    }
    HeroDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.charactersService.getHero(+params['id']); })
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    HeroDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroDetailsComponent.prototype.save = function () {
        var _this = this;
        this.charactersService.update(this.hero)
            .then(function () { return _this.goBack(); });
    };
    return HeroDetailsComponent;
}());
HeroDetailsComponent = __decorate([
    core_1.Component({
        selector: 'hero-details',
        templateUrl: './hero-details.component.html',
        styleUrls: ['./hero-details.component.css']
    }),
    __metadata("design:paramtypes", [characters_service_1.CharactersService,
        router_1.ActivatedRoute,
        common_1.Location])
], HeroDetailsComponent);
exports.HeroDetailsComponent = HeroDetailsComponent;
//# sourceMappingURL=hero-details.component.js.map