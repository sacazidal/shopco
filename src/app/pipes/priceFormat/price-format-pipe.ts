import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat',
})
export class PriceFormatPipe implements PipeTransform {
  transform(value: number | string): string | number | null {
    if (!value) return null;

    const num = typeof value === 'string' ? Number(value) : value;
    if (isNaN(num)) return null;

    return num % 1 === 0 ? `$${num}` : `$${num.toFixed(2)}`;
  }
}
