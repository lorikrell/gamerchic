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
          label: 'Find Resources',
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
                  sublabel: 'Posters & notice board',
                  to: 'docs/photoshop/posters',
                },
                {
                  label: 'Warcraft Conquest',
                  sublabel: 'Moon Guard WC campaigns',
                  to: 'Conquest',
                },
                {
                  label: 'WC Resources',
                  sublabel: 'Rules, guides, & tokens',
                  to: 'docs/wow-conquest/intro',
                },
                {
                  label: 'WoW Emojis',
                  sublabel: 'Free custom emojis',
                  to: 'docs/photoshop/wow-emoji',
                },
                {
                  label: 'Vehicle Battle Tokens',
                  sublabel: 'Creat tokens & maps',
                  to: 'docs/wow-conquest/token',
                },
                {
                  label: 'Event Cards',
                  sublabel: 'Photoshop templates',
                  to: 'docs/wow-conquest/event-cards',
                },
                {
                  label: 'Loot Cards',
                  sublabel: 'Photoshop templates',
                  to: 'docs/wow-conquest/boss-item-cards',
                },
                {
                  label: 'Exalted',
                  sublabel: 'Solars & Lunars',
                  to: 'docs/exalted/resources',
                },
                {
                  label: 'World of Darkness',
                  sublabel: 'Vampires, Wolves, & more',
                  to: 'docs/w-o-d/intro',
                }, 
              ],
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
                  sublabel: 'Plaguelands',
                  to: 'lichfall',
                },
                {
                  label: 'Everfrost',
                  sublabel: 'Alterac',
                  to: 'everfrost',
                },
                {
                  label: 'Thornwake',
                  sublabel: 'The Barrens',
                  to: 'thornwake',
                },
                {
                  label: 'Tropic Sunder',
                  sublabel: 'Stranglethorn Vale',
                  to: 'TropicSunder',
                },
                {
                  label: 'In Death\'s Shadow',
                  sublabel: 'Icecrown Citadel',
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
