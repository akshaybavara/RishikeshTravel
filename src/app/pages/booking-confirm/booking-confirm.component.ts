import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/booking.model';

@Component({
  selector: 'app-booking-confirm',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './booking-confirm.component.html',
  styleUrl: './booking-confirm.component.scss'
})
export class BookingConfirmComponent implements OnInit {
  booking: Booking | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.queryParamMap.get('id');
    if (id) {
      this.bookingService.getBookingById(id).subscribe(booking => {
        if (booking) {
          this.booking = booking;
        } else {
          this.router.navigate(['/tours']);
        }
      });
    }
  }
}









