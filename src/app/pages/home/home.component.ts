import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { TourCardComponent } from '../../components/tour-card/tour-card.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ToursService } from '../../services/tours.service';
import { Tour } from '../../models/tour.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ScrollAnimationDirective,
    NavbarComponent,
    HeroSectionComponent,
    TourCardComponent,
    TestimonialsComponent,
    CtaSectionComponent,
    NewsletterComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  featuredTours: Tour[] = [];
  popularTours: Tour[] = [];

  constructor(private toursService: ToursService) {}

  ngOnInit() {
    this.toursService.listTours().subscribe(tours => {
      this.featuredTours = tours.slice(0, 4);
      this.popularTours = tours.slice(0, 6);
    });
  }

  featuredActivities = [
    {
      title: 'River Rafting',
      icon: 'waves',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400',
      description: 'Thrilling white water adventure'
    },
    {
      title: 'Camping',
      icon: 'camping',
      image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400',
      description: 'Sleep under the stars'
    },
    {
      title: 'Yoga',
      icon: 'self_improvement',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400',
      description: 'Rejuvenate mind & body'
    },
    {
      title: 'Ganga Aarti',
      icon: 'local_fire_department',
      image: 'https://images.unsplash.com/photo-1716573260891-23ad993e8833?w=400',
      description: 'Spiritual evening ceremony'
    }
  ];

  whyChooseUs = [
    {
      icon: 'verified',
      title: 'Certified Guides',
      description: 'All our guides are certified and experienced'
    },
    {
      icon: 'security',
      title: 'Safety First',
      description: 'Top priority on safety and security'
    },
    {
      icon: 'star',
      title: 'Best Prices',
      description: 'Competitive pricing with no hidden costs'
    },
    {
      icon: 'support_agent',
      title: '24/7 Support',
      description: 'Round the clock customer support'
    }
  ];
}

