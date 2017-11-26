import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../store/IAppState';
import { FileActions } from '../../service/file.actions.service';
import { Observable } from 'rxjs/Observable';
import { Command } from '../../model/command';


@Component({
  selector: 'app-side-nav-bar-left',
  templateUrl: './side-nav-bar-left.component.html',
  styleUrls: ['./side-nav-bar-left.component.scss']
})
export class SideNavBarLeftComponent implements OnInit {

  @select() infoPanel$: Observable<boolean>;
  
  active = 0;
  folders = [
    {
      name: 'My Drive',
      icon: 'storage'
    },

    {
      name: 'Shared with me',
      icon: 'supervisor_account'
    }
    ,
    {
      name: 'Recents',
      icon: 'query_builder'
    },
    {
      name: 'Stared',
      icon: 'star_rate'
    },
    {
      name: 'Trash',
      icon: 'delete'
    }
  ];
  constructor(public snackBar: MatSnackBar, private ngRedux: NgRedux<IAppState>, private fileActions: FileActions) { }

  ngOnInit() {
    this.infoPanel$.subscribe(infoPanel => {
      console.log("infoPanel Opened => " + infoPanel);
    });

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
