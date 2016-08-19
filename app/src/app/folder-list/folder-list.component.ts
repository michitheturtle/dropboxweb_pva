import {Component, OnInit, Input, OnDestroy, provide} from '@angular/core';
import {DropboxApiService} from "../dropbox-api.service";
import {Dropboxfile} from "../dropboxfile";
import {Response} from "@angular/http";
import filesaver = require('filesaver');
import {FileDownloaderComponent} from "../file-downloader/file-downloader.component";


@Component({
  selector: 'app-folder-list',
  templateUrl: './app/folder-list/folder-list.component.html',
  styleUrls: ['./app/folder-list/folder-list.component.css'],
  directives: [FolderListComponent, FileDownloaderComponent]
})
export class FolderListComponent implements OnInit, OnDestroy  {

  @Input() forFolder: string;
  @Input() loadOnInit: boolean;

  loading: boolean = false;
  isOpened: boolean = false;
  folderList: Dropboxfile[];
  fileList: Dropboxfile[];

  constructor(private service: DropboxApiService) {}

  ngOnInit() {

    if(this.loadOnInit)
      //this.loaddata();
      this.toggle();
  }
  ngOnDestroy(){
    this.folderList = null;
    this.fileList = null;
  }

  toggle(){
    this.isOpened = !this.isOpened;

    if(!this.folderList || !this.fileList)
      this.loaddata();
  }

  loaddata() {
    this.folderList = [];

    this.loading = true;

    this.service.getFiles(this.forFolder).subscribe(result => {
      let list = <Dropboxfile[]>result.json().entries;

      if(!list)
        return;

      this.fileList = list.filter(x => x.size > 0 ).sort((n1, n2) => {
        if (n1.name > n2.name) {
          return 1;
        }

        if (n1.name < n2.name) {
          return -1;
        }

        return 0;
      });

      this.folderList = list.filter(x => x.size == null ).sort((n1, n2) => {
        if (n1.name > n2.name) {
          return 1;
        }

        if (n1.name < n2.name) {
          return -1;
        }

        return 0;
      });

      this.loading = false;
    });
  }

  download(item: Dropboxfile){

    this.service.download(item).subscribe(result => {
      this.processDownload(item.name, result);
    })
  };

  processDownload(name:string, data: Response){

    var blob = new Blob([data.text()], {type: 'charset=utf-8,%EF%BB%BF'});

    filesaver.saveAs(blob, name);

  }

}
