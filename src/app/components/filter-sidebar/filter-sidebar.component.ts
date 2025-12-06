import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSliderModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './filter-sidebar.component.html',
  styleUrl: './filter-sidebar.component.scss'
})
export class FilterSidebarComponent {
  @Output() filtersChanged = new EventEmitter<any>();

  filters = {
    priceRange: [0, 10000],
    duration: [] as string[],
    category: [] as string[],
    rating: 0
  };

  durations = ['1 hour', '3 hours', '1 day', '2 days', '3 days', '4+ days'];
  categories = ['rafting', 'camping', 'yoga', 'aarti', 'trekking', 'adventure'];
  selectedDurations: { [key: string]: boolean } = {};
  selectedCategories: { [key: string]: boolean } = {};

  applyFilters() {
    // Convert selected checkboxes to arrays
    this.filters.duration = Object.keys(this.selectedDurations).filter(key => this.selectedDurations[key]);
    this.filters.category = Object.keys(this.selectedCategories).filter(key => this.selectedCategories[key]);
    this.filtersChanged.emit(this.filters);
  }

  resetFilters() {
    this.filters = {
      priceRange: [0, 10000],
      duration: [],
      category: [],
      rating: 0
    };
    this.selectedDurations = {};
    this.selectedCategories = {};
    this.applyFilters();
  }

  formatPrice(value: number): string {
    return `₹${value}`;
  }

  onDurationChange(duration: string, checked: boolean) {
    this.selectedDurations[duration] = checked;
    this.applyFilters();
  }

  onCategoryChange(category: string, checked: boolean) {
    this.selectedCategories[category] = checked;
    this.applyFilters();
  }
}

