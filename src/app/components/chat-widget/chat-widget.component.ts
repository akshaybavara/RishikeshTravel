import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './chat-widget.component.html',
  styleUrl: './chat-widget.component.scss'
})
export class ChatWidgetComponent implements OnInit, OnDestroy {
  isOpen = false;
  isOnline = false;
  statusText = '';
  userCurrency = 'INR'; // Default fallback
  messages: Array<{ text: string; sender: 'user' | 'bot'; time: string }> = [
    {
      text: 'Hello! Welcome to Rishikesh Gateway. How can I help you plan your adventure?',
      sender: 'bot',
      time: this.getCurrentTime()
    }
  ];
  newMessage = '';
  private statusCheckInterval: any;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.detectUserCurrency();
    this.checkBusinessHours();
    // Check status every minute
    this.statusCheckInterval = setInterval(() => {
      this.checkBusinessHours();
    }, 60000);
  }

  ngOnDestroy() {
    if (this.statusCheckInterval) {
      clearInterval(this.statusCheckInterval);
    }
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      // Add user message
      this.messages.push({
        text: this.newMessage,
        sender: 'user',
        time: this.getCurrentTime()
      });

      const userMessage = this.newMessage.toLowerCase();
      this.newMessage = '';

      // Simulate bot response
      setTimeout(() => {
        let botResponse = this.getBotResponse(userMessage);
        this.messages.push({
          text: botResponse,
          sender: 'bot',
          time: this.getCurrentTime()
        });
      }, 1000);
    }
  }

  getBotResponse(message: string): string {
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return 'Hello! I\'m here to help you plan your Rishikesh adventure. What would you like to know?';
    } else if (message.includes('rafting') || message.includes('raft')) {
      return 'Our Ganga River Rafting Adventure is one of our most popular tours! It\'s a 3-hour thrilling experience. Would you like to know more details?';
    } else if (message.includes('yoga') || message.includes('meditation')) {
      return 'We offer amazing Yoga & Meditation Retreats in Rishikesh! Our 3-day retreat includes accommodation, meals, and daily sessions. Interested?';
    } else if (message.includes('aarti') || message.includes('ganga aarti')) {
      return 'The Ganga Aarti at Triveni Ghat is a beautiful spiritual experience! It happens every evening around 6 PM. Would you like to book a tour?';
    } else if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
      // Convert prices to user's currency
      const minPriceINR = 500;
      const maxPriceINR = 6500;

      const minPriceUser = this.currencyService.convertFromINR(minPriceINR, this.userCurrency);
      const maxPriceUser = this.currencyService.convertFromINR(maxPriceINR, this.userCurrency);

      const minPriceFormatted = this.currencyService.formatAmount(minPriceUser, this.userCurrency);
      const maxPriceFormatted = this.currencyService.formatAmount(maxPriceUser, this.userCurrency);

      return `Our tour prices range from ${minPriceFormatted} to ${maxPriceFormatted} depending on the package. Check out our Tours page for detailed pricing in your local currency. Can I help you choose one?`;
    } else if (message.includes('booking') || message.includes('book')) {
      return 'Great! You can book directly from our website. Visit the Tours page, select your preferred tour, and click "Book Now". Need help with anything specific?';
    } else if (message.includes('contact') || message.includes('phone') || message.includes('email')) {
      return 'You can reach us at +91 9876543210 or info@rishikeshgateway.com. We\'re available 24/7 to assist you!';
    } else {
      return 'Thank you for your message! Our team will get back to you shortly. In the meantime, feel free to browse our tours or contact us at +91 9876543210.';
    }
  }

  detectUserCurrency() {
    try {
      // Get user's locale from browser
      const userLocale = navigator.language || 'en-IN';

      // Map common locales to currencies
      const currencyMap: { [key: string]: string } = {
        'en-US': 'USD',
        'en-GB': 'GBP',
        'en-EU': 'EUR',
        'en-CA': 'CAD',
        'en-AU': 'AUD',
        'en-IN': 'INR',
        'hi-IN': 'INR',
        'es-ES': 'EUR',
        'es-MX': 'MXN',
        'fr-FR': 'EUR',
        'de-DE': 'EUR',
        'it-IT': 'EUR',
        'pt-BR': 'BRL',
        'pt-PT': 'EUR',
        'ja-JP': 'JPY',
        'ko-KR': 'KRW',
        'zh-CN': 'CNY',
        'zh-TW': 'TWD',
        'ar-SA': 'SAR',
        'th-TH': 'THB',
        'vi-VN': 'VND',
        'id-ID': 'IDR',
        'ms-MY': 'MYR'
      };

      // Try to detect currency from locale
      this.userCurrency = currencyMap[userLocale] || 'USD';

      // Validate that the detected currency exists in our service
      if (!this.currencyService.isValidCurrency(this.userCurrency)) {
        this.userCurrency = 'USD'; // Fallback to USD
      }

      console.log(`Detected user currency: ${this.userCurrency} from locale: ${userLocale}`);
    } catch (error) {
      console.warn('Could not detect user currency, using USD as fallback');
      this.userCurrency = 'USD';
    }
  }

  checkBusinessHours() {
    const now = new Date();
    // Convert to IST (UTC+5:30)
    const istOffset = 5.5 * 60 * 60 * 1000; // 5.5 hours in milliseconds
    const istTime = new Date(now.getTime() + istOffset);

    const hour = istTime.getUTCHours();
    const minute = istTime.getUTCMinutes();

    // Business hours: 9:00 AM to 10:00 PM IST
    const isBusinessHours = (hour > 9 || (hour === 9 && minute >= 0)) &&
                           (hour < 22 || (hour === 22 && minute === 0));

    this.isOnline = isBusinessHours;
    this.statusText = isBusinessHours ? 'We\'re online' : 'We\'re offline';
  }

  getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  }
}
