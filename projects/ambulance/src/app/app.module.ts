import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OwnComponent } from './own.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, OwnComponent]
})
export class AppModule { }
