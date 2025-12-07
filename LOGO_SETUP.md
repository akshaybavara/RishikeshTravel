# Logo Setup Guide

## Current Implementation

✅ Logo has been added to the navbar, positioned on the left side of the "Rishikesh Travel" title.

## Logo Features

- ✅ Positioned on the left of the title
- ✅ Responsive sizing (45px desktop, 35px mobile)
- ✅ Hover animation effect
- ✅ Fallback icon if logo image not found
- ✅ SVG placeholder included

## Adding Your Own Logo

### Step 1: Prepare Your Logo

1. **Recommended Formats:**
   - SVG (best quality, scalable)
   - PNG (with transparent background)

2. **Recommended Sizes:**
   - Desktop: 45x45px to 60x60px
   - Mobile: 35x35px minimum
   - Aspect Ratio: Square (1:1) works best

3. **Design Tips:**
   - Use transparent background
   - Keep it simple and recognizable
   - Match your brand colors (Himalayan blue/orange theme)

### Step 2: Add Logo File

Place your logo file in:
```
public/assets/logo/logo.svg
```
or
```
public/assets/logo/logo.png
```

**Priority Order:**
1. `logo.svg` (checked first)
2. `logo.png` (fallback)
3. Material icon (if both fail)

### Step 3: Update Code (Optional)

If your logo has a different name, update `src/app/components/navbar/navbar.component.html`:

```html
<img 
  src="/assets/logo/your-logo-name.svg" 
  alt="Rishikesh Travel Logo" 
  class="logo-img"
  (error)="onLogoError($event)">
```

## Current Logo

A placeholder SVG logo is included at `public/assets/logo/logo.svg` featuring:
- 🏔️ Himalayan mountains
- 🌊 Ganga river
- ☀️ Spiritual sun element
- 🎨 Gradient colors (blue to orange)

## Customization

### Change Logo Size

Edit `src/app/components/navbar/navbar.component.scss`:

```scss
.logo-container {
  height: 50px;  // Change this
  width: 50px;   // Change this
}
```

### Change Logo Position

The logo is positioned with `space-x-3` (spacing between logo and title). Adjust in:
`src/app/components/navbar/navbar.component.html`:

```html
<a routerLink="/home" class="flex items-center space-x-4">
  <!-- space-x-4 = more spacing, space-x-2 = less spacing -->
```

### Remove Logo

To remove the logo, delete the logo container div in `navbar.component.html`:

```html
<!-- Delete this section -->
<div class="logo-container flex-shrink-0">
  ...
</div>
```

## Logo Examples for Rishikesh Travel

**Good Logo Ideas:**
- 🏔️ Mountain peaks (Himalayas)
- 🌊 River waves (Ganga)
- 🧘 Meditation/yoga symbol
- 🔔 Temple bell
- 🕯️ Aarti lamp
- 🗻 Triveni Ghat symbol

## Testing

1. Add your logo file to `public/assets/logo/`
2. Run `npm start`
3. Check navbar - logo should appear on the left of title
4. Test responsive: logo should scale on mobile
5. Test fallback: remove logo file to see icon fallback

## Troubleshooting

**Logo not showing?**
- Check file path: `/assets/logo/logo.svg`
- Verify file exists in `public/assets/logo/` folder
- Check browser console for 404 errors
- Ensure file format is SVG or PNG

**Logo too large/small?**
- Adjust `.logo-container` height/width in SCSS
- Check image dimensions

**Logo not aligned?**
- Adjust `space-x-3` class value
- Check flex alignment classes

## File Structure

```
public/
  assets/
    logo/
      logo.svg      ← Your logo here
      logo.png      ← Fallback logo
      README.md     ← This guide
```

---

**Ready to use!** Just add your logo file and it will appear automatically.









