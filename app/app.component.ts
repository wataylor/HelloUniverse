import { Component } from '@angular/core';

import { BusinessService } from './businesses/business.service';

@Component({
    selector: 'rt-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/businesses']">Business List</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
    `,
    providers: [BusinessService]
})
export class AppComponent {
  pageTitle: string = 'Risk Trak Risk Management';
 }
