import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Tour } from '../../models/tour.model';
import { CurrencyService } from '../../services/currency.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tour-card',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './tour-card.component.html',
  styleUrl: './tour-card.component.scss'
})
export class TourCardComponent implements OnInit, OnDestroy {
  @Input() tour!: Tour;
  formattedPrice: string = '';
  private subscription: Subscription = new Subscription();

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.updateFormattedPrice();

    // Subscribe to currency changes
    this.subscription.add(
      this.currencyService.getCurrentCurrency().subscribe(() => {
        this.updateFormattedPrice();
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private updateFormattedPrice() {
    const convertedPrice = this.currencyService.convertFromINR(this.tour.price, this.currencyService.getCurrentCurrencyValue().code);
    this.formattedPrice = this.currencyService.formatAmount(convertedPrice);
  }
}




