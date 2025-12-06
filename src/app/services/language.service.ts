import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly STORAGE_KEY = 'selected_language';
  private readonly DEFAULT_LANGUAGE = 'en';

  // Available languages
  private languages: Language[] = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
    { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
    { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
    { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
    { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
    { code: 'th', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭' },
    { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', flag: '🇲🇾' }
  ];

  private currentLanguageSubject = new BehaviorSubject<Language>(
    this.getLanguageFromStorage()
  );

  constructor() {
    // Initialize with stored language or default
    const storedLanguage = localStorage.getItem(this.STORAGE_KEY);
    if (storedLanguage) {
      const language = this.languages.find(l => l.code === storedLanguage);
      if (language) {
        this.currentLanguageSubject.next(language);
      }
    }
  }

  private getLanguageFromStorage(): Language {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      const language = this.languages.find(l => l.code === stored);
      if (language) return language;
    }
    return this.languages.find(l => l.code === this.DEFAULT_LANGUAGE)!;
  }

  // Get current selected language as observable
  getCurrentLanguage(): Observable<Language> {
    return this.currentLanguageSubject.asObservable();
  }

  // Get current selected language as value
  getCurrentLanguageValue(): Language {
    return this.currentLanguageSubject.value;
  }

  // Get all available languages
  getLanguages(): Language[] {
    return this.languages;
  }

  // Set selected language
  setLanguage(languageCode: string): void {
    const language = this.languages.find(l => l.code === languageCode);
    if (language) {
      this.currentLanguageSubject.next(language);
      localStorage.setItem(this.STORAGE_KEY, languageCode);

      // Update document language attribute
      document.documentElement.lang = languageCode;

      // For future implementation: trigger translation service
      console.log(`Language changed to: ${language.name}`);
    }
  }

  // Get language by code
  getLanguageByCode(code: string): Language | undefined {
    return this.languages.find(l => l.code === code);
  }

  // Check if language exists
  isValidLanguage(code: string): boolean {
    return this.languages.some(l => l.code === code);
  }

  // Get current language code
  getCurrentLanguageCode(): string {
    return this.currentLanguageSubject.value.code;
  }

  // Translate key (placeholder for future i18n implementation)
  translate(key: string): string {
    // This would be replaced with actual translation service
    return key;
  }
}



