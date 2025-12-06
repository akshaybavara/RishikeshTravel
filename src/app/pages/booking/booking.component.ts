import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BookingFormComponent } from '../../components/booking-form/booking-form.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ToursService } from '../../services/tours.service';
import { CurrencyService } from '../../services/currency.service';
import { Tour } from '../../models/tour.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, MatIconModule, NavbarComponent, BookingFormComponent, FooterComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent implements OnInit, OnDestroy {
  tour: Tour | undefined;
  formattedPrice: string = '';
  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toursService: ToursService,
    private currencyService: CurrencyService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.toursService.getTourById(id).subscribe(tour => {
        if (tour) {
          this.tour = tour;
          this.updateFormattedPrice();
        } else {
          this.router.navigate(['/tours']);
        }
      });
    }

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
    if (this.tour) {
      const convertedPrice = this.currencyService.convertFromINR(this.tour.price, this.currencyService.getCurrentCurrencyValue().code);
      this.formattedPrice = this.currencyService.formatAmount(convertedPrice);
    }
  }
}

