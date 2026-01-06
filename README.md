# Coffee Bean ☕

A modern web project showcasing coffee beans using Next.js, Tailwind CSS, GSAP, and Three.js.

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

### 3D Graphics & Animation

- **Interactive 3D Coffee Bean**: Three.js-powered 3D model that follows scroll
- **Scroll-triggered Animations**: GSAP ScrollTrigger for smooth scroll-based animations
  - Camera movement (left/right positioning)
  - Bean rotation (angle changes matching design references)
  - Position animation (floating and landing on shadow)
  - Scale animation (size changes throughout scroll)
- **Shadow Mapping**: Realistic shadows for the 3D coffee bean

### User Interface

- **Glassmorphism Navbar**: Transparent header with backdrop blur effect
- **Scroll-responsive Header**: Auto-hide on scroll down, show on scroll up
- **Responsive Design**: Optimized for mobile, tablet, and desktop
  - Mobile-specific performance optimizations
  - Adaptive camera positioning and FOV
  - Conditional image display

### Icons & Design

- **Lucide React Icons**: Modern, consistent iconography throughout
- **Custom Logo**: SVG logo with texture effects
- **Smooth Animations**: Framer Motion for page transitions and section reveals

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
