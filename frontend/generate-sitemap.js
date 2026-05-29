import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://ah-career-academy.vercel.app';
const API_URL = 'https://ah-career-academy.onrender.com/api';

const staticRoutes = [
  { path: '', changefreq: 'daily', priority: '1.0' },
  { path: '/about', changefreq: 'weekly', priority: '0.8' },
  { path: '/careers', changefreq: 'daily', priority: '0.8' },
  { path: '/reviews', changefreq: 'weekly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.7' },
  { path: '/blog', changefreq: 'weekly', priority: '0.7' },
  { path: '/kids-training', changefreq: 'weekly', priority: '0.9' },
  { path: '/programs/job-ready', changefreq: 'monthly', priority: '0.9' },
  { path: '/programs/job-acceleration', changefreq: 'monthly', priority: '0.9' },
];

const kidsRoutes = [
  { path: '/kids-course/scratch-programming', changefreq: 'monthly', priority: '0.8' },
  { path: '/kids-course/canva-designing', changefreq: 'monthly', priority: '0.8' },
  { path: '/kids-course/spoken-english', changefreq: 'monthly', priority: '0.8' },
  { path: '/kids-course/future-with-ai', changefreq: 'monthly', priority: '0.8' },
];

const skillCourses = [
  { path: '/courses/skill-development/java-full-stack', changefreq: 'monthly', priority: '0.8' },
  { path: '/courses/skill-development/python-full-stack', changefreq: 'monthly', priority: '0.8' },
  { path: '/courses/skill-development/data-analytics', changefreq: 'monthly', priority: '0.8' },
];

async function generateSitemap() {
  console.log('Generating dynamic sitemap...');
  const urls = [];

  // 1. Add static pages
  staticRoutes.forEach((route) => {
    urls.push({
      loc: `${BASE_URL}${route.path}`,
      changefreq: route.changefreq,
      priority: route.priority,
      lastmod: new Date().toISOString().split('T')[0],
    });
  });

  // 2. Add kids courses
  kidsRoutes.forEach((route) => {
    urls.push({
      loc: `${BASE_URL}${route.path}`,
      changefreq: route.changefreq,
      priority: route.priority,
      lastmod: new Date().toISOString().split('T')[0],
    });
  });

  // 3. Add predefined skill courses
  skillCourses.forEach((route) => {
    urls.push({
      loc: `${BASE_URL}${route.path}`,
      changefreq: route.changefreq,
      priority: route.priority,
      lastmod: new Date().toISOString().split('T')[0],
    });
  });

  // 4. Try fetching dynamic courses from backend API
  try {
    const res = await fetch(`${API_URL}/courses`);
    if (res.ok) {
      const data = await res.json();
      const courses = Array.isArray(data) ? data : data.data || [];
      courses.forEach((course) => {
        if (course._id) {
          urls.push({
            loc: `${BASE_URL}/courses/${course._id}`,
            changefreq: 'weekly',
            priority: '0.7',
            lastmod: new Date().toISOString().split('T')[0],
          });
        }
      });
      console.log(`Fetched ${courses.length} courses from API.`);
    } else {
      console.warn('Backend API courses returned error status:', res.status);
    }
  } catch (error) {
    console.warn('Failed to fetch dynamic courses from backend API (offline or sleeping):', error.message);
  }

  // 5. Try fetching dynamic jobs from backend API
  try {
    const res = await fetch(`${API_URL}/jobs`);
    if (res.ok) {
      const data = await res.json();
      const jobs = Array.isArray(data) ? data : data.data || [];
      jobs.forEach((job) => {
        const idOrSlug = job.slug || job._id;
        if (idOrSlug) {
          urls.push({
            loc: `${BASE_URL}/jobs/${idOrSlug}`,
            changefreq: 'weekly',
            priority: '0.7',
            lastmod: new Date().toISOString().split('T')[0],
          });
        }
      });
      console.log(`Fetched ${jobs.length} jobs from API.`);
    } else {
      console.warn('Backend API jobs returned error status:', res.status);
    }
  } catch (error) {
    console.warn('Failed to fetch dynamic jobs from backend API (offline or sleeping):', error.message);
  }

  // 6. Construct Sitemap XML
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  // 7. Ensure public dir exists and write sitemap.xml
  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
  console.log(`Sitemap written successfully to ${path.join(publicDir, 'sitemap.xml')} with ${urls.length} URLs.`);

  // 8. Generate robots.txt pointing to the sitemap
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf8');
  console.log(`robots.txt written successfully to ${path.join(publicDir, 'robots.txt')}`);
}

generateSitemap();
