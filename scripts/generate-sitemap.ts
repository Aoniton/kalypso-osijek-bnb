import { writeFileSync } from 'fs';
import { join } from 'path';

// Base URL - update this with your actual domain
const BASE_URL = 'https://your-domain.com';

// Route configuration with priorities and change frequencies
const routes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/apartment', priority: '0.9', changefreq: 'weekly' },
  { path: '/wellness', priority: '0.9', changefreq: 'weekly' },
  { path: '/gallery', priority: '0.8', changefreq: 'weekly' },
  { path: '/location', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/faq', priority: '0.7', changefreq: 'monthly' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
];

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const publicPath = join(process.cwd(), 'public', 'sitemap.xml');
  writeFileSync(publicPath, sitemap, 'utf-8');
  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
}

generateSitemap();
