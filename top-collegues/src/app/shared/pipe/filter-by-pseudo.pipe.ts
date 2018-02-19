import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../domain/collegue';

@Pipe({ name: 'filterByPseudo' })
export class FilterByPseudoPipe implements PipeTransform {

  transform(value:Collegue[], arg:string): Collegue[] {
    if(arg != "") {
      return value.filter(collegue => collegue.pseudo.toLowerCase().startsWith(arg.toLowerCase()))
    }
    return value;
  }
}