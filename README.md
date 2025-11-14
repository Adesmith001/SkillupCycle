# SkillUpCycle Landing Page

A stunning, interactive landing page for SkillUpCycle - an educational platform empowering rural Nigerian youth through accessible skills training.

## 🚀 Features

- **Modern React Stack**: Built with Vite, React, and Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Fully Responsive**: Mobile-first design with perfect tablet and desktop layouts
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards included
- **Accessible**: WCAG compliant with semantic HTML
- **Fast Performance**: Optimized loading and rendering

## 📦 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Page sections (Hero, Problem, Solution, etc.)
│   ├── ui/              # Reusable UI components (Button, Card, Badge, etc.)
│   └── animations/      # Animation wrapper components
├── data/               # Static data (team, features, stats)
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── styles/             # Global styles and animations
└── assets/             # Images and icons
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 🎨 Design Guidelines

### Color Palette
- **Primary Blue**: `#0ea5e9` - Represents education and trust
- **Accent Purple**: `#8b5cf6` - Represents innovation and creativity
- Extensive use of gradients for visual appeal

### Typography
- **Headings**: Poppins (Bold, 3xl-6xl)
- **Body**: Inter (Regular sizes)
- **Quotes**: Italic, larger font

### Spacing & Layout
- Generous padding and margins
- Full viewport sections for major content
- Breathing room between elements

## 🚦 Getting Started

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📸 Adding Images

### Team Photos
Place team member photos in `public/team/`:
- toluwani.jpg
- peace.jpg
- anjola.jpg
- femi.jpg
- faith.jpg
- ayanfe.jpg

**Recommended specs**: 800x800px, optimized JPG/WebP

### Section Images
Place section images in `src/assets/images/`:
- hero-bg.jpg
- education-lack.jpg
- rural-youth.jpg
- success-story.jpg

### Icons
Place custom SVG icons in `src/assets/icons/`:
- sdg-4.svg
- sdg-8.svg
- financial.svg
- environment.svg

And skill icons in `src/assets/icons/skills/`:
- computing.svg
- entrepreneurship.svg
- digital.svg
- translation.svg

### Logo & Branding
- `public/logo.svg` - Main logo
- `public/favicon.ico` - Browser favicon
- `public/og-image.jpg` - Social sharing image (1200x630px)

## 🎯 Sections Overview

1. **Hero** - Opening cinematic with animated text and CTAs
2. **Problem** - Highlights education challenges in rural Nigeria
3. **Solution** - Introduces SkillUpCycle and its approach
4. **Features** - Showcases platform capabilities
5. **Impact** - SDG alignment (Goals 4 & 8)
6. **Vision** - Inspirational message about transforming lives
7. **Stats** - Animated counters showing impact goals
8. **Team** - Meet the team with hover effects
9. **CTA** - Email waitlist signup form

## 🔧 Customization

### Update Team Members
Edit `src/data/team.js` to add/modify team information

### Modify Features
Edit `src/data/features.js` to update platform features

### Change Statistics
Edit `src/data/stats.js` to update impact numbers

### Adjust Colors
Modify `tailwind.config.js` to change the color scheme

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Tips

- Use WebP format for images
- Lazy load images below the fold
- Keep total page size under 2MB
- Optimize animations for 60fps

## 🌐 Deployment

Ready to deploy to:
- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

## 📄 License

Copyright © 2025 SkillUpCycle. All rights reserved.

## 🤝 Contributing

This is a private project for SkillUpCycle. For questions or contributions, contact the team.

---

Built with ❤️ by the SkillUpCycle Team
