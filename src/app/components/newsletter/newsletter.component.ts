import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss'
})
export class NewsletterComponent {
  email = '';
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  subscribe() {
    if (!this.email.trim()) {
      this.errorMessage = 'Please enter an email address';
      setTimeout(() => this.errorMessage = '', 3000);
      return;
    }

    if (!this.isValidEmail(this.email)) {
      this.errorMessage = 'Please enter a valid email address';
      setTimeout(() => this.errorMessage = '', 3000);
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    // Simulate API call
    setTimeout(() => {
      this.isSubmitting = false;
      this.successMessage = `Thank you for subscribing! We'll send updates to ${this.email}`;
      this.email = '';

      // Clear success message after 5 seconds
      setTimeout(() => {
        this.successMessage = '';
      }, 5000);
    }, 1500);
  }
}




