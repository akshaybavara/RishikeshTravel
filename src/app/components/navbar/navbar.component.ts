import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../../services/auth.service';
import { CurrencySelectorComponent } from '../currency-selector/currency-selector.component';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, CurrencySelectorComponent, LanguageSelectorComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @ViewChild('logoFallback') logoFallback!: ElementRef<HTMLDivElement>;

  isMenuOpen = false;
  currentUser$;

  constructor(public authService: AuthService, private router: Router) {
    this.currentUser$ = this.authService.currentUser$;
  }

  onLogoError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    if (this.logoFallback) {
      this.logoFallback.nativeElement.style.display = 'flex';
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}

