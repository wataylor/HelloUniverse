import {  PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'humanName'
})

/* The transform method converts the input to the output.  This pipe
 * gets a last name followed by the array of name components as an input
 * and produces a human-readable name based on whatever is not null */

export class HumanNamePipe implements PipeTransform {
  transform(ln: string, args: string[]): string {
    return ln;
  }
}
