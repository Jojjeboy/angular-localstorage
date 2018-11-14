import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularNgLocalstorageService } from 'projects/angular-ng-localstorage/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AngularNgLocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
