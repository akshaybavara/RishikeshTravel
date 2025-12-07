import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { LanguageService, Language } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent implements OnInit, OnDestroy {
  currentLanguage: Language;
  languages: Language[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getCurrentLanguageValue();
  }

  ngOnInit() {
    this.languages = this.languageService.getLanguages();

    // Subscribe to language changes
    this.subscription.add(
      this.languageService.getCurrentLanguage().subscribe(language => {
        this.currentLanguage = language;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  selectLanguage(languageCode: string) {
    this.languageService.setLanguage(languageCode);
  }
}




