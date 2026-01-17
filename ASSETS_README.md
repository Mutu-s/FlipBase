# Asset Files Guide

This guide explains the asset files needed for FlipBase Farcaster Mini App.

## 📁 Required Files

### 1. icon.png
- **Size**: 1024x1024 pixels
- **Format**: PNG
- **Location**: `public/icon.png`
- **Usage**: Mini app icon displayed in Farcaster clients

### 2. splash.png
- **Size**: 1200x630 pixels
- **Format**: PNG
- **Location**: `public/splash.png`
- **Usage**: Splash screen shown when miniapp loads

### 3. og-image.png
- **Size**: 1200x630 pixels
- **Format**: PNG
- **Location**: `public/og-image.png`
- **Usage**: Open Graph image for social media embeds

## 🎨 Generated Files

I've created SVG source files for all three assets:
- `public/icon.svg` - Source for icon.png
- `public/splash.svg` - Source for splash.png
- `public/og-image.svg` - Source for og-image.png

## 🔧 Generating PNG Files

### Method 1: Using Node.js Script (Recommended)

1. Make sure dependencies are installed:
```bash
yarn install
```

2. Run the generation script:
```bash
yarn generate-assets
```

This will automatically convert all SVG files to PNG format.

### Method 2: Using Browser Tool

1. Start your development server:
```bash
yarn dev
```

2. Open in browser:
```
http://localhost:3000/generate-pngs.html
```

3. Click the buttons to generate and download PNG files

4. Move the downloaded PNG files to the `public/` directory

### Method 3: Online Converter

1. Open any SVG to PNG converter (e.g., https://svgtopng.com/)
2. Upload the SVG files
3. Set the correct dimensions:
   - icon.svg → 1024x1024
   - splash.svg → 1200x630
   - og-image.svg → 1200x630
4. Download and save to `public/` directory

## ✅ Verification

After generating the PNG files, verify they exist:
```bash
ls public/*.png
```

You should see:
- `public/icon.png`
- `public/splash.png`
- `public/og-image.png`

## 🎨 Customization

To customize the assets:

1. Edit the SVG files in `public/`:
   - `icon.svg` - Modify colors, text, or design
   - `splash.svg` - Update splash screen design
   - `og-image.svg` - Change Open Graph image

2. Regenerate PNG files using one of the methods above

## 📝 Notes

- SVG files are vector-based and can be scaled without quality loss
- PNG files are raster images optimized for web use
- The manifest file (`public/.well-known/farcaster.json`) references these PNG files
- Make sure all PNG files are accessible via HTTPS in production
