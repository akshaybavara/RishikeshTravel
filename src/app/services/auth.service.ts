import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private tokenKey = 'auth_token';
  private userKey = 'current_user';

  constructor() {
    // Check for stored user on init
    const storedUser = localStorage.getItem(this.userKey);
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  login(email: string, password: string): Observable<{ token: string; user: User }> {
    // Mock login - in real app, call API
    const mockUser: User = {
      id: '1',
      name: 'Demo User',
      email: email,
      phone: '+91 9876543210',
      role: 'user'
    };

    const mockToken = 'mock_jwt_token_' + Date.now();

    localStorage.setItem(this.tokenKey, mockToken);
    localStorage.setItem(this.userKey, JSON.stringify(mockUser));
    this.currentUserSubject.next(mockUser);

    return of({ token: mockToken, user: mockUser });
  }

  register(name: string, email: string, password: string, phone: string): Observable<{ token: string; user: User }> {
    // Mock registration
    const mockUser: User = {
      id: Date.now().toString(),
      name: name,
      email: email,
      phone: phone,
      role: 'user'
    };

    const mockToken = 'mock_jwt_token_' + Date.now();

    localStorage.setItem(this.tokenKey, mockToken);
    localStorage.setItem(this.userKey, JSON.stringify(mockUser));
    this.currentUserSubject.next(mockUser);

    return of({ token: mockToken, user: mockUser });
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.currentUserSubject.next(null);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}








