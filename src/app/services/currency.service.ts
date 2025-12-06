import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Currency {
  code: string;
  name: string;
  symbol: string;
  flag: string;
}

export interface ExchangeRate {
  from: string;
  to: string;
  rate: number;
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private readonly STORAGE_KEY = 'selected_currency';
  private readonly DEFAULT_CURRENCY = 'USD';

  // Available currencies
  private currencies: Currency[] = [
    { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳' },
    { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
    { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', flag: '🇦🇺' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', flag: '🇨🇦' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵' },
    { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', flag: '🇨🇳' },
    { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', flag: '🇸🇬' },
    { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', flag: '🇨🇭' },
    { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM', flag: '🇲🇾' },
    { code: 'THB', name: 'Thai Baht', symbol: '฿', flag: '🇹🇭' },
    { code: 'KRW', name: 'South Korean Won', symbol: '₩', flag: '🇰🇷' },
    { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', flag: '🇧🇷' },
    { code: 'ZAR', name: 'South African Rand', symbol: 'R', flag: '🇿🇦' },
    { code: 'RUB', name: 'Russian Ruble', symbol: '₽', flag: '🇷🇺' },
    { code: 'MXN', name: 'Mexican Peso', symbol: '$', flag: '🇲🇽' },
    { code: 'ARS', name: 'Argentine Peso', symbol: '$', flag: '🇦🇷' },
    { code: 'CLP', name: 'Chilean Peso', symbol: '$', flag: '🇨🇱' },
    { code: 'COP', name: 'Colombian Peso', symbol: '$', flag: '🇨🇴' }
  ];

  // Exchange rates (base: INR) - Updated with realistic rates as of 2024
  private exchangeRates: { [key: string]: number } = {
    'INR': 1,        // Base currency (Indian Rupee)
    'USD': 0.0119,   // 1 INR = 0.0119 USD
    'EUR': 0.0110,   // 1 INR = 0.0110 EUR
    'GBP': 0.0094,   // 1 INR = 0.0094 GBP
    'AUD': 0.0181,   // 1 INR = 0.0181 AUD
    'CAD': 0.0162,   // 1 INR = 0.0162 CAD
    'JPY': 1.75,     // 1 INR = 1.75 JPY
    'CNY': 0.085,    // 1 INR = 0.085 CNY
    'SGD': 0.016,    // 1 INR = 0.016 SGD
    'CHF': 0.0102,   // 1 INR = 0.0102 CHF
    'MYR': 0.056,    // 1 INR = 0.056 MYR
    'THB': 0.42,     // 1 INR = 0.42 THB
    'KRW': 15.7,     // 1 INR = 15.7 KRW
    'BRL': 0.065,    // 1 INR = 0.065 BRL
    'ZAR': 0.22,     // 1 INR = 0.22 ZAR
    'RUB': 1.15,     // 1 INR = 1.15 RUB
    'MXN': 0.21,     // 1 INR = 0.21 MXN
    'ARS': 11.5,     // 1 INR = 11.5 ARS
    'CLP': 11.2,     // 1 INR = 11.2 CLP
    'COP': 49.5      // 1 INR = 49.5 COP
  };

  private currentCurrencySubject = new BehaviorSubject<Currency>(
    this.getCurrencyFromStorage()
  );

  constructor() {
    // Initialize with stored currency or default
    const storedCurrency = localStorage.getItem(this.STORAGE_KEY);
    if (storedCurrency) {
      const currency = this.currencies.find(c => c.code === storedCurrency);
      if (currency) {
        this.currentCurrencySubject.next(currency);
      }
    }
  }

  private getCurrencyFromStorage(): Currency {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      const currency = this.currencies.find(c => c.code === stored);
      if (currency) return currency;
    }
    return this.currencies.find(c => c.code === this.DEFAULT_CURRENCY)!;
  }

  // Get current selected currency as observable
  getCurrentCurrency(): Observable<Currency> {
    return this.currentCurrencySubject.asObservable();
  }

  // Get current selected currency as value
  getCurrentCurrencyValue(): Currency {
    return this.currentCurrencySubject.value;
  }

  // Get all available currencies
  getCurrencies(): Currency[] {
    return this.currencies;
  }

  // Set selected currency
  setCurrency(currencyCode: string): void {
    const currency = this.currencies.find(c => c.code === currencyCode);
    if (currency) {
      this.currentCurrencySubject.next(currency);
      localStorage.setItem(this.STORAGE_KEY, currencyCode);
    }
  }

  // Convert amount from INR to target currency
  convertFromINR(amount: number, targetCurrency: string): number {
    const rate = this.exchangeRates[targetCurrency];
    if (!rate) return amount;
    return Math.round((amount * rate) * 100) / 100;
  }

  // Convert amount to INR from any currency
  convertToINR(amount: number, fromCurrency: string): number {
    const rate = this.exchangeRates[fromCurrency];
    if (!rate) return amount;
    return Math.round((amount / rate) * 100) / 100;
  }

  // Convert amount between any two currencies
  convert(amount: number, fromCurrency: string, toCurrency: string): number {
    if (fromCurrency === toCurrency) return amount;

    // Convert to INR first, then to target currency
    const inrAmount = this.convertToINR(amount, fromCurrency);
    return this.convertFromINR(inrAmount, toCurrency);
  }

  // Format amount with currency symbol
  formatAmount(amount: number, currencyCode?: string): string {
    const currency = currencyCode
      ? this.currencies.find(c => c.code === currencyCode)
      : this.currentCurrencySubject.value;

    if (!currency) return amount.toString();

    // Format based on currency conventions
    let formattedAmount: string;

    switch (currency.code) {
      case 'JPY':
      case 'KRW':
        // No decimal places for these currencies
        formattedAmount = Math.round(amount).toLocaleString();
        break;
      case 'BRL':
      case 'INR':
        // 0 decimal places for these
        formattedAmount = Math.round(amount).toLocaleString();
        break;
      default:
        // 2 decimal places for most currencies
        formattedAmount = amount.toFixed(2);
        break;
    }

    return `${currency.symbol}${formattedAmount}`;
  }

  // Get currency by code
  getCurrencyByCode(code: string): Currency | undefined {
    return this.currencies.find(c => c.code === code);
  }

  // Check if currency exists
  isValidCurrency(code: string): boolean {
    return this.currencies.some(c => c.code === code);
  }

  // Update exchange rates (for future API integration)
  updateExchangeRates(newRates: { [key: string]: number }): void {
    this.exchangeRates = { ...this.exchangeRates, ...newRates };
  }
}

