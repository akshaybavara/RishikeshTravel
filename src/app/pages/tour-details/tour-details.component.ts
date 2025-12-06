import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ImageSliderComponent } from '../../components/image-slider/image-slider.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ToursService } from '../../services/tours.service';
import { TestimonialsService } from '../../services/testimonials.service';
import { CurrencyService } from '../../services/currency.service';
import { Tour } from '../../models/tour.model';
import { Testimonial } from '../../models/testimonial.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tour-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    NavbarComponent,
    ImageSliderComponent,
    FooterComponent
  ],
  templateUrl: './tour-details.component.html',
  styleUrl: './tour-details.component.scss'
})
export class TourDetailsComponent implements OnInit, OnDestroy {
  tour: Tour | undefined;
  reviews: Testimonial[] = [];
  formattedPrice: string = '';
  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toursService: ToursService,
    private testimonialsService: TestimonialsService,
    private currencyService: CurrencyService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.toursService.getTourById(id).subscribe(tour => {
        if (tour) {
          this.tour = tour;
          this.updateFormattedPrice();
          this.testimonialsService.getTestimonialsByTour(tour.title).subscribe(reviews => {
            this.reviews = reviews;
          });
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

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  shareTour() {
    if (navigator.share && this.tour) {
      navigator.share({
        title: this.tour.title,
        text: this.tour.description,
        url: window.location.href
      });
    }
  }
}




