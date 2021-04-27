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
    apiKey: process.env.ALGOLIA_API_KEY,
    indexName: 'thundercore_developers',
    algoliaOptions: {} // Optional, if provided by Algolia
  },
  title: 'Support Center', // Title for your website.
  tagline: 'Power your DApps with ThunderCore',
  url: 'https://www.thundercore.com',
  baseUrl: '/', // Base URL for your project */

  // Used for publishing and more
  projectName: 'sc-portal',
  organizationName: 'ThunderCore',

  favicon: 'img/favicon/favicon.ico',

  headerLinks: [
    { href: 'https://www.thundercore.com', label: 'ThunderCore.com' },
    { doc: 'deploy-your-own-game', label: 'Developers' },
    { href: 'https://thundercore.zendesk.com/hc/en-us/categories/900001361023-English', label: 'Support Center' },
    { href: 'https://thundercore.zendesk.com/hc/en-us/categories/900001362243-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87', label: '🌐简体中文'}
  ],

  /* path to images for header/footer */
  headerIcon: 'img/support_center_header_logo.png',
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
  scripts: [
    'https://buttons.github.io/buttons.js'
    ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/thundercore_icon.svg',
  twitterImage: 'img/thundercore_icon.svg',

//  docsSideNavCollapsible: true,

  gaTrackingId: process.env.GA_ID,
  customDocsPath: 'docs-en'
}

module.exports = siteConfig
