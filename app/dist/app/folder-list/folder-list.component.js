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
var dropbox_api_service_1 = require("../dropbox-api.service");
var filesaver = require('filesaver');
var file_downloader_component_1 = require("../file-downloader/file-downloader.component");
var FolderListComponent = (function () {
    function FolderListComponent(service) {
        this.service = service;
        this.loading = false;
        this.isOpened = false;
    }
    FolderListComponent.prototype.ngOnInit = function () {
        if (this.loadOnInit)
            //this.loaddata();
            this.toggle();
    };
    FolderListComponent.prototype.ngOnDestroy = function () {
        this.folderList = null;
        this.fileList = null;
    };
    FolderListComponent.prototype.toggle = function () {
        this.isOpened = !this.isOpened;
        if (!this.folderList || !this.fileList)
            this.loaddata();
    };
    FolderListComponent.prototype.loaddata = function () {
        var _this = this;
        this.folderList = [];
        this.loading = true;
        this.service.getFiles(this.forFolder).subscribe(function (result) {
            var list = result.json().entries;
            if (!list)
                return;
            _this.fileList = list.filter(function (x) { return x.size > 0; }).sort(function (n1, n2) {
                if (n1.name > n2.name) {
                    return 1;
                }
                if (n1.name < n2.name) {
                    return -1;
                }
                return 0;
            });
            _this.folderList = list.filter(function (x) { return x.size == null; }).sort(function (n1, n2) {
                if (n1.name > n2.name) {
                    return 1;
                }
                if (n1.name < n2.name) {
                    return -1;
                }
                return 0;
            });
            _this.loading = false;
        });
    };
    FolderListComponent.prototype.download = function (item) {
        var _this = this;
        this.service.download(item).subscribe(function (result) {
            _this.processDownload(item.name, result);
        });
    };
    ;
    FolderListComponent.prototype.processDownload = function (name, data) {
        var blob = new Blob([data.text()], { type: 'charset=utf-8,%EF%BB%BF' });
        filesaver.saveAs(blob, name);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FolderListComponent.prototype, "forFolder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], FolderListComponent.prototype, "loadOnInit", void 0);
    FolderListComponent = __decorate([
        core_1.Component({
            selector: 'app-folder-list',
            templateUrl: './app/folder-list/folder-list.component.html',
            styleUrls: ['./app/folder-list/folder-list.component.css'],
            directives: [FolderListComponent, file_downloader_component_1.FileDownloaderComponent]
        }), 
        __metadata('design:paramtypes', [dropbox_api_service_1.DropboxApiService])
    ], FolderListComponent);
    return FolderListComponent;
}());
exports.FolderListComponent = FolderListComponent;
//# sourceMappingURL=folder-list.component.js.map