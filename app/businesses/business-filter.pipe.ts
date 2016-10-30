import {  PipeTransform, Pipe } from '@angular/core';
import { IBusiness } from './business';

@Pipe({
    name: 'businessFilter'
})
/* The transform method converts the input to the output.  This pipe
 * gets the entire list as its first input followed by args which are
 * passed, and transforms it to a list, either the original list or a
 * list filtered using the Java Script filter method.  Arguments are
 * separated by colons.  If one of the argument is an array, the array
 * elements are comma-separated.  All pipes do this.

 * It also has to be declared in the Declarations array of the angular
 * module. In this case, it is app.module.ts. */
export class BusinessFilterPipe implements PipeTransform {

  transform(value: IBusiness[], args: string[]): IBusiness[] {
        let tFilter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        let dFilter: string = args[1] ? args[1].toLocaleLowerCase() : null;
        return (tFilter || dFilter) ? value.filter((business: IBusiness) =>
            ((!tFilter || business.businessUnitTitle.toLocaleLowerCase().indexOf(tFilter) !== -1) &&
             (!dFilter || business.businessUnitDescription.toLocaleLowerCase().indexOf(dFilter) !== -1))) : value;
    }
}
