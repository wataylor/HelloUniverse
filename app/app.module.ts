import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

/* Paths are relative to where this file is found. */
import { AppComponent }  from './app.component';
import { WelcomeComponent }  from './home/welcome.component';

import { BusinessListComponent }  from './businesses/business-list.component';
import { BusinessDetailComponent }  from './businesses/business-detail.component';
import { BusinessDetailGuard }  from './businesses/business-guard.service';
import { BusinessFilterPipe }  from './businesses/business-filter.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot([
      { path: 'businesses', component: BusinessListComponent },
      { path: 'business/:id',
        canActivate: [ BusinessDetailGuard ],
        component: BusinessDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
  ],
  providers: [ BusinessDetailGuard ],
  declarations: [ AppComponent,
     WelcomeComponent,
     BusinessListComponent,
     BusinessDetailComponent,
     BusinessFilterPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
