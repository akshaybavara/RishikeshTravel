import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'tours', loadComponent: () => import('./pages/tours/tours.component').then(m => m.ToursComponent) },
  { path: 'tours/:id', loadComponent: () => import('./pages/tour-details/tour-details.component').then(m => m.TourDetailsComponent) },
  { path: 'booking/:id', loadComponent: () => import('./pages/booking/booking.component').then(m => m.BookingComponent), canActivate: [AuthGuard] },
  { path: 'booking/confirm', loadComponent: () => import('./pages/booking-confirm/booking-confirm.component').then(m => m.BookingConfirmComponent), canActivate: [AuthGuard] },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent), canActivate: [AuthGuard] },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'auth/login', loadComponent: () => import('./pages/auth/login/login.component').then(m => m.LoginComponent) },
  { path: 'auth/register', loadComponent: () => import('./pages/auth/register/register.component').then(m => m.RegisterComponent) },
  { path: '**', redirectTo: '/home' }
];





