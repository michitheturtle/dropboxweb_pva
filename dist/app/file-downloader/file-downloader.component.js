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
var core_1 = require('@angular/core');
var filesaver = require('filesaver');
var dropbox_api_service_1 = require("../dropbox-api.service");
var FileDownloaderComponent = (function () {
    function FileDownloaderComponent(service) {
        this.service = service;
    }
    FileDownloaderComponent.prototype.ngOnInit = function () {
    };
    FileDownloaderComponent.prototype.downloadFile = function () {
        var _this = this;
        this.service.downloadFile(this.file).subscribe(function (response) {
            filesaver.saveAs(response, _this.file.name);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FileDownloaderComponent.prototype, "file", void 0);
    FileDownloaderComponent = __decorate([
        core_1.Component({
            selector: 'app-file-downloader',
            templateUrl: './app/file-downloader/file-downloader.component.html',
            styleUrls: ['./app/file-downloader/file-downloader.component.css'],
        }), 
        __metadata('design:paramtypes', [dropbox_api_service_1.DropboxApiService])
    ], FileDownloaderComponent);
    return FileDownloaderComponent;
}());
exports.FileDownloaderComponent = FileDownloaderComponent;
//# sourceMappingURL=file-downloader.component.js.map