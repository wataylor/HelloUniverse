import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

/* Paths are relative to where this file is found. */
import { AppComponent }  from './app.component';
import { WelcomeComponent }  from './home/welcome.component';

import { BusinessModule } from './businesses/business.module';

@NgModule({
  imports: [ BrowserModule, HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    BusinessModule
  ],
  declarations: [ AppComponent,
     WelcomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
