import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { SortByDatePipe } from './pipes/sortByDate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SortByDatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
