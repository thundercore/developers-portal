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
    apiKey: process.env.ALGOLIA_API_KEY_CN,
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
    { href: 'https://www.thundercore.com', label: 'ThunderCore.com' },
    { href: 'https://developers-cn.thundercore.com/docs/deploy-your-own-game/', label: '开发者中心' },
    { doc: 'faqs/general', label: '用户支持中心' },
    { href: 'https://support-center.thundercore.com/docs/faqs/general/', label: '🌐English'}
  ],

  /* path to images for header/footer */
  headerIcon: 'img/support center_header_image.png',
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
  copyright: `© All Rights Reserved by Thunder Token Ltd.`,

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

  gaTrackingId: process.env.GA_ID,
  customDocsPath: 'docs-cn'
}

module.exports = siteConfig
