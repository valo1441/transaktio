# Transaktio Logo Export Guide

This guide explains how to export the Transaktio logo in various formats and sizes for social media and marketing use.

## 📁 Available Files

### 1. Standalone SVG
- **Location**: `public/logo.svg`
- **Format**: SVG (vector, scalable)
- **Use**: Web, print, any size

### 2. Logo Export Page
- **URL**: `http://localhost:3000/logo-export`
- **Purpose**: Visual preview of all required sizes
- **Method**: Manual screenshot export

## 🎯 Required Sizes

### Profile Pictures
- **Twitter**: 400×400px
- **Facebook**: 180×180px
- **LinkedIn**: 300×300px
- **Instagram**: 110×110px
- **Discord**: 128×128px
- **High-res**: 1024×1024px
- **Favicon 32**: 32×32px
- **Favicon 16**: 16×16px

### Banners & Cover Photos
- **Twitter Header**: 1500×500px
- **Facebook Cover**: 820×312px
- **LinkedIn Banner**: 1128×191px
- **GitHub**: 1200×630px

## 📸 Export Methods

### Method 1: Browser DevTools (Recommended)

1. **Start the dev server**:
   ```bash
   npm run dev
   ```

2. **Navigate to**: `http://localhost:3000/logo-export`

3. **For each logo**:
   - Right-click on the logo container
   - Select "Inspect" or "Inspect Element"
   - In DevTools, right-click the `<div>` containing the logo
   - Select "Capture node screenshot"
   - Save the image

### Method 2: Browser Screenshot Extensions

1. Install a screenshot extension:
   - **Nimbus Screenshot** (Chrome/Firefox)
   - **Full Page Screen Capture** (Chrome)
   - **FireShot** (Chrome/Firefox)

2. Navigate to `http://localhost:3000/logo-export`

3. Use the extension to capture specific areas

### Method 3: Automated Script (Puppeteer)

1. **Install Puppeteer**:
   ```bash
   npm install --save-dev puppeteer
   ```

2. **Start the dev server**:
   ```bash
   npm run dev
   ```

3. **Run the export script**:
   ```bash
   node scripts/export-logos.js
   ```

4. **Find exported files** in `public/logos/` directory

### Method 4: Online SVG to PNG Converters

1. Use the SVG file: `public/logo.svg`

2. Upload to online converters:
   - **CloudConvert**: https://cloudconvert.com/svg-to-png
   - **Convertio**: https://convertio.co/svg-png/
   - **SVG2PNG**: https://svgtopng.com/

3. Set custom dimensions for each size

4. Download the PNG files

### Method 5: Image Editing Software

1. **Open** `public/logo.svg` in:
   - Adobe Illustrator
   - Inkscape (free)
   - Figma
   - Sketch

2. **Export** at each required size:
   - Set canvas size to target dimensions
   - Export as PNG with transparent background
   - Use high DPI (2x or 3x) for better quality

## 🎨 Logo Specifications

### Colors
- **Circle (Purple)**: `rgba(139, 92, 246, 0.9)` - RGB(139, 92, 246)
- **Hexagon (Blue)**: `rgba(59, 130, 246, 0.9)` - RGB(59, 130, 246)
- **Diamond (Teal)**: `rgba(20, 184, 166, 0.9)` - RGB(20, 184, 166)

### Background
- **Transparent** for profile pictures
- **Gradient** for banners (slate-900 to slate-800)

### File Naming Convention
```
twitter-profile.png      (400×400px)
facebook-profile.png     (180×180px)
linkedin-profile.png     (300×300px)
instagram-profile.png    (110×110px)
discord-profile.png      (128×128px)
high-res.png            (1024×1024px)
favicon-32.png          (32×32px)
favicon-16.png          (16×16px)
twitter-header.png       (1500×500px)
facebook-cover.png       (820×312px)
linkedin-banner.png      (1128×191px)
github.png              (1200×630px)
```

## ✅ Quality Checklist

Before using exported logos, verify:

- [ ] Transparent background (for profile pictures)
- [ ] Correct dimensions (exact pixel size)
- [ ] High quality (no pixelation)
- [ ] Proper aspect ratio
- [ ] Colors match brand guidelines
- [ ] File format appropriate (PNG for transparency, JPG for photos)

## 📝 Notes

- The logo is designed to work on both light and dark backgrounds
- For best results, use PNG format with transparency
- SVG format is recommended for web use (scalable, small file size)
- Always test logos on the actual platform before finalizing

## 🚀 Quick Start

1. **View all sizes**: Visit `http://localhost:3000/logo-export`
2. **Export manually**: Use browser DevTools screenshot feature
3. **Or automate**: Run `node scripts/export-logos.js` (requires Puppeteer)

---

**Last Updated**: Logo export guide created
**Status**: Ready for use

