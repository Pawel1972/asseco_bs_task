import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'customCurrency' })
export class CustomCurrencyPipe implements CustomCurrencyPipe, PipeTransform {
  transform(value: string | null): string {
    
    return value !== null ? value.replace(',', '.') : "";
  }
}