export interface Booking {
  id: string;
  tourId: string;
  tourTitle: string;
  userId: string;
  date: string;
  participants: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  bookingDate: string;
  paymentStatus: 'pending' | 'paid' | 'refunded';
}






