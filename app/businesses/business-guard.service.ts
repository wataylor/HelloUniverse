import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class BusinessDetailGuard implements CanActivate {

    constructor(private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id: string = route.url[1].path;
        /* The route pattern will not matach unless there is an ID, so
	 * the ID cannot be null.  It is, however, good practice to
	 * make usre there is a string before checking its length. */
      if (!id || (id.length <= 3)) {
            alert('Invalid business ID');
            // start a new navigation to redirect to list page
            this._router.navigate(['/businesses']);
            // abort current navigation
            return false;
        };
        return true;
    }
}
