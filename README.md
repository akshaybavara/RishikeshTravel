# Rishikesh Gateway - Angular 17 Application

A professional, production-ready Angular 17 web application for Rishikesh Gateway services, featuring Angular Material and TailwindCSS.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Mobile-first approach, works on all devices
- **Angular Material**: Material Design components
- **TailwindCSS**: Utility-first CSS framework for rapid UI development
- **Full Routing**: Complete navigation system with guards
- **Authentication**: Login/Register with JWT interceptor
- **Booking System**: Complete booking flow with confirmation
- **User Dashboard**: Manage bookings and profile
- **Tour Management**: Browse, filter, and view tour details

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI 17

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```
   or
   ```bash
   ng serve
   ```

3. **Open your browser:**
   Navigate to `http://localhost:4200`

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── navbar/
│   │   ├── hero-section/
│   │   ├── search-bar/
│   │   ├── tour-card/
│   │   ├── testimonials/
│   │   ├── cta-section/
│   │   ├── newsletter/
│   │   ├── footer/
│   │   ├── filter-sidebar/
│   │   ├── image-slider/
│   │   └── booking-form/
│   ├── pages/               # Page components
│   │   ├── home/
│   │   ├── tours/
│   │   ├── tour-details/
│   │   ├── booking/
│   │   ├── booking-confirm/
│   │   ├── dashboard/
│   │   ├── about/
│   │   ├── contact/
│   │   └── auth/
│   ├── services/            # Angular services
│   │   ├── tours.service.ts
│   │   ├── testimonials.service.ts
│   │   ├── team.service.ts
│   │   ├── auth.service.ts
│   │   └── booking.service.ts
│   ├── models/               # TypeScript interfaces
│   ├── guards/               # Route guards
│   ├── interceptors/         # HTTP interceptors
│   ├── app.routes.ts         # Routing configuration
│   └── app.component.ts      # Root component
├── styles.scss               # Global styles
└── main.ts                   # Application entry point
```

## 🎨 Design System

### Colors
- **Himalayan Blue**: `#3B82F6`
- **Himalayan Orange**: `#F97316`
- **Sky Blue**: `#60A5FA`
- **Deep Blue**: `#1E40AF`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, various sizes
- **Body**: Regular weight

## 📱 Pages

1. **Home** (`/home`) - Hero section, featured activities, popular tours, testimonials
2. **Tours** (`/tours`) - Tour listing with filters and pagination
3. **Tour Details** (`/tours/:id`) - Detailed tour information with booking
4. **Booking** (`/booking/:id`) - Booking form (protected)
5. **Booking Confirm** (`/booking/confirm`) - Booking confirmation (protected)
6. **Dashboard** (`/dashboard`) - User dashboard with bookings and profile (protected)
7. **About** (`/about`) - Company information and team
8. **Contact** (`/contact`) - Contact form and map
9. **Login** (`/auth/login`) - User login
10. **Register** (`/auth/register`) - User registration

## 🔐 Authentication

- Mock authentication system with localStorage
- JWT interceptor for API calls
- Auth guard protects routes
- User session management

## 🎯 Key Features

### Tours
- Browse all available tours
- Filter by price, duration, category, rating
- Pagination support
- Detailed tour pages with image gallery
- Customer reviews

### Booking
- Complete booking flow
- Form validation
- Price calculation
- Booking confirmation

### Dashboard
- View upcoming and past bookings
- Cancel bookings
- Update profile
- Booking history

## 🛠️ Build

**Production build:**
```bash
ng build --configuration production
```

**Development build:**
```bash
ng build
```

## 🧪 Testing

```bash
ng test
```

## 📦 Technologies Used

- **Angular 17** - Frontend framework
- **Angular Material** - UI component library
- **TailwindCSS** - Utility-first CSS framework
- **RxJS** - Reactive programming
- **TypeScript** - Type-safe JavaScript

## 🎨 UI Features

- Smooth animations and transitions
- Glass morphism effects
- Gradient backgrounds
- Responsive grid layouts
- Hover effects
- Scroll animations
- Material Design components

## 📝 Notes

- All services return mock data (static JSON)
- Images are loaded from Unsplash
- Authentication is simulated (no real backend)
- Google Maps iframe is included (replace with your API key if needed)
- WhatsApp integration ready (update phone number)

## 🔧 Customization

### Update Colors
Edit `tailwind.config.js` to change the color palette.

### Add New Tours
Edit `src/app/services/tours.service.ts` to add more tour data.

### Modify Routes
Update `src/app/app.routes.ts` to add or modify routes.

## 📄 License

This project is created for demonstration purposes.

## 👨‍💻 Development

For development, the app uses:
- Hot module replacement
- Source maps
- Development optimizations

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

**Happy Coding! 🚀**




