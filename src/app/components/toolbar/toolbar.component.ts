import { Component, OnInit } from '@angular/core';
import { FileActions } from '../../service/file.actions.service';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../store/IAppState';
import { Observable } from 'rxjs/Observable';
import { ChangeThemeService } from 'app/service/change-theme.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @select() selectedFileId$: Observable<number>;

  constructor(private ngRedux: NgRedux<IAppState>, private fileActions: FileActions, private changeThemeService: ChangeThemeService) { }

  ngOnInit() {
  }

  changeTheme(theme: string) {
    this.changeThemeService.sendMessage(theme);
  }

  addFile() {
    console.log("clicked on new text file");
    this.fileActions.addFile();
  }

  deleteFile(id) {
    console.log("clicked on new text file");
    this.fileActions.deleteFile();
  }

  toggleInfoPanel() {
    this.fileActions.toggleInfoPanel();
  }
}
