# Raghvendra Singh - Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring smooth animations and an industrial/technical aesthetic.

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy to Vercel

### Option 1: One-Click Deploy (Recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite - just click "Deploy"

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

## 🔒 Security Features

This portfolio includes several security measures:

- **Security Headers** (via `vercel.json`):
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY` (prevents clickjacking)
  - `X-XSS-Protection: 1; mode=block`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy` (restricts camera, mic, location)
  - `Content-Security-Policy` (restricts resource loading)

- **Form Security**:
  - Honeypot field to catch bots
  - Input validation and sanitization
  - Email regex validation
  - Character limits on all fields
  - No backend = no database vulnerabilities

- **General**:
  - No exposed API keys
  - HTTPS enforced by Vercel
  - Static site = minimal attack surface

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx         # Main React component
│   ├── App.css         # All styles
│   └── main.jsx        # Entry point
├── index.html          # HTML template with meta tags
├── vercel.json         # Vercel config with security headers
├── package.json
└── vite.config.js
```

## 🎨 Customization

### Adding Your Photo

Replace the placeholder in the Hero section:

```jsx
// In App.jsx, find hero__image-placeholder and replace with:
<img 
  src="/your-photo.jpg" 
  alt="Raghvendra Singh" 
  className="hero__image"
/>
```

Add your photo to the `public` folder.

### Updating Content

All content is in `App.jsx`:
- Experience data in the `Experience` component
- Projects in the `Projects` component
- Skills in the `Skills` component
- Contact info in the `Contact` component

### Changing Colors

Edit CSS variables in `App.css`:

```css
:root {
  --color-accent: #00d4aa;        /* Main accent color */
  --color-bg-primary: #0a0f1a;    /* Background */
  /* ... other variables */
}
```

## 📱 Features

- ✅ Fully responsive design
- ✅ Smooth scroll animations
- ✅ Typewriter effect
- ✅ Animated skill bars
- ✅ Timeline experience section
- ✅ Contact form (opens email client)
- ✅ SEO optimized
- ✅ Fast loading (Vite + code splitting)
- ✅ Accessible (ARIA labels, semantic HTML)

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **CSS3** - Styling (no frameworks)

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

---

Built with ❤️ by Raghvendra Singh
