/**
 * Logo Export Script
 * 
 * This script uses Puppeteer to export the Transaktio logo at various sizes
 * for social media and marketing use.
 * 
 * Install dependencies:
 * npm install --save-dev puppeteer
 * 
 * Run:
 * node scripts/export-logos.js
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'logos');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const sizes = [
  // Profile Pictures
  { name: 'twitter-profile', size: 400, label: 'Twitter Profile' },
  { name: 'facebook-profile', size: 180, label: 'Facebook Profile' },
  { name: 'linkedin-profile', size: 300, label: 'LinkedIn Profile' },
  { name: 'instagram-profile', size: 110, label: 'Instagram Profile' },
  { name: 'discord-profile', size: 128, label: 'Discord Profile' },
  // High-res
  { name: 'high-res', size: 1024, label: 'High-res PNG' },
  // Favicon
  { name: 'favicon-32', size: 32, label: 'Favicon 32x32' },
  { name: 'favicon-16', size: 16, label: 'Favicon 16x16' },
];

const banners = [
  { name: 'twitter-header', width: 1500, height: 500, label: 'Twitter Header' },
  { name: 'facebook-cover', width: 820, height: 312, label: 'Facebook Cover' },
  { name: 'linkedin-banner', width: 1128, height: 191, label: 'LinkedIn Banner' },
  { name: 'github', width: 1200, height: 630, label: 'GitHub' },
];

async function exportLogos() {
  console.log('🚀 Starting logo export...\n');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    
    // Navigate to the logo export page
    const port = process.env.PORT || 3000;
    await page.goto(`http://localhost:${port}/logo-export`, {
      waitUntil: 'networkidle0',
    });

    // Wait for logos to render
    await page.waitForTimeout(2000);

    // Export profile pictures
    console.log('📸 Exporting profile pictures...');
    for (const item of sizes) {
      const selector = `[data-logo-size="${item.size}"]`;
      
      // Try to find the logo element
      const element = await page.$(`text=${item.label}`);
      if (element) {
        const boundingBox = await element.boundingBox();
        if (boundingBox) {
          // Find the logo container
          const logoContainer = await page.evaluateHandle((label) => {
            const elements = Array.from(document.querySelectorAll('*'));
            for (const el of elements) {
              if (el.textContent?.includes(label)) {
                return el.closest('.bg-slate-800')?.querySelector('svg')?.parentElement;
              }
            }
            return null;
          }, item.label);

          if (logoContainer) {
            const screenshot = await logoContainer.screenshot({
              type: 'png',
              omitBackground: true,
            });
            
            const filePath = path.join(OUTPUT_DIR, `${item.name}.png`);
            fs.writeFileSync(filePath, screenshot);
            console.log(`  ✅ ${item.label}: ${item.size}×${item.size}px`);
          }
        }
      }
    }

    // Export banners
    console.log('\n📐 Exporting banners...');
    for (const banner of banners) {
      const selector = `[data-banner="${banner.name}"]`;
      const element = await page.$(selector);
      
      if (element) {
        const screenshot = await element.screenshot({
          type: 'png',
          omitBackground: false,
        });
        
        const filePath = path.join(OUTPUT_DIR, `${banner.name}.png`);
        fs.writeFileSync(filePath, screenshot);
        console.log(`  ✅ ${banner.label}: ${banner.width}×${banner.height}px`);
      }
    }

    console.log(`\n✨ Export complete! Files saved to: ${OUTPUT_DIR}`);
  } catch (error) {
    console.error('❌ Error exporting logos:', error);
    console.log('\n💡 Tip: Make sure the dev server is running (npm run dev)');
  } finally {
    await browser.close();
  }
}

// Run if called directly
if (require.main === module) {
  exportLogos().catch(console.error);
}

module.exports = { exportLogos };

