import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, krediKatsayisi: number): number {
    return value+(value*krediKatsayisi/100);
  }

}
