// variables.ts
// Configuration variables for Cardano.org website

interface SocialLinks {
    twitter: string;
    telegram: string;
    discord: string;
    github: string;
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
    repository: 'https://github.com/cardano-foundation/www-cardano-org',
    
    // Branch to use for documentation and blog editing links
    branch: 'main',
  
    // Site version
    siteVersion: '1.0.0',
    
    // Environment detection
    environment: process.env.NODE_ENV || 'development',
  
    // Social media and community links
    socialLinks: {
      twitter: 'https://twitter.com/Cardano',
      telegram: 'https://t.me/CardanoAnnouncements',
      discord: 'https://discord.gg/cardano',
      github: 'https://github.com/cardano-foundation'
    }
  };
  
  export default vars;