import { Component, OnInit }  from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

/* These imports are relative to the current directory.  The extension
 * .ts is assumed because of a declaration in index.html. */
import { IBusiness } from './business';
import { BusinessService } from './business.service';

/* URLs are relative to index.html.  styleUrls is an array of URLs.
 * The template has a *ngIf='business in the outer div to suppress
 * generation until the business has been read.  */
@Component({
    templateUrl: 'app/businesses/business-detail.component.html',
    styleUrls: ['app/businesses/business-detail.component.css']
})
export class BusinessDetailComponent implements OnInit {
    pageTitle: string = 'Business Detail';
    business: IBusiness;
    errorMessage: string;
    active: boolean = true;
    submitted:boolean = false;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _businessService: BusinessService) {}

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
	      let id: string = params['id'];
                this.getBusiness(id);
                this.pageTitle += `: ${id}`;
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getBusiness(id: string) {
        this._businessService.getBusiness(id).subscribe(
            business => this.business = business,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/businesses']);
    }

    onSubmit(): void {
        this.submitted = true;
    }

    /* The form has a *ngIf on active.  Setting active false and then
     * true again removes the form from the DOM and makes a new one
     * with all variables in the pristine state.*/
    newBusiness(): void {
    // this.business = new IBusiness();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
