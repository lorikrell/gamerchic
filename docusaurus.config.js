/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Gaming Resources',
  tagline: 'Art, maps, templates, content, and much more!',
  url: 'https://sonceri.art',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gamerchic', // Usually your GitHub org/user name.
  projectName: 'gamerchic', // Usually your repo name.
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Material+Icons',
  ],
  trailingSlash: false,
  themeConfig: {
    imageZoom: {
      // CSS selector to apply the plugin to, defaults to '.markdown img'
      selector: '.markdown img',
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
                  label: 'Graphic Resources',
                  to: 'docs/intro',
                },
                {
                  label: 'Running Events',
                  to: 'docs/events-campaigns',
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
                  to: 'docs/wow-conquest/intro',
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
                  label: 'WoW Logos',
                  to: 'docs/photoshop/wow-logo',
                },
                {
                  label: 'Vehicle Battle Tokens',
                  to: 'docs/wow-conquest/token',
                },
                {
                  label: 'Event Cards',
                  to: 'docs/wow-conquest/event-cards',
                },
                {
                  label: 'Loot Cards',
                  to: 'docs/wow-conquest/boss-item-cards',
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
            {
              label: 'Avatars',
              to: 'docs/photoshop/avatars',
            },
          ]
        },
        {
          type: 'dropdown',
          label: 'Warcraft Conquest',
          items: [
            {
              label: 'Warcraft Conquest',
              to: 'Conquest',
            },
            {
              label: 'WC Resources',
              to: 'docs/wow-conquest/intro',
            },
            {
                  label: 'Lichfall',
                  to: 'lichfall',
                },
                {
                  label: 'Everfrost',
                  to: 'everfrost',
                },
                {
                  label: 'Thornwake',
                  to: 'thornwake',
                },
                {
                  label: 'Tropic Sunder',
                  to: 'TropicSunder',
                },
                {
                  label: 'In Death\'s Shadow',
                  to: 'DeathShadow',
                },
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
              label: 'Patreon',
              href: 'https://www.patreon.com/sonceri',
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
            },
            {
              label: 'Coalition of the Horde',
              href: 'https://discord.gg/hkXmPPb6BB',
            },
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
      copyright: `Copyright © ${new Date().getFullYear()} Gamerchic | Built with Docusaurus`,
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
