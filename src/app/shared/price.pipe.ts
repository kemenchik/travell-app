import {Pipe, PipeTransform} from "@angular/core";
import {DecimalPipe} from "@angular/common";

@Pipe({
  name: 'price'
})

export class PricePipe implements PipeTransform {
  constructor(private decimalPipe: DecimalPipe) {}
  transform(value: number, format: string = '1.0-0') {
    return this.decimalPipe.transform(value, format)?.replace(",", " ");
  }
}

