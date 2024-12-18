import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import vars from './variables';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)


const config: Config = {
  title: 'MOXIETECH',
  tagline: 'Blockchain and technology solutions',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://moxietech.co',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'larestrepo', // Usually your GitHub org/user name.
  projectName: 'moxietech-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',

  customFields: {
    repository: `${vars.repository}`,
    branch: `${vars.branch}`,

    // put your blockfrost id in your .env file 
    // REACT_APP_BLOCKFROST_APP_PROJECT_ID: process.env.REACT_APP_BLOCKFROST_APP_PROJECT_ID,
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `${vars.repository}/edit/${vars.branch}`,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `${vars.repository}/edit/${vars.branch}`,
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'MoxieTech',
      logo: {
        alt: 'MoxieTech Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          // type: 'docSidebar',
          // sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
          to: '/docs/intro',
        },
        {
          // type: 'docSidebar',
          // sidebarId: 'moxiePoolSidebar',
          position: 'left',
          label: 'MoxiePool',
          to: '/moxiepool/intro',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: `${vars.repository}/edit/${vars.branch}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'X',
              href: 'https://x.com/LARestrepoMu',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: `${vars.repository}/edit/${vars.branch}`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MoxieTech, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
