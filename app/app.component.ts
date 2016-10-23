import { Component } from '@angular/core';

@Component({
    selector: 'rt-app',
    template: `
        <div><h1>{{pageTitle}}</h1>
        <rt-businesses></rt-businesses>
        </div>
    `
})
export class AppComponent {
  pageTitle: string = 'Risk Trak Risk Management';
 }
