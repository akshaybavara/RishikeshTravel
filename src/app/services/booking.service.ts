import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookings: Booking[] = [
    {
      id: '1',
      tourId: '1',
      tourTitle: 'Ganga River Rafting Adventure',
      userId: '1',
      date: '2024-03-15',
      participants: 2,
      totalPrice: 5000,
      status: 'confirmed',
      bookingDate: '2024-02-01',
      paymentStatus: 'paid'
    },
    {
      id: '2',
      tourId: '3',
      tourTitle: 'Yoga & Meditation Retreat',
      userId: '1',
      date: '2024-04-10',
      participants: 1,
      totalPrice: 4500,
      status: 'pending',
      bookingDate: '2024-02-20',
      paymentStatus: 'pending'
    }
  ];

  createBooking(booking: Omit<Booking, 'id' | 'bookingDate'>): Observable<Booking> {
    const newBooking: Booking = {
      ...booking,
      id: Date.now().toString(),
      bookingDate: new Date().toISOString().split('T')[0]
    };
    this.bookings.push(newBooking);
    return of(newBooking);
  }

  getBookingsByUserId(userId: string): Observable<Booking[]> {
    const userBookings = this.bookings.filter(b => b.userId === userId);
    return of(userBookings);
  }

  getBookingById(id: string): Observable<Booking | undefined> {
    const booking = this.bookings.find(b => b.id === id);
    return of(booking);
  }

  cancelBooking(id: string): Observable<boolean> {
    const booking = this.bookings.find(b => b.id === id);
    if (booking) {
      booking.status = 'cancelled';
      return of(true);
    }
    return of(false);
  }
}






