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
var dropbox_api_service_1 = require("./dropbox-api.service");
var folder_list_component_1 = require("./folder-list/folder-list.component");
var DropboxviewAppComponent = (function () {
    function DropboxviewAppComponent(service) {
        this.service = service;
        this.title = 'PvA Downloads';
    }
    DropboxviewAppComponent.prototype.ngOnInit = function () {
        /* this.service.getFiles("/Sabine").subscribe(result => {
           this.folderList = <Dropboxfile[]>result.json().entries
        });*/
    };
    DropboxviewAppComponent = __decorate([
        core_1.Component({
            selector: 'dropboxview-app',
            templateUrl: './app/dropboxview.component.html',
            styleUrls: ['./app/dropboxview.component.css'],
            providers: [dropbox_api_service_1.DropboxApiService],
            directives: [folder_list_component_1.FolderListComponent]
        }), 
        __metadata('design:paramtypes', [dropbox_api_service_1.DropboxApiService])
    ], DropboxviewAppComponent);
    return DropboxviewAppComponent;
}());
exports.DropboxviewAppComponent = DropboxviewAppComponent;
//# sourceMappingURL=dropboxview.component.js.map