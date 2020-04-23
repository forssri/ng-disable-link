import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgDisableLinkModule } from 'ng-disable-link';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgDisableLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
