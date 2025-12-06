import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<any>();

  searchData = {
    keyword: '',
    date: null as Date | null,
    category: ''
  };

  categories = [
    { value: '', label: 'All Categories' },
    { value: 'rafting', label: 'River Rafting' },
    { value: 'camping', label: 'Camping' },
    { value: 'yoga', label: 'Yoga & Meditation' },
    { value: 'aarti', label: 'Ganga Aarti' },
    { value: 'trekking', label: 'Trekking' },
    { value: 'adventure', label: 'Adventure' }
  ];

  onSearch() {
    this.search.emit(this.searchData);
  }
}





