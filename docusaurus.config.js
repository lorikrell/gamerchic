/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Gaming Resources',
  tagline: 'Art, maps, templates, content, and much more!',
  url: 'https://sonceri.art',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Masterworks', // Usually your GitHub org/user name.
  projectName: 'gamerchic', // Usually your repo name.
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Material+Icons',
  ],
  trailingSlash: false,
  themeConfig: {
    imageZoom: {
      // CSS selector to apply the plugin to, defaults to '.markdown img'
      selector: '.markdown img',
      selector: '.markdown :not(em) > img',
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      /*options: {
        margin: 24,
        background: '#BADA55',
        scrollOffset: 0,
        container: '#zoom-container',
        template: '#zoom-template',
      },*/
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
    },
    //Algolia
    algolia: {
      apiKey: '87acff29fbd88735d0b9d3f7456f7608',
      appId: 'BH4D9OD16A',
      indexName: 'sonceri',

      // Optional: see doc section below
      contextualSearch: false,

      // Optional: see doc section below
      //appId: 'YOUR_APP_ID',

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    navbar: {
      title: 'Sonceri | Gamerchic',
      logo: {
        alt: 'My Site Logo',
        src: 'img/favicon.png',
      },
      style: 'dark',
      items: [
        {
          type: 'dropdown',
          label: 'Game Resources',
          items: [
              {
                  label: 'Graphics and Guides',
                  to: 'docs/intro',
                },
                {
                  label: 'Player Journals',
                  to: 'docs/photoshop/journals',
                },
                {
                  label: 'Running Events',
                  to: 'docs/events-campaigns',
                },
                {
                  label: 'Vehicle Battles',
                  to: 'docs/warcraft/intro',
                },
                {
                  label: 'Spiritboard',
                  to: 'spiritboard',
                },
                
              ],
        },
        {
              type: 'dropdown',
              label: 'Settings',
              items: [
                {
                  label: 'The Magesterium',
                  to: 'magisterium',
                },
                {
                  label: 'Silver Legacy',
                  to: 'docs/setting/silver-legacy',
                },
                {
                  label: 'Exalted',
                  to: 'docs/exalted/resources',
                },
                {
                  label: 'Warcraft Conquest',
                  to: 'Conquest',
                },
                {
                  label: 'WC In Deaths Shadow',
                  to: 'DeathShadow',
                },
                {
                  label: 'WC Tropic Sunder',
                  to: 'TropicSunder',
                },
                {
                  label: 'WC Thornwake',
                  to: 'thornwake',
                },
                {
                  label: 'WC Everfrost',
                  to: 'everfrost',
                },
                {
                  label: 'WC Lichfall',
                  to: 'lichfall',
                },
                {
                  label: 'World of Darkness',
                  to: 'docs/w-o-d/intro',
                },
                  ],
                },
        { label: 'About Sonceri', to: 'about' },
        {to: '/blog', label: 'Game Blog', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Sonceri',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/lorioliodraws',
            },
            {
              label: 'Ko-fi',
              href: 'https://ko-fi.com/sonceriart',
            },
            {
              label: 'Art Portfolio',
              href: 'https://lorikrell.myportfolio.com/',
            },
          ],
        },
        {
          title: 'Projects',
          items: [
            {
              label: 'Warcraft Conquest Discord',
              href: 'https://tinyurl.com/warcraftconquestdiscord',
            },
            {
              label: 'Conquest Campaigns',
              href: 'https://soncert.art/warcraft-conquest/warcraft-conquest.html',
            }
          ],
        },
        {
          title: 'Inspiration',
          items: [
            {
              label: 'Sonc Pinterest',
              to: 'https://www.pinterest.com/leareth/_saved/',
            },
            {
              label: 'Hearthstone Art',
              to: 'https://hearthstone.fandom.com/wiki/Full_art',
            },
          ],
        },
      ],
      logo: {
        alt: 'Sonceri',
        src: 'img/logo-sonc.png',
        href: 'https://sonceri.art'
      },
      copyright: `Copyright © ${new Date().getFullYear()} Masterworks | Built with Docusaurus`,
    },
    colorMode: {
      defaultMode: 'dark',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Hiding not open source
          //editUrl:
          //  'https://github.com/facebook/docusaurus/edit/master/website/',
        
        admonitions: {
            keywords: ['note', 'tip', 'info', 'caution', 'danger', 'conquest', 'dungeon', 'exalted', 'gamerchic', 'homebrew', 'shadowrun', 'sonceri', 'wod'],
            extendDefaults: true,
        },
      },
        blog: {
          showReadingTime: false,
          postsPerPage: 'ALL',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/edit/master/website/blog/',
          admonitions: {
            keywords: ['note', 'tip', 'info', 'caution', 'danger', 'conquest', 'dungeon', 'exalted', 'gamerchic', 'homebrew', 'shadowrun', 'sonceri', 'wod'],
            extendDefaults: true,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
plugins: [
    'docusaurus-plugin-sass',
    '@docusaurus/plugin-client-redirects',
    'plugin-image-zoom',
    'react-iframe'
  ]
};
