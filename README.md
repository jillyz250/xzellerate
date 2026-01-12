# Xzellerate Marketing Consulting Website

A modern, professional, single-page marketing consulting website built with HTML, CSS, and JavaScript. Designed for conversion and professional credibility.

## 🚀 Features

- **Modern Design**: Clean typography, professional color scheme, and contemporary layout
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: Subtle scroll animations and transitions
- **Interactive Elements**: Mobile menu, smooth scrolling, form validation
- **SEO Optimized**: Semantic HTML and proper meta tags
- **Performance Optimized**: Fast loading, lazy loading images, debounced events
- **Conversion Focused**: Clear CTAs throughout the page

## 📁 Project Structure

```
xzellerate/
├── index.html          # Main HTML file
├── styles.css          # All CSS styling
├── script.js           # JavaScript functionality
├── assets/             # Image assets folder
│   ├── logo.png       # Your company logo (ADD THIS)
│   ├── headshot.jpg   # Professional headshot (ADD THIS)
│   └── about-image.jpg # About section photo (ADD THIS)
└── README.md          # This file
```

## 🎨 Adding Your Content

### 1. Logo
- Place your logo in: `assets/logo.png`
- Recommended size: 200x60px (PNG with transparent background)
- Location in HTML: Line 25-26

### 2. Headshot Photo
- Place your headshot in: `assets/headshot.jpg`
- Recommended size: 800x800px minimum
- Location in HTML: Line 92
- Should be professional, high-quality image

### 3. About Section Photo
- Place your photo in: `assets/about-image.jpg`
- Recommended size: 600x800px
- Location in HTML: Line 224
- Can be the same as headshot or a different professional photo

### 4. Contact Information
Update the following in `index.html`:

**Email** (Line 336):
```html
<a href="mailto:contact@xzellerate.com">contact@xzellerate.com</a>
```

**Phone** (Line 348):
```html
<a href="tel:+1234567890">+1 (234) 567-890</a>
```

**Location** (Line 360):
```html
<span>Serving Clients Nationwide</span>
```

### 5. Social Media Links
Update social links (Lines 372-374):
- LinkedIn
- Twitter
- Instagram

Replace with your actual profile URLs.

## 🚀 Deployment

### Quick Start
1. Add your images to the `assets/` folder
2. Update contact information in `index.html`
3. Customize content to match your services
4. Deploy to any static hosting service

### Hosting Options
- **Netlify**: Drag and drop deployment
- **Vercel**: GitHub integration
- **GitHub Pages**: Free hosting
- **Traditional hosting**: Upload via FTP

## 📧 Form Submission

Configure form handling by connecting to:
- Formspree (https://formspree.io)
- Netlify Forms
- Your custom backend API

## 🎨 Customizing Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
}
```

## 📱 Fully Responsive

Optimized for:
- Desktop (1024px+)
- Tablet (768px-1023px)
- Mobile (<768px)

---

**Ready to deploy and start converting visitors into clients!**
