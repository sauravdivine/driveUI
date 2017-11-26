import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgReduxModule, NgRedux } from 'ng2-redux';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatGridListModule,
  MatListModule,
  MatTableModule,
  MatCardModule,
  MatMenuModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTabsModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContentTableComponent } from './components/content-table/content-table.component';
import { SideNavBarLeftComponent } from './components/side-nav-bar-left/side-nav-bar-left.component';
import { SpaceUsedComponent } from './components/space-used/space-used.component';
import { IAppState } from './store/IAppState';
import { store } from './store/store';
import { FileServices } from './service/file.services';
import { FileActions } from './service/file.actions.service';
import { FileInfoComponent } from './components/file-info/file-info.component';
import { ChangeThemeService } from 'app/service/change-theme.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    ContentTableComponent,
    SideNavBarLeftComponent,
    SpaceUsedComponent,
    FileInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    MatTableModule, 
    MatCardModule,
    MatMenuModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTabsModule
  ],
  providers: [FileServices,FileActions,ChangeThemeService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(NgRedux: NgRedux<IAppState>) {
    NgRedux.provideStore(store);
  }
 }
