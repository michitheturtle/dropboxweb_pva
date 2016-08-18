import {Injectable, OnInit, provide} from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestMethod,ResponseContentType}  from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Dropboxfile} from "./dropboxfile";
import {PromiseObservable} from "rxjs/observable/PromiseObservable";
import {CustomBrowserXhr} from "./CustomBrowserXhr";
import {environment} from "./environment";

@Injectable()
export class DropboxApiService {


  api_list_folder: string = "https://api.dropboxapi.com/2/files/list_folder";
  api_download: string = "https://content.dropboxapi.com/2/files/download";
  token: string = "4xSPY4ZBCIcAAAAAAAADy4-QvAuCWhHEtEGalxoZxjwZr5oUZsoFDE3xubxODn85";
  cursor: string = "";
  hasmore:Boolean = false;
  files: Dropboxfile[] = [];

  constructor(private http : Http) {}

  private getByCursor(){

    let options = this.getHeader();

    options.body = {cursor: this.cursor};

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

  }

  private getByFolderName(){

    let options = this.getHeader();

    options.body = {path: "/Sabine", recursive:true};

    return this.http.request(this.api_list_folder, options).map(r => {return  r;});

  }

  getFiles (forFolder: string)  {

    let options = this.getHeader();

    options.body = {path: forFolder};

    return this.http.request(this.api_list_folder, options).map(r => {return  r;});
  };

  download(file: Dropboxfile){

    let options = this.getHeader();
    options.headers.delete("Content-Type");

    //options.body = {path: file.path_lower};

    let api_arg = {path: file.path_lower};

    //Dropbox-API-Arg: {"path":""}
    //header.append("Content-Type", "application/json");
    options.headers.append("Dropbox-API-Arg", JSON.stringify(api_arg) );



    return this.http.request(this.api_download, options).map(r => {return r;});
  }

  downloadFile(file: Dropboxfile) {

    let api_arg = {path: file.id};

    //header
    var options = this.getHeader();
    options.headers.delete("Content-Type");
    options.headers.append("Dropbox-API-Arg", JSON.stringify(api_arg));

    options.responseType = ResponseContentType.Blob;

    return this.http.post(this.api_download, null, options).map(response => {return response.blob()});
  }

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



private getHeader(): RequestOptions{
  let options = new RequestOptions();
  options.method = RequestMethod.Post;


  let header = new Headers();
  header.append('Authorization', 'Bearer ' + environment.api_token);
  header.append("Content-Type", "application/json");

  options.headers = header;

  return options;
}

}
