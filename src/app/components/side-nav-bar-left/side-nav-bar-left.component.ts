import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-side-nav-bar-left',
  templateUrl: './side-nav-bar-left.component.html',
  styleUrls: ['./side-nav-bar-left.component.scss']
})
export class SideNavBarLeftComponent implements OnInit {

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
  constructor(public snackBar: MatSnackBar) {}
  
    ngOnInit() {
    }
  
    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    }

}
