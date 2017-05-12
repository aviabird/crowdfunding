import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 'name': 'currencySymbol' })
export class CurrencyConverterPipe implements PipeTransform {

    symbols: { [id: string]: string } = {
        'USD': '$',
        'GBP': '£',
        'AUD': 'A$',
        'CAD': 'C$',
        'EUR': '€'
    };

    transform(value: any, args?: any): string {
        if (!this.symbols.hasOwnProperty(value)) { return '$'; }
        return this.symbols[value];
    }
}
