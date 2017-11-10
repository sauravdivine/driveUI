import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-space-used',
  templateUrl: './space-used.component.html',
  styleUrls: ['./space-used.component.scss']
})
export class SpaceUsedComponent implements OnInit {
  value =30;
  constructor() { }

  ngOnInit() {
  }

}
