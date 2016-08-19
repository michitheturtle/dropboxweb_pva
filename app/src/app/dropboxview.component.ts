import {Component, OnInit} from '@angular/core';
import {Dropboxfile} from "./dropboxfile";
import {DropboxApiService} from "./dropbox-api.service";
import {FolderListComponent} from "./folder-list/folder-list.component";

@Component({
  selector: 'dropboxview-app',
  templateUrl: './app/dropboxview.component.html',
  styleUrls: ['./app/dropboxview.component.css'],
  providers: [DropboxApiService],
  directives: [FolderListComponent]
})
export class DropboxviewAppComponent implements OnInit{
  title = 'PvA Downloads';

  datalist:Dropboxfile[];

  constructor(private service: DropboxApiService){

  }

  ngOnInit(){



    /* this.service.getFiles("/Sabine").subscribe(result => {
       this.folderList = <Dropboxfile[]>result.json().entries
    });*/



  }
}
