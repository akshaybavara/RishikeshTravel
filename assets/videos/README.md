# Background Videos - Hero Section Video Sequence

🎬 **The hero section now plays multiple videos in sequence!** Each video plays completely before automatically transitioning to the next one.

## Current Video Sequence

The hero section plays these videos in order:
1. **Big Buck Bunny** - Nature scene (sample video)
2. **W3Schools Video** - Mountain scene (sample video)
3. **Elephants Dream** - Spiritual journey (sample video)

## How It Works

- ✅ **Sequential Playback**: Videos play one after another
- ✅ **Automatic Transitions**: No user interaction needed
- ✅ **Infinite Loop**: Sequence repeats continuously
- ✅ **Error Handling**: Skips to next video if one fails
- ✅ **Visual Indicators**: Shows current video title and progress dots

## Adding Your Pexels Videos

### ❌ Why Pexels URLs Don't Work
Pexels video pages (like `https://www.pexels.com/video/...`) are **webpage URLs**, not direct video file URLs. HTML video elements need direct `.mp4` file links.

### ✅ Solution: Download and Use Locally

### Step 1: Download Specific Videos
Download these exact videos from Pexels:

1. **Temple Video**: `https://www.pexels.com/video/a-temple-near-the-mountain-8939599/`
2. **Bridge Video**: `https://www.pexels.com/video/suspension-bridge-over-river-6595717/`
3. **Rafting Video**: `https://www.pexels.com/video/rafting-on-the-river-19096562/`

### Step 2: Save Files Locally
- **Location**: `public/assets/videos/`
- **Names**:
  - `temple-mountain.mp4`
  - `suspension-bridge.mp4`
  - `river-rafting.mp4`

### Step 3: Update Hero Component
Edit `src/app/components/hero-section/hero-section.component.ts`:

```typescript
heroVideos = [
  {
    src: '/assets/videos/temple-mountain.mp4',
    title: 'Temple Near Mountain'
  },
  {
    src: '/assets/videos/suspension-bridge.mp4',
    title: 'Suspension Bridge over River'
  },
  {
    src: '/assets/videos/river-rafting.mp4',
    title: 'Rafting on the River'
  }
];
```

### Step 4: Test
- Videos will automatically play in sequence
- Each video plays completely before moving to next
- Sequence loops infinitely

## Alternative Video Sources

If Pexels download is slow, try these free alternatives:

### Free Stock Videos:
- **Videezy**: https://www.videezy.com/ (nature category)
- **Mixkit**: https://mixkit.co/free-stock-video/ (search "nature")
- **Pixabay**: https://pixabay.com/videos/ (free downloads)

### Working Demo Videos:
Currently using reliable sample videos that work immediately!

## Recommended Video Specifications

- **Format**: MP4 (most compatible)
- **Resolution**: 1920x1080 (Full HD) or higher
- **Duration**: 30-60 seconds (will loop)
- **File Size**: Under 10MB for web performance
- **Content**: Nature, mountains, rivers, adventure themes

## Video Sources

### Free Stock Videos:
1. **Pexels**: https://www.pexels.com/videos/
   - Search: "mountains", "river", "nature", "adventure", "temple"

2. **Pixabay**: https://pixabay.com/videos/
   - Search: "himalayas", "river", "nature", "temple"

3. **Videezy**: https://www.videezy.com/
   - Free stock videos, nature category

## Best Practices

✅ **Good:**
- High quality nature footage
- Slow, peaceful movements
- Good lighting
- No text overlays
- Loop-friendly content

❌ **Avoid:**
- Fast cuts or shaky footage
- People prominently featured
- Copyrighted music
- Bright, distracting colors
- Too long duration

## Mobile Considerations

- Videos may not autoplay on mobile
- Consider shorter, optimized versions for mobile
- Ensure fallback image works well on mobile

