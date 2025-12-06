# Quick Setup Guide

## Installation Steps

1. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:4200`

## Project Structure Overview

```
RishikeshTravel/
├── src/
│   ├── app/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Page components
│   │   ├── services/         # Data services
│   │   ├── models/           # TypeScript interfaces
│   │   ├── guards/           # Route guards
│   │   ├── interceptors/     # HTTP interceptors
│   │   ├── app.routes.ts     # Routing
│   │   └── app.config.ts     # App configuration
│   ├── styles.scss           # Global styles
│   └── main.ts              # Entry point
├── public/                  # Static assets
├── package.json            # Dependencies
├── angular.json            # Angular config
├── tailwind.config.js      # Tailwind config
└── tsconfig.json           # TypeScript config
```

## Key Features Implemented

✅ **Pages:**
- Home page with hero, featured activities, tours, testimonials
- Tours listing with filters and pagination
- Tour details with image gallery
- Booking flow (form + confirmation)
- User dashboard (bookings + profile)
- About page with team
- Contact page with form and map
- Login/Register pages

✅ **Components:**
- Navbar (sticky, responsive)
- Hero section
- Search bar
- Tour cards
- Testimonials
- CTA sections
- Newsletter
- Footer
- Filter sidebar
- Image slider
- Booking form

✅ **Services:**
- Tours service (mock data)
- Testimonials service
- Team service
- Auth service (localStorage)
- Booking service

✅ **Features:**
- Authentication with guards
- JWT interceptor
- Responsive design
- Animations
- Material Design
- TailwindCSS styling

## Demo Credentials

You can use any email/password to login - authentication is simulated.

## Customization

### Change Colors
Edit `tailwind.config.js` - modify the `colors` section.

### Add Tours
Edit `src/app/services/tours.service.ts` - add to the `tours` array.

### Update Images
Replace Unsplash URLs in services/components with your own images.

## Troubleshooting

**Issue: Module not found**
- Run `npm install` again
- Check Angular version: `ng version`

**Issue: Styles not loading**
- Ensure TailwindCSS is installed: `npm install -D tailwindcss`
- Check `postcss.config.js` exists

**Issue: Material components not working**
- Verify Angular Material is installed: `npm list @angular/material`
- Check imports in component files

## Build for Production

```bash
ng build --configuration production
```

Output will be in `dist/rishikesh-travel/`

## Notes

- All data is mock/static (no real backend)
- Images load from Unsplash
- Authentication uses localStorage
- Google Maps iframe included (update API key if needed)
- WhatsApp button ready (update phone number)





