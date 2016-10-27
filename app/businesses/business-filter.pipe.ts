import {  PipeTransform, Pipe } from '@angular/core';
import { IBusiness } from './business';

@Pipe({
    name: 'businessFilter'
})
export class BusinessFilterPipe implements PipeTransform {

  transform(value: IBusiness[], args: string[]): IBusiness[] {
        let tFilter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        let dFilter: string = args[1] ? args[1].toLocaleLowerCase() : null;
        return (tFilter || dFilter) ? value.filter((business: IBusiness) =>
            ((!tFilter || business.businessUnitTitle.toLocaleLowerCase().indexOf(tFilter) !== -1) &&
             (!dFilter || business.businessUnitDescription.toLocaleLowerCase().indexOf(dFilter) !== -1))) : value;
    }
}
