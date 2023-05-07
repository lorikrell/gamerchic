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
          label: 'Dungeon Masters',
          items: [
              {
                  label: 'Graphics and Guides',
                  to: 'docs/intro',
                },
                {
                  label: 'Running Events',
                  to: 'docs/events-campaigns',
                },
                {
                  label: 'Guide to Boss Battles',
                  to: 'docs/boss',
                },
                {
                  label: 'Guide to Investigations',
                  to: 'docs/investigations',
                },
                {
                  label: 'Guide to Stealth and Spies',
                  to: 'docs/stealth',
                },
                {
                  label: 'Guide to Horror',
                  to: 'docs/horror',
                },
                {
                  label: 'One Page Adventures',
                  to: 'docs/onepage',
                },
                {
                  label: 'Warcraft Resources',
                  to: 'docs/warcraft/intro',
                },
                {
                  label: 'WoW Emojis',
                  to: 'docs/photoshop/wow-emoji',
                },
                {
                  label: 'Avatars',
                  to: 'docs/photoshop/avatars',
                },
                {
                  label: 'Banners',
                  to: 'docs/photoshop/banners',
                },
                {
                  label: 'WoW Logos',
                  to: 'docs/photoshop/wow-logo',
                },
                {
                  label: 'Vehicle Battle Tokens',
                  to: 'docs/warcraft/token',
                },
                {
                  label: 'Event Cards',
                  to: 'docs/warcraft/event-cards',
                },
                {
                  label: 'Loot Cards',
                  to: 'docs/warcraft/boss-item-cards',
                },
                {
                  label: 'Discord Event Banner',
                  to: 'docs/photoshop/discord-banner',
                },
                {
                  label: 'Exalted',
                  to: 'docs/exalted/resources',
                },
                {
                  label: 'World of Darkness',
                  to: 'docs/w-o-d/intro',
                }, 
              ],
        },
        {
          type: 'dropdown',
          label: 'Players',
          items: [
            {
              label: 'Player Journals',
              to: 'docs/photoshop/journals',
            },
            {
              label: 'Wax Seals',
              to: 'docs/photoshop/wax-seals',
            },
            {
              label: 'Coins',
              to: 'docs/photoshop/coins',
            },
            {
              label: 'Crests',
              to: 'docs/photoshop/crest',
            },
            {
              label: 'Banners',
              to: 'docs/photoshop/banners',
            },
            {
              label: 'Avatars',
              to: 'docs/photoshop/avatars',
            },
            {
              label: 'Scrollcase',
              sublabel: 'Scrolls and letters',
              to: 'docs/photoshop/scrollcase',
            },
            {
              label: 'Posters & Notices',
              to: 'docs/photoshop/posters',
            },
            {
              label: 'WoW Emojis',
              to: 'docs/photoshop/wow-emoji',
            },
          ]
        },
        {
          type: 'dropdown',
          label: 'Warcraft',
          items: [
            {
              label: 'Warcraft Resources',
              to: 'docs/warcraft/intro',
            },
            {
              label: 'WoW Logos',
              to: 'docs/photoshop/wow-logo',
            },
            {
              label: 'WoW Emojis',
              to: 'docs/photoshop/wow-emoji',
            },
            {
              label: 'Event Cards',
              to: 'docs/warcraft/event-cards',
            },
            {
              label: 'Discord Event Banner',
              to: 'docs/photoshop/discord-banner',
            },
            {
              label: 'Coalition of the Horde',
              to: 'Coalition',
            },
            {
              label: 'Warcraft Conquest',
              to: 'Conquest',
            }
              ],
            },
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
              label: 'Coalition of the Horde',
              href: 'https://discord.gg/hkXmPPb6BB',
            },
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
            tag: ':::',
            keywords: ['note', 'tip', 'info', 'caution', 'danger', 'conquest', 'dungeon', 'exalted', 'gamerchic', 'homebrew', 'shadowrun', 'sonceri', 'wod'],
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
            tag: ':::',
            keywords: ['note', 'tip', 'info', 'caution', 'danger', 'conquest', 'dungeon', 'exalted', 'gamerchic', 'homebrew', 'shadowrun', 'sonceri', 'wod'],
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
