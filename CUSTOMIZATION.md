# Customization Guide

## Easy Customization Steps

### 1. Update Business Name and Branding

**Logo Text** (if not using image):
Find in `index.html` line 27 and line 468:
```html
<span class="logo-text">XZELLERATE</span>
```
Change "XZELLERATE" to your business name.

### 2. Hero Section

**Main Headline** (line 67):
```html
<h1 class="hero-title">Transform Your Marketing Strategy</h1>
```

**Subheadline** (line 68):
```html
<p class="hero-subtitle">Your compelling message here</p>
```

**Call-to-Action Buttons** (lines 70-72):
```html
<a href="#contact" class="btn btn-primary btn-large">Schedule a Consultation</a>
<a href="#services" class="btn btn-secondary btn-large">Explore Services</a>
```

**Statistics** (lines 74-86):
Update the numbers to reflect your business:
- Years of Experience
- Clients Served
- Average ROI

### 3. Services Section

Each service card (6 total) includes:
- Icon (SVG)
- Title
- Description
- Feature list

**To modify a service:**
1. Find the service card (starting at line 107)
2. Update the `<h3 class="service-title">` with your service name
3. Update the `<p class="service-description">` with your description
4. Update the `<ul class="service-features">` with your bullet points

**Example:**
```html
<div class="service-card">
    <div class="service-icon"><!-- SVG icon --></div>
    <h3 class="service-title">Your Service Name</h3>
    <p class="service-description">Your service description</p>
    <ul class="service-features">
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
        <li>Feature 4</li>
    </ul>
</div>
```

### 4. About Section

**Your Story** (lines 228-229):
Replace with your actual background, experience, and expertise.

**Credentials** (lines 236-259):
Update each credential item:
```html
<div class="credential-item">
    <div class="credential-icon">✓</div>
    <div class="credential-text">
        <strong>Your Credential</strong>
        <span>Additional detail</span>
    </div>
</div>
```

**Expertise Tags** (lines 265-274):
```html
<span class="tag">Your Expertise Area</span>
```
Add or remove tags as needed.

### 5. Testimonials

**Replace with real testimonials** (lines 293-319):
```html
<div class="testimonial-card">
    <div class="testimonial-stars">★★★★★</div>
    <p class="testimonial-text">"Client testimonial quote here"</p>
    <div class="testimonial-author">
        <strong>Client Name</strong>
        <span>Client Title, Company</span>
    </div>
</div>
```

### 6. Contact Information

**Email** (line 336):
```html
<a href="mailto:your-email@xzellerate.com">your-email@xzellerate.com</a>
```

**Phone** (line 348):
```html
<a href="tel:+15551234567">+1 (555) 123-4567</a>
```

**Location** (line 360):
```html
<span>Your City, State / Country</span>
```

**Social Media** (lines 372-399):
Update the `href` attributes with your social media URLs:
- LinkedIn
- Twitter
- Instagram

### 7. Color Scheme

**Primary Colors** in `styles.css` (lines 8-15):
```css
:root {
    --primary-color: #2563eb;     /* Change to your brand color */
    --primary-dark: #1e40af;
    --primary-light: #3b82f6;
    --secondary-color: #7c3aed;   /* Accent color */
    --accent-color: #ec4899;      /* Additional accent */
}
```

**Finding the right colors:**
- Use a color picker from your logo
- Try tools like: Coolors.co, Adobe Color
- Ensure sufficient contrast for accessibility

### 8. Typography

**Fonts** in `styles.css` (lines 20-21):
```css
:root {
    --font-primary: 'Inter', sans-serif;
    --font-display: 'Playfair Display', serif;
}
```

**To use different fonts:**
1. Find fonts at Google Fonts (fonts.google.com)
2. Update the import in `index.html` (line 10)
3. Update the CSS variables above

### 9. Images

**Required images:**
1. **Logo**: `assets/logo.png`
   - Size: ~200x60px
   - Format: PNG with transparency
   - High resolution (2x for retina)

2. **Headshot**: `assets/headshot.jpg`
   - Size: At least 800x800px
   - Format: JPG or WebP
   - Professional quality

3. **About Image**: `assets/about-image.jpg`
   - Size: 600x800px or larger
   - Format: JPG or WebP
   - Professional quality

**Optimizing images:**
- Use TinyPNG.com or Squoosh.app
- Target file size: < 500KB per image
- Use WebP format for better compression

### 10. Meta Tags for SEO

**Update in `index.html` head section:**

```html
<meta name="description" content="Your custom description here (150-160 characters)">
<title>Your Business Name | Marketing Consulting</title>
```

**Add more meta tags for better SEO:**
```html
<meta name="keywords" content="marketing consulting, your services">
<meta name="author" content="Your Name">

<!-- Open Graph for social media -->
<meta property="og:title" content="Your Business Name">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://yoursite.com/assets/og-image.jpg">
<meta property="og:url" content="https://yoursite.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Business Name">
<meta name="twitter:description" content="Your description">
<meta name="twitter:image" content="https://yoursite.com/assets/twitter-image.jpg">
```

## Advanced Customizations

### Adding a New Section

1. Copy an existing section structure
2. Update IDs and content
3. Add navigation link in navbar
4. Update smooth scroll in JavaScript

### Changing Layout

**Hero Layout** - Switch from side-by-side to stacked:
In `styles.css` around line 550:
```css
.hero-content {
    grid-template-columns: 1fr; /* Change from '1fr 1fr' */
}
```

### Adding Animation Effects

Add to any element:
```html
<div class="fade-in-up">Your content</div>
```

### Mobile Menu Customization

**Colors** in `styles.css` (lines 500-520):
```css
.mobile-menu {
    background: var(--white);
}
```

## Testing Your Changes

### Local Testing:
1. Save all files
2. Open `index.html` in browser
3. Test all links and buttons
4. Resize browser for mobile view
5. Check browser console for errors

### Cross-Browser Testing:
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers

### Responsive Testing:
- Desktop (1920px, 1440px, 1024px)
- Tablet (768px)
- Mobile (375px, 414px)

## Common Modifications

### Remove a Section:
1. Delete the section HTML
2. Remove navigation link
3. Update any links pointing to it

### Add More Services:
1. Copy a service card div
2. Paste after the last service card
3. Update content
4. CSS Grid will auto-adjust

### Change Button Styles:
In `styles.css` (lines 80-105):
```css
.btn-primary {
    /* Modify colors, padding, etc. */
}
```

## Getting Help

- Check browser console (F12) for errors
- Validate HTML: https://validator.w3.org
- Validate CSS: https://jigsaw.w3.org/css-validator
- Test mobile: Chrome DevTools Device Mode

## Backup Before Changes

Always keep a backup:
```bash
cp -r xzellerate xzellerate-backup
```

Or use Git:
```bash
git add .
git commit -m "Backup before customization"
```

---

**Take your time with customization - small changes make big impacts!**
