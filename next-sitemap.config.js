const fs = require('fs');
const path = require('path');

const siteUrl = 'https://www.code4mates.com';

// Helper to get IDs from JSON files
function getIdsFromJson(jsonPath) {
  try {
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    return Array.isArray(data) ? data.map(item => item.id) : [];
  } catch (e) {
    return [];
  }
}

const blogIds = getIdsFromJson(path.join(__dirname, 'public/assets/jsonData/blog/BlogData.json'));
const projectIds = getIdsFromJson(path.join(__dirname, 'public/assets/jsonData/project/Project2Data.json'));
const teamIds = getIdsFromJson(path.join(__dirname, 'public/assets/jsonData/team/TeamData.json'));

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  outDir: 'public',
  // Custom additionalPaths to manually add dynamic routes
  async additionalPaths(config) {
    const blogPaths = blogIds.map(id => ({ loc: `/blog-single/${id}` }));
    const blogSidebarPaths = blogIds.map(id => ({ loc: `/blog-single-with-sidebar/${id}` }));
    const projectPaths = projectIds.map(id => ({ loc: `/project-details/${id}` }));
    const teamPaths = teamIds.map(id => ({ loc: `/team-details/${id}` }));
    return [
      ...blogPaths,
      ...blogSidebarPaths,
      ...projectPaths,
      ...teamPaths,
    ];
  },
}; 