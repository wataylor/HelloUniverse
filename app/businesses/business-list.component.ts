import { Component, OnInit }  from '@angular/core';

/* These imports are relative to the current directory.  The extension
 * .ts is assumed.  To import an interface IBusiness */
import { IBusiness } from './business';

/* URLs are relative to index.html.  styleUrls is an array of URLs. */
@Component({
    selector: 'rt-businesses',
    templateUrl: 'app/businesses/business-list.component.html',
    styleUrls: ['app/businesses/business-list.component.css']
})
export class BusinessListComponent implements OnInit {
    pageTitle: string = 'Business List';
    titleFilter: string;
    descFilter: string;
    errorMessage: string;
    businesses: IBusiness[] = [{"uUID":"BU001","owningBusUnitID":"","modified":"2016-10-13 21:21:30.0","modifiedByID":"USR10","created":0,"createdByID":"USR10","businessUnitParentID":"","businessUnitTitle":"Title","businessUnitDescription":"Description","businessUnitContactID":"USR01"},{"uUID":"BU002","owningBusUnitID":"BU001","modified":"2016-10-22 17:53:11.0","modifiedByID":"USR10","created":0,"createdByID":"USR10","businessUnitParentID":"","businessUnitTitle":"Sub-Unit Title","businessUnitDescription":"Sub-Unit Description","businessUnitContactID":"USR01"}]
    ngOnInit(): void {
      console.log("onInit");
    }
}
