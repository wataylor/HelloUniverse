import { Component, OnInit }  from '@angular/core';

/* These imports are relative to the current directory.  The extension
 * .ts is assumed.  To import an interface IBusiness */
import { IBusiness } from './business';
import { BusinessService } from './business.service';

/* URLs are relative to index.html.  styleUrls is an array of URLs.
 * No selector is needed because this component is displayed via a
 * route. */
@Component({
    templateUrl: 'app/businesses/business-list.component.html',
    styleUrls: ['app/businesses/business-list.component.css']
})
export class BusinessListComponent implements OnInit {
    pageTitle: string = 'Business List';
    titleFilter: string;
    descFilter: string;
    errorMessage: string;
    businesses: IBusiness[];

    constructor(private _businessService: BusinessService) {}

    ngOnInit(): void {
      this._businessService.getBusinesses()
        .subscribe(
           businesses => this.businesses = businesses,
           error => this.errorMessage = <any>error
         );
    }
}
