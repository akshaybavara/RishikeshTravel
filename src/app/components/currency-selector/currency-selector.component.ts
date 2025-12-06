import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CurrencyService, Currency } from '../../services/currency.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-currency-selector',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './currency-selector.component.html',
  styleUrl: './currency-selector.component.scss'
})
export class CurrencySelectorComponent implements OnInit, OnDestroy {
  currentCurrency: Currency;
  currencies: Currency[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private currencyService: CurrencyService) {
    this.currentCurrency = this.currencyService.getCurrentCurrencyValue();
  }

  ngOnInit() {
    this.currencies = this.currencyService.getCurrencies();

    // Subscribe to currency changes
    this.subscription.add(
      this.currencyService.getCurrentCurrency().subscribe(currency => {
        this.currentCurrency = currency;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  selectCurrency(currencyCode: string) {
    this.currencyService.setCurrency(currencyCode);
  }

  getCurrencyDisplay(currency: Currency): string {
    return `${currency.flag} ${currency.code}`;
  }
}

