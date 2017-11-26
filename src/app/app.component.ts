import { Component } from '@angular/core';
import { ChangeThemeService } from 'app/service/change-theme.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
// import { OverlayContainer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy { 
  theme = 'blue-theme';
  subscription: Subscription;
  constructor(private changeThemeService: ChangeThemeService) {
    this.subscription = this.changeThemeService.getMessage().subscribe(message => { this.theme = message; });
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
