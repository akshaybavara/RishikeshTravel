# Video Background Guide

## Professional Video Background Added ✅

The home page hero section now features a stunning video background for a modern, professional look.

## Features

✅ **Video Background**: Full-screen video playing in the hero section
✅ **Fallback Image**: Background image shows while video loads
✅ **Smooth Transitions**: Seamless fade between video and fallback
✅ **Mobile Optimized**: Responsive design for all devices
✅ **Professional Overlay**: Enhanced gradient overlay for text readability
✅ **Performance Optimized**: Video preloads metadata only

## Current Implementation

### Video Specifications
- **Source**: Sample nature video (replace with your own)
- **Format**: MP4 with WebM fallback
- **Playback**: Autoplay, muted, loop, playsinline
- **Size**: Full-screen cover with slight zoom
- **Filters**: Brightness, contrast, and saturation adjustments

### Responsive Design
- **Desktop**: Full coverage with scale(1.05)
- **Mobile**: Enhanced zoom scale(1.1) for better coverage
- **Fallback**: Image fallback for unsupported devices

## Adding Your Own Video

### Step 1: Prepare Your Video

**Requirements:**
- Format: MP4 (primary), WebM (optional)
- Resolution: 1920x1080 or higher
- Duration: 20-60 seconds (loops automatically)
- Size: Under 10MB for web performance
- Content: Nature, mountains, rivers, adventure themes

**Optimization Tips:**
- Compress video for web (use tools like HandBrake)
- Remove audio track (videos autoplay muted)
- Ensure smooth loop (start/end frames match)

### Step 2: Add Video File

1. Create directory: `public/assets/videos/`
2. Add your video: `public/assets/videos/rishikesh-hero.mp4`
3. Optional: Add WebM version for better compression

### Step 3: Update Code

Edit `src/app/components/hero-section/hero-section.component.html`:

```html
<source src="/assets/videos/rishikesh-hero.mp4" type="video/mp4">
<source src="/assets/videos/rishikesh-hero.webm" type="video/webm">
```

### Step 4: Test

1. Run `npm start`
2. Check hero section loads video
3. Test on different devices/browsers
4. Verify fallback image works

## Video Sources

### Free Stock Videos
1. **Pexels Videos**: https://www.pexels.com/videos/
   - Search: "mountains", "river", "nature", "landscape"

2. **Pixabay Videos**: https://pixabay.com/videos/
   - Search: "himalayas", "nature", "waterfall"

3. **Videezy**: https://www.videezy.com/
   - Nature and landscape categories

### Rishikesh-Specific Content
- Mountain sunrise/sunset
- Ganges River flowing
- Himalayan landscapes
- Adventure sports footage
- Temple ceremonies
- Meditation/yoga scenes

## Browser Compatibility

✅ **Full Support:**
- Chrome 66+
- Firefox 60+
- Safari 12+
- Edge 79+

⚠️ **Limited Support:**
- iOS Safari (requires user interaction for autoplay)
- Some mobile browsers

## Performance Considerations

### Optimization
- Video preloads `metadata` only (not full video)
- `playsinline` prevents fullscreen on mobile
- `muted` required for autoplay
- CSS `object-fit: cover` ensures proper scaling

### Bandwidth
- Consider user's connection speed
- Provide lower quality versions for mobile
- Monitor loading performance

## Customization

### Change Video
```typescript
// In hero-section.component.html
<source src="your-video-url.mp4" type="video/mp4">
```

### Adjust Overlay
```scss
// In hero-section.component.scss
.hero-section::before {
  background: linear-gradient(135deg, rgba(30, 64, 175, 0.5) 0%, rgba(249, 115, 22, 0.4) 100%);
}
```

### Video Filters
```scss
.hero-video {
  filter: brightness(0.8) contrast(1.2) saturate(1.3);
}
```

## Troubleshooting

**Video not playing?**
- Check console for CORS errors
- Ensure video is muted (required for autoplay)
- Verify file path and format
- Test video URL directly in browser

**Video not covering screen?**
- Check `object-fit: cover` CSS
- Adjust `transform: scale()` value
- Verify video dimensions

**Performance issues?**
- Compress video file
- Use shorter duration
- Add `preload="none"` for slow connections
- Consider poster image for very slow connections

## Current Status

✅ Video background implemented
✅ Fallback image working
✅ Responsive design complete
⏳ Waiting for custom Rishikesh video

**Next Step**: Add your `rishikesh-hero.mp4` video file to `public/assets/videos/`!

