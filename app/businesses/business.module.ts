import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { BusinessListComponent } from './business-list.component';
import { BusinessDetailComponent } from './business-detail.component';
import { BusinessFilterPipe } from './business-filter.pipe';
import { BusinessDetailGuard } from './business-guard.service';
import { BusinessService } from './business.service';

@NgModule({
  declarations: [
     BusinessListComponent,
     BusinessDetailComponent,
     BusinessFilterPipe
  ],
  imports: [
     CommonModule,
     FormsModule,
     HttpModule,
     RouterModule.forChild([
      { path: 'businesses', component: BusinessListComponent },
      { path: 'business/:id',
        canActivate: [ BusinessDetailGuard ],
        component: BusinessDetailComponent },
     ])
  ],
  providers: [
      BusinessService,
      BusinessDetailGuard
  ]
})

export class BusinessModule {
}
