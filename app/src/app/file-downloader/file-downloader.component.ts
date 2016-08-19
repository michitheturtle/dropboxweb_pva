import {Component, OnInit, provide, Input} from '@angular/core';
import {CustomBrowserXhr} from "../CustomBrowserXhr";
import {
  Http, Headers, BrowserXhr, RequestOptions, Request, XHRConnection, Response, ResponseType,
  RequestMethod, ResponseContentType
} from "@angular/http";
import filesaver = require('filesaver');
import {DropboxApiService} from "../dropbox-api.service";
import {Dropboxfile} from "../dropboxfile";

@Component({
  selector: 'app-file-downloader',
  templateUrl: './app/file-downloader/file-downloader.component.html',
  styleUrls: ['./app/file-downloader/file-downloader.component.css'],
  //providers: [ {provide: BrowserXhr, useClass: CustomBrowserXhr}]
})
export class FileDownloaderComponent implements OnInit {

  @Input() file: Dropboxfile;

  constructor(private service: DropboxApiService) {}

  ngOnInit() {

  }

  downloadFile(){

    this.service.downloadFile(this.file).subscribe(
      response => {
        filesaver.saveAs(response, this.file.name);
      }
    );

  }




}
