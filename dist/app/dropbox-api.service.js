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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var environment_1 = require("./environment");
var DropboxApiService = (function () {
    function DropboxApiService(http) {
        this.http = http;
        this.api_list_folder = "https://api.dropboxapi.com/2/files/list_folder";
        this.api_download = "https://content.dropboxapi.com/2/files/download";
        this.token = "4xSPY4ZBCIcAAAAAAAADy4-QvAuCWhHEtEGalxoZxjwZr5oUZsoFDE3xubxODn85";
        this.cursor = "";
        this.hasmore = false;
        this.files = [];
    }
    DropboxApiService.prototype.getByCursor = function () {
        var options = this.getHeader();
        options.body = { cursor: this.cursor };
        // this.http.request(this.api_list_folder + "/continue", options).flatMap
        ///COPY
        /* this.http.request(this.api_list_folder + "/continue", options).map(
           val => {
             this.files.concat(<Dropboxfile[]>val.json().entries);
             this.hasmore = val.json().has_more;
             this.cursor = val.json().cursor;
     
             if(this.hasmore){
               this.getByCursor();
             }
             else{
               return this.files;
             }
           });*/
    };
    DropboxApiService.prototype.getByFolderName = function () {
        var options = this.getHeader();
        options.body = { path: "/Sabine", recursive: true };
        return this.http.request(this.api_list_folder, options).map(function (r) { return r; });
    };
    DropboxApiService.prototype.getFiles = function (forFolder) {
        var options = this.getHeader();
        options.body = { path: forFolder };
        return this.http.request(this.api_list_folder, options).map(function (r) { return r; });
    };
    ;
    DropboxApiService.prototype.download = function (file) {
        var options = this.getHeader();
        options.headers.delete("Content-Type");
        //options.body = {path: file.path_lower};
        var api_arg = { path: file.path_lower };
        //Dropbox-API-Arg: {"path":""}
        //header.append("Content-Type", "application/json");
        options.headers.append("Dropbox-API-Arg", JSON.stringify(api_arg));
        return this.http.request(this.api_download, options).map(function (r) { return r; });
    };
    DropboxApiService.prototype.downloadFile = function (file) {
        var api_arg = { path: file.id };
        //header
        var options = this.getHeader();
        options.headers.delete("Content-Type");
        options.headers.append("Dropbox-API-Arg", JSON.stringify(api_arg));
        options.responseType = http_1.ResponseContentType.Blob;
        return this.http.post(this.api_download, null, options).map(function (response) { return response.blob(); });
    };
    /*testfunktion(){
  
  
      this.getFiles('/Sabine').subscribe(r => {
  
  
        let options = this.getHeader();
  
        //options.body = {path: forFolder};
  
        let callAndMap = (cursr) => this.http.post(this.api_list_folder, {cursor: cursr}, options).map(res => {
          this.cursor = res.json().cursor;
          this.hasmore = res.json().has_more;
          this.files.concat(<Dropboxfile[]>res.json().entries);
        })
        //let callAndMap = (pageNo) => call({page: pageNo}).map(res => {page: pageNo, data: res.json()});  // map, and save the page number for recursion later.
  
        callAndMap(r.json().cursor)
          .expand(obj => {(obj.json().has_more ? callAndMap(obj.json().cursor) : null)})
          .map(obj => {
            this.files.concat(<Dropboxfile[]>obj.json().entries);
          })    // uncomment this line if you need to map back to original response json
          .subscribe(callback);
  
  
      });
  
    }*/
    DropboxApiService.prototype.getHeader = function () {
        var options = new http_1.RequestOptions();
        options.method = http_1.RequestMethod.Post;
        var header = new http_1.Headers();
        header.append('Authorization', 'Bearer ' + environment_1.environment.api_token);
        header.append("Content-Type", "application/json");
        options.headers = header;
        return options;
    };
    DropboxApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DropboxApiService);
    return DropboxApiService;
}());
exports.DropboxApiService = DropboxApiService;
//# sourceMappingURL=dropbox-api.service.js.map