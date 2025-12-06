import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { BookingService } from '../../services/booking.service';
import { AuthService } from '../../services/auth.service';
import { Tour } from '../../models/tour.model';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.scss'
})
export class BookingFormComponent implements OnInit {
  @Input() tour!: Tour;
  bookingForm!: FormGroup;
  totalPrice = 0;
  minDate = new Date();

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.bookingForm = this.fb.group({
      date: ['', Validators.required],
      participants: [1, [Validators.required, Validators.min(1), Validators.max(20)]],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      specialRequests: ['']
    });

    // Calculate total price when participants change
    this.bookingForm.get('participants')?.valueChanges.subscribe(participants => {
      this.totalPrice = this.tour.price * participants;
    });

    // Set initial total
    this.totalPrice = this.tour.price;
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      const user = this.authService.getCurrentUser();
      if (!user) {
        this.router.navigate(['/auth/login']);
        return;
      }

      const bookingData = {
        tourId: this.tour.id,
        tourTitle: this.tour.title,
        userId: user.id,
        date: this.bookingForm.value.date.toISOString().split('T')[0],
        participants: this.bookingForm.value.participants,
        totalPrice: this.totalPrice,
        status: 'pending' as const,
        paymentStatus: 'pending' as const
      };

      this.bookingService.createBooking(bookingData).subscribe(booking => {
        this.router.navigate(['/booking/confirm'], { queryParams: { id: booking.id } });
      });
    }
  }
}

