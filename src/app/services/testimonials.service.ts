import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Testimonial } from '../models/testimonial.model';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {
  private testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Priya Sharma',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      rating: 5,
      comment: 'Amazing rafting experience! The guides were professional and safety was their top priority. Highly recommended!',
      tour: 'Ganga River Rafting Adventure',
      date: '2024-01-15'
    },
    {
      id: '2',
      name: 'Rajesh Kumar',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      rating: 5,
      comment: 'The camping experience was unforgettable. Waking up to the Himalayan sunrise was magical. Great service!',
      tour: 'Himalayan Camping Experience',
      date: '2024-01-20'
    },
    {
      id: '3',
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      rating: 5,
      comment: 'The yoga retreat transformed my life. The instructors were knowledgeable and the location was serene. Perfect!',
      tour: 'Yoga & Meditation Retreat',
      date: '2024-02-01'
    },
    {
      id: '4',
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      rating: 5,
      comment: 'Ganga Aarti was a spiritual experience like no other. The atmosphere was divine. Must visit!',
      tour: 'Ganga Aarti Experience',
      date: '2024-02-10'
    },
    {
      id: '5',
      name: 'Anita Desai',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
      rating: 4,
      comment: 'Great trekking adventure! The views were breathtaking and the guide was very helpful throughout.',
      tour: 'Himalayan Trekking Adventure',
      date: '2024-02-15'
    },
    {
      id: '6',
      name: 'David Wilson',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150',
      rating: 5,
      comment: 'The combo package was excellent value for money. We got to experience everything Rishikesh has to offer!',
      tour: 'Adventure Combo Package',
      date: '2024-02-20'
    }
  ];

  getTestimonials(): Observable<Testimonial[]> {
    return of(this.testimonials);
  }

  getTestimonialsByTour(tourTitle: string): Observable<Testimonial[]> {
    const filtered = this.testimonials.filter(t => t.tour === tourTitle);
    return of(filtered);
  }
}








