"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var DropboxviewAppComponent = (function () {
    function DropboxviewAppComponent() {
        this.title = 'dropboxview works!';
    }
    DropboxviewAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dropboxview-app',
            templateUrl: 'dropboxview.component.html',
            styleUrls: ['dropboxview.component.css']
        })
    ], DropboxviewAppComponent);
    return DropboxviewAppComponent;
}());
exports.DropboxviewAppComponent = DropboxviewAppComponent;
//# sourceMappingURL=dropboxview.component.js.map