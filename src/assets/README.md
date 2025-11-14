# Assets Directory

This directory contains all static assets for the SkillUpCycle landing page.

## 📁 Directory Structure

### `/images`
Place all image files here:

- `hero-bg.jpg` - Background image for hero section
- `education-lack.jpg` - Visual for problem section
- `rural-youth.jpg` - Image showing rural youth/communities
- `success-story.jpg` - Success story or testimonial image

**Image Requirements:**
- Format: JPG, PNG, or WebP (WebP preferred for performance)
- Max size: 500KB per image
- Dimensions: Varies by usage, typically 1920px width for full-width sections
- Optimize before adding (use tools like TinyPNG, Squoosh)

### `/icons`
Place custom SVG icons here:

**Root level:**
- `sdg-4.svg` - UN SDG Goal 4 (Quality Education) icon
- `sdg-8.svg` - UN SDG Goal 8 (Decent Work) icon
- `financial.svg` - Financial constraints icon
- `environment.svg` - Environmental insufficiency icon

**`/skills` subfolder:**
- `computing.svg` - Computing skills icon
- `entrepreneurship.svg` - Entrepreneurship icon
- `digital.svg` - Digital literacy icon
- `translation.svg` - Language/translation icon

**Icon Requirements:**
- Format: SVG
- Size: 24x24px or 32x32px viewBox
- Colors: Can be monochrome (will be styled with CSS)
- Clean, optimized paths

## 🎨 Creating Placeholder Images

If you don't have images yet, you can:

1. **Use placeholder services:**
   - https://placeholder.com/
   - https://via.placeholder.com/
   - https://picsum.photos/

2. **Generate AI images:**
   - DALL-E
   - Midjourney
   - Stable Diffusion

3. **Use stock photos:**
   - Unsplash
   - Pexels
   - Pixabay

## 📝 Notes

- All images are loaded from this directory using relative paths
- Consider using responsive images with different sizes for mobile/desktop
- Add alt text for accessibility when using images in components
- Keep total asset size reasonable for fast page loads

## 🔄 Updating Assets

To update an asset:
1. Replace the file with the same name
2. Clear browser cache if needed
3. Rebuild the project: `pnpm build`
