/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://guapatlu.com',
  generateRobotsTxt: false, // we maintain a custom robots.txt in /public
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin', '/admin-login', '/api/*'],
  transform: async (config, path) => {
    // Boost priority for key landing pages
    let priority = 0.7;
    if (path === '/') priority = 1.0;
    if (['/menu', '/online', '/points', '/register', '/contact'].includes(path)) {
      priority = 0.9;
    }

    return {
      loc: path,
      changefreq: 'weekly',
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};

module.exports = config;




