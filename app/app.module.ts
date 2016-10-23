import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/* Paths are relative to where this file is found. */
import { AppComponent }  from './app.component';
import { BusinessListComponent }  from './businesses/business-list.component';
import { BusinessFilterPipe }  from './businesses/business-filter.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
     BusinessListComponent,
     BusinessFilterPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
