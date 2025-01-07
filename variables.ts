// variables.ts
// Configuration variables for Cardano.org website

interface SocialLinks {
  twitter: string;
  telegram: string;
  github: string;
  discord?: string;
}

interface SiteVariables {
  repository: string;
  branch: string;
  siteVersion: string;
  environment: string;
  socialLinks: SocialLinks;
}

const vars: SiteVariables = {
  // Repository configuration for GitHub-related settings
  repository: 'https://github.com/larestrepo/moxietech-website',

  // Branch to use for documentation and blog editing links
  branch: 'main',

  // Site version
  siteVersion: '1.0.0',

  // Environment detection
  environment: process.env.NODE_ENV || 'development',

  // Social media and community links
  socialLinks: {
    twitter: 'https://x.com/LARestrepoMu',
    telegram: 'https://t.me/MoxiePoolCardano',
    github: 'https://github.com/larestrepo'
  }
};

export default vars;