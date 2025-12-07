import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AuthService } from '../../services/auth.service';
import { BookingService } from '../../services/booking.service';
import { User } from '../../models/user.model';
import { Booking } from '../../models/booking.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  user: User | null = null;
  bookings: Booking[] = [];
  upcomingBookings: Booking[] = [];
  pastBookings: Booking[] = [];
  profileForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private bookingService: BookingService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    if (this.user) {
      this.loadBookings();
      this.initProfileForm();
    }
  }

  loadBookings() {
    if (this.user) {
      this.bookingService.getBookingsByUserId(this.user.id).subscribe(bookings => {
        this.bookings = bookings;
        const today = new Date().toISOString().split('T')[0];
        this.upcomingBookings = bookings.filter(b => b.date >= today && b.status !== 'cancelled');
        this.pastBookings = bookings.filter(b => b.date < today || b.status === 'completed');
      });
    }
  }

  initProfileForm() {
    if (this.user) {
      this.profileForm = this.fb.group({
        name: [this.user.name, Validators.required],
        email: [this.user.email, [Validators.required, Validators.email]],
        phone: [this.user.phone, Validators.required]
      });
    }
  }

  updateProfile() {
    if (this.profileForm.valid && this.user) {
      // In real app, update via API
      alert('Profile updated successfully!');
    }
  }

  cancelBooking(id: string) {
    if (confirm('Are you sure you want to cancel this booking?')) {
      this.bookingService.cancelBooking(id).subscribe(() => {
        this.loadBookings();
      });
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'confirmed': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'cancelled': return 'text-red-600 bg-red-100';
      case 'completed': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  }
}









