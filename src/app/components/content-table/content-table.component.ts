import { Component, OnInit, OnChanges } from '@angular/core';
import { select, NgRedux } from 'ng2-redux';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { store } from '../../store/store';
import { IAppState } from '../../store/IAppState';
import { FileInfo } from '../../model/file-info';
import { FileActions } from '../../service/file.actions.service';

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.scss']
})
export class ContentTableComponent implements OnInit, OnChanges {
  @select() files$: Observable<FileInfo[]>;
  @select() selectedFileId$ : Observable<number>;
  displayedColumns = ['name', 'owner', 'last_modified', 'size'];
  dataSource: ExampleDataSource | null;

  //selectedFileId: number = -1;

  constructor(private ngRedux: NgRedux<IAppState>, private fileActions: FileActions) { }

  ngOnChanges() {
    console.log("on change files => " + this.files$);
  }

  ngOnInit() {
    this.files$.subscribe(files => {
      console.log("subscribed  => " + files)
      this.dataSource = new ExampleDataSource(files);
    });

  }

  select(row) {
    // this.selectedFileId = row.id;
    this.fileActions.updateSelection(row.id);
  }

}

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  constructor(private files) {
    super();
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<any[]> {
    console.log("files => " + this.files);
    return Observable.of(this.files);
  }

  disconnect() { }
}
