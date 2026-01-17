const fs = require('fs')
const path = require('path')

// Check if sharp is available
let sharp
try {
  sharp = require('sharp')
} catch (e) {
  console.log('⚠️  Sharp not found. Please run: yarn install')
  console.log('📝 Alternative: Open public/generate-pngs.html in your browser to generate PNGs')
  process.exit(0)
}

async function generateAssets() {
  const publicDir = path.join(__dirname, '..', 'public')
  
  console.log('🎨 Generating PNG assets from SVG files...')

  try {
    // Generate icon.png (1024x1024)
    if (fs.existsSync(path.join(publicDir, 'icon.svg'))) {
      await sharp(path.join(publicDir, 'icon.svg'))
        .resize(1024, 1024)
        .png()
        .toFile(path.join(publicDir, 'icon.png'))
      console.log('✅ Generated icon.png (1024x1024)')
    } else {
      console.log('⚠️  icon.svg not found, skipping icon.png')
    }

    // Generate splash.png (1200x630)
    if (fs.existsSync(path.join(publicDir, 'splash.svg'))) {
      await sharp(path.join(publicDir, 'splash.svg'))
        .resize(1200, 630)
        .png()
        .toFile(path.join(publicDir, 'splash.png'))
      console.log('✅ Generated splash.png (1200x630)')
    } else {
      console.log('⚠️  splash.svg not found, skipping splash.png')
    }

    // Generate og-image.png (1200x630)
    if (fs.existsSync(path.join(publicDir, 'og-image.svg'))) {
      await sharp(path.join(publicDir, 'og-image.svg'))
        .resize(1200, 630)
        .png()
        .toFile(path.join(publicDir, 'og-image.png'))
      console.log('✅ Generated og-image.png (1200x630)')
    } else {
      console.log('⚠️  og-image.svg not found, skipping og-image.png')
    }

    console.log('✨ All assets generated successfully!')
  } catch (error) {
    console.error('❌ Error generating assets:', error)
    console.log('📝 Alternative: Open public/generate-pngs.html in your browser to generate PNGs')
    process.exit(1)
  }
}

generateAssets()
