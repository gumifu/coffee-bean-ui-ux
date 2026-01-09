# Coffee Bean ☕

A modern, interactive web project showcasing coffee beans using Next.js, Tailwind CSS, GSAP, and Three.js. This website explores the world of coffee beans, their origins, and the two main types: Arabica and Robusta, featuring immersive 3D animations and smooth parallax effects.

## 👤 Author

**Fumitaka Fujisaki**

## 🍽️ Food Topic

**Coffee Beans** - An interactive website exploring the world of coffee beans, their origins, and the two main types: Arabica and Robusta.

## 📄 Pages Included

1. **Home Page** (`/`)

   - Hero section with 3D animated coffee bean
   - Origins section: "What are coffee beans"
   - Culture section: "Why people drink coffee"
   - About Two Beans section with navigation button

2. **About Two Beans Page** (`/about`)
   - Header section introducing Arabica and Robusta
   - Comparison cards with detailed information:
     - Growing area
     - Flavor profiles
     - Caffeine content
     - Common uses
   - Visual comparison with coffee bean images

## ✨ Special Features

### 3D Graphics & Animation (Three.js)

- **Interactive 3D Coffee Bean**: Three.js-powered 3D GLB model that dynamically follows scroll

  - **GLTFLoader**: Loads and renders 3D coffee bean model (`5750b9d2-7b39-416f-b82d-08e2f860e749.glb`)
  - **Responsive 3D Rendering**: Optimized camera positioning and FOV for mobile, tablet, and desktop
  - **Shadow Mapping**: Realistic shadow casting and receiving with adjustable shadow radius and map size
  - **Lighting Setup**: Multiple light sources (ambient, directional, point lights) for natural illumination

- **Scroll-triggered Animations**: GSAP ScrollTrigger for smooth scroll-based animations
  - **Camera Movement**: Horizontal camera positioning (left/right) synchronized with scroll
  - **Bean Rotation**: Dynamic rotation (x, y, z axes) matching design references at different scroll positions
  - **Position Animation**: Vertical floating and landing animation, perfectly aligning with shadow at the end
  - **Scale Animation**: Size changes throughout scroll to fit different sections
  - **Integrated Timeline**: Single unified timeline for all animations, ensuring smooth transitions without conflicts
  - **Responsive Behavior**: Different animation parameters for mobile, tablet, and desktop devices

### Parallax Effects

- **Home Page FV Section**: Parallax effect on coffee bean images in the First View section

  - Two coffee bean images move upward at different speeds during scroll
  - Left bean: -200px movement
  - Right bean: -160px movement
  - Smooth scroll-synchronized animation using GSAP ScrollTrigger

- **About Page FV Section**: Parallax effect on coffee bean images
  - Similar parallax implementation for visual consistency
  - Scroll-triggered upward movement creating depth perception

### Favicon Configuration

- **Custom Favicon**: SVG favicon (`app/icon.svg`) automatically recognized by Next.js App Router
  - Coffee bean design matching the site's theme
  - White fill color for visibility
  - Properly configured for deployment and browser display

### User Interface

- **Glassmorphism Navbar**: Transparent header with backdrop blur effect
  - Background: `rgba(89,74,60,0.8)` with `backdrop-blur-md`
  - Smooth show/hide animation based on scroll direction
- **Scroll-responsive Header**: Auto-hide on scroll down, show on scroll up
  - Detects scroll direction and toggles visibility accordingly
  - Always visible when near the top of the page
- **Responsive Design**: Optimized for mobile, tablet, and desktop
  - Mobile-specific performance optimizations
  - Adaptive camera positioning and FOV
  - Conditional image display (hidden on mobile/tablet for certain sections)

### Page Animations

- **Opening Animation**: Custom GSAP-powered curtain animation on page load

  - Logo fade-in effect
  - Vertical curtain opening animation (top and bottom panels)
  - Smooth transitions with optimized performance
  - GPU acceleration with `force3D: true` and `willChange` properties

- **Page Transitions**: Framer Motion AnimatePresence for smooth page transitions
  - Prevents DOM unmounting during route changes
  - Fade and scale animations between pages
  - Consistent brown background color (`#594a3c`) during transitions
  - Smooth opacity and transform transitions

### Coffee Belt Map (About Page)

- **Interactive Map Component**: Image-based map with info section
  - Responsive aspect ratio maintenance
  - Info button for mobile devices (left-aligned)
  - Hover-triggered info display for desktop
  - Click-outside-to-close functionality
  - Custom background color (`#F7EBD8`) for info section
  - "About Coffee belt" title with description

### Icons & Design

- **Lucide React Icons**: Modern, consistent iconography throughout
  - Used for comparison cards (Mountain, Flower, Coffee, Trophy)
  - Info icon for Coffee Belt section
- **Custom Logos**:
  - Header logo: `header_logo.svg`
  - Footer logo: `footer_logo.svg`
  - Used in opening animation and navigation
- **Smooth Animations**: Framer Motion for page transitions and section reveals
  - Fade-in and slide-in effects for sections
  - Viewport-based animations with `whileInView`

### Performance Optimizations

- Mobile: Reduced shadow map resolution, disabled antialiasing, limited pixel ratio
- Tablet: Balanced settings for optimal performance
- Desktop: Full quality rendering

## 🚀 Tech Stack

- **[Next.js 16](https://nextjs.org)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS v4](https://tailwindcss.com)** - Utility-first CSS framework
- **[GSAP](https://greensock.com/gsap/)** - High-performance animation library
- **[Three.js](https://threejs.org/)** - 3D graphics library
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library for React
- **[Lucide React](https://lucide.dev/)** - Icon library

## 📦 Setup

Install dependencies:

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

Edit `app/page.tsx` to see the page update automatically.

## 🏗️ Build

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GSAP Documentation](https://greensock.com/docs/)
- [Three.js Documentation](https://threejs.org/docs/)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 📄 License

MIT
