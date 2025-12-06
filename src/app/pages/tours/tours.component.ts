import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TourCardComponent } from '../../components/tour-card/tour-card.component';
import { FilterSidebarComponent } from '../../components/filter-sidebar/filter-sidebar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ToursService } from '../../services/tours.service';
import { Tour } from '../../models/tour.model';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatPaginatorModule,
    MatIconModule,
    ScrollAnimationDirective,
    NavbarComponent,
    TourCardComponent,
    FilterSidebarComponent,
    FooterComponent
  ],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.scss'
})
export class ToursComponent implements OnInit {
  allTours: Tour[] = [];
  filteredTours: Tour[] = [];
  displayedTours: Tour[] = [];
  
  pageSize = 9;
  pageIndex = 0;
  pageSizeOptions = [9, 18, 27];

  constructor(
    private toursService: ToursService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.toursService.listTours().subscribe(tours => {
      this.allTours = tours;
      this.filteredTours = tours;
      this.updateDisplayedTours();

      // Check for category filter from query params
      this.route.queryParams.subscribe(params => {
        if (params['category']) {
          this.applyCategoryFilter(params['category']);
        }
      });
    });
  }

  onFiltersChanged(filters: any) {
    this.filteredTours = this.allTours.filter(tour => {
      // Price filter
      if (tour.price < filters.priceRange[0] || tour.price > filters.priceRange[1]) {
        return false;
      }

      // Rating filter
      if (tour.rating < filters.rating) {
        return false;
      }

      // Category filter
      if (filters.category.length > 0 && !filters.category.includes(tour.category)) {
        return false;
      }

      // Duration filter (simplified)
      if (filters.duration.length > 0) {
        // This is a simplified check - in real app, parse duration properly
        const matchesDuration = filters.duration.some((d: string) => 
          tour.duration.toLowerCase().includes(d.toLowerCase())
        );
        if (!matchesDuration) {
          return false;
        }
      }

      return true;
    });

    this.pageIndex = 0;
    this.updateDisplayedTours();
  }

  applyCategoryFilter(category: string) {
    this.filteredTours = this.allTours.filter(t => t.category === category);
    this.updateDisplayedTours();
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateDisplayedTours();
  }

  private updateDisplayedTours() {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.displayedTours = this.filteredTours.slice(start, end);
  }
}

