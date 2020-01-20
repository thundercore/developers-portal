/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  algolia: {
    apiKey: '2ba8e14009945c804c7cd5beba150e08',
    indexName: 'thundercore_developers-cn',
    algoliaOptions: {} // Optional, if provided by Algolia
  },
  title: 'Developer Portal', // Title for your website.
  tagline: 'Power your DApps with ThunderCore',
  url: 'https://www.thundercore.com',
  baseUrl: '/', // Base URL for your project */

  // Used for publishing and more
  projectName: 'sc-portal-cn',
  organizationName: 'ThunderCore',

  favicon: 'img/favicon/favicon.ico',

  headerLinks: [
    { href: 'https://thundercore.com', label: 'ThunderCore.com' },
    { doc: 'deploy-your-own-game', label: '文档' },
    { doc: 'faqs/general', label: '常问问题' },
    { href: 'https://developer.thundercore.com', label: '🌐English'}
  ],

  /* path to images for header/footer */
  headerIcon: 'img/support center_header img_cn@2x.png',
  footerIcon: 'img/thundercore_icon.svg',

  disableHeaderTitle: true,

  /* Colors for website */
  colors: {
    primaryColor: '#fa7516',
    secondaryColor: '#383838'
  },

  /* Custom fonts for website */
  fonts: {
    myFont: ['Proxima Nova', 'Serif'],
    myOtherFont: ['-apple-system', 'system-ui']
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `© Thunder Token Ltd. All Rights Reserved.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default'
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/thundercore_icon.svg',
  twitterImage: 'img/thundercore_icon.svg',

  gaTrackingId: 'UA-134150236-9',
  customDocsPath: 'docs-cn'
}

module.exports = siteConfig
