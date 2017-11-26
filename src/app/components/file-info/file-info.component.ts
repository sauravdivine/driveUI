import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../store/IAppState';
import { FileActions } from '../../service/file.actions.service';
import { Observable } from 'rxjs/Observable';
import { FileInfo } from '../../model/file-info';

@Component({
  selector: 'app-file-info',
  templateUrl: './file-info.component.html',
  styleUrls: ['./file-info.component.scss']
})
export class FileInfoComponent implements OnInit {

  @select() files$: Observable<FileInfo[]>;
  @select() selectedFileId$: Observable<number>;
  files: FileInfo[];
  selectedFile: FileInfo;

  constructor(private ngRedux: NgRedux<IAppState>, private fileActions: FileActions) { }

  ngOnInit() {
    this.files$.subscribe(files => {
      this.files = files;
    });
    this.selectedFileId$.subscribe(id => {
      if (id == 0) {
        this.selectedFile = new FileInfo();
        this.selectedFile.id = 0;
        this.selectedFile.name = "My Drive";
      }
      else {
        this.selectedFile = this.files.filter(fileInfo => fileInfo.id == id)[0];
      }

    });
  }

}
