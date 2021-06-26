import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReplaceUnderscorePipe } from './replace-underscore.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DatePipe,
    ReplaceUnderscorePipe,
    TitleCasePipe,
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
