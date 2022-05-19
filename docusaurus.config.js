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
          label: 'Find Resources',
          to: '#',
          layout: [
            '0 1 2 3',
            '0 1 2 3',
            '0 1 2 3',
            '0 1 2 3',
            '0 1 2 3',
            '0 1 2 3',
            '0 1 2 3',
          ],
          items_: [
            {
              // 0 level
              label: 'Game Resources',
              items: [
                {
                  label: 'Graphic Resources',
                  sublabel: 'Wax seals, coins, templates',
                  to: 'docs/intro',
                  icon: 'color_lens',
                },
                {
                  label: 'Running Events',
                  sublabel: 'VTT, Tabletop, MMO',
                  to: 'docs/events-campaigns',
                  icon: 'local_library',
                },
                {
                  label: 'Investigation Events',
                  sublabel: 'Run & write mysteries',
                  to: 'docs/investigations',
                  icon: 'search',
                },
                {
                  label: 'Spycraft Events',
                  sublabel: 'Run & write infiltrations',
                  to: 'docs/stealth',
                  icon: 'visibility',
                },
                {
                  label: 'Horror Events',
                  sublabel: 'Run & write terror',
                  to: 'docs/horror',
                  icon: 'nights_stay',
                },
                {
                  label: 'Spirit Board',
                  sublabel: 'Online ouija board',
                  to: 'spiritboard',
                  icon: 'pin_drop',
                },
              ],
            },
            {
              // 1 level
              label: 'Journals & Posters',
              items: [
                {
                  label: 'All Journals',
                  sublabel: 'Slide Decks for stories',
                  to: 'docs/photoshop/journals',
                  icon: 'bookmarks',
                },
                {
                  label: 'Adventurer Journal',
                  sublabel: 'Book for travels',
                  to: 'docs/photoshop/adventure-journal',
                  icon: 'menu_book',
                },
                {
                  label: 'FF14 Journal',
                  sublabel: 'Book for Eorzea',
                  to: 'docs/photoshop/final-journal',
                  icon: 'fort',
                },
                {
                  label: 'Scrollcase',
                  sublabel: 'Scrolls and letters',
                  to: 'docs/photoshop/scrollcase',
                  icon: 'history_edu',
                },
                {
                  label: 'Posters & Notices',
                  sublabel: 'Posters & notice board',
                  to: 'docs/photoshop/posters',
                  icon: 'dashboard',
                },
              ],
            },
            {
              // 2 level
              label: 'Warcraft',
              items: [
                {
                  label: 'Warcraft Conquest',
                  sublabel: 'Moon Guard WC campaigns',
                  to: 'Conquest',
                  icon: 'castle',
                },
                {
                  label: 'WC Resources',
                  sublabel: 'Rules, guides, & tokens',
                  to: 'docs/wow-conquest/intro',
                  icon: 'style',
                },
                {
                  label: 'Vehicle Battle Tokens',
                  sublabel: 'Creat tokens & maps',
                  to: 'docs/wow-conquest/token',
                  icon: 'directions_boat',
                },
                {
                  label: 'Event Cards',
                  sublabel: 'Photoshop templates',
                  to: 'docs/wow-conquest/event-cards',
                  icon: 'event_note',
                },
                {
                  label: 'Loot Cards',
                  sublabel: 'Photoshop templates',
                  to: 'docs/wow-conquest/boss-item-cards',
                  icon: 'recent_actors',
                },
              ],
            },
            {
              // 3 level
              label: 'Tabletop Resources & Games',
              items: [
                {
                  label: 'Exalted',
                  sublabel: 'Solars & Lunars',
                  to: 'docs/exalted/resources',
                  icon: 'brightness_5',
                },
                {
                  label: 'World of Darkness',
                  sublabel: 'Vampires, Wolves, & more',
                  to: 'docs/w-o-d/intro',
                  icon: 'dark_mode',
                },
              ],
            },
          ],
        },
        {
          label: 'Warcraft Conquest',
          to: '#',
          layout: [
            '0 1 . .',
            '0 1 . .',
            '0 1 . .',
            '0 1 . .',
            '0 1 . .',
            '0 1 . .',
            '0 1 . .',
          ],
          items_: [
            {
              // 0 level
              label: 'WoW Conquest Campaigns',
              items: [
                {
                  label: 'Everfrost',
                  sublabel: 'Alterac',
                  to: 'everfrost',
                  icon: 'ac_unit',
                },
                {
                  label: 'Thornwake',
                  sublabel: 'The Barrens',
                  to: 'thornwake',
                  icon: 'grass',
                },
                {
                  label: 'Tropic Sunder',
                  sublabel: 'Stranglethorn Vale',
                  to: 'TropicSunder',
                  icon: 'sailing',
                },
                {
                  label: 'In Death\'s Shadow',
                  sublabel: 'Icecrown Citadel',
                  to: 'DeathShadow',
                  icon: 'shield_moon',
                },
              ],
            },
            {
              // 1 level
              label: 'Warcraft',
              items: [
                {
                  label: 'Warcraft Conquest',
                  sublabel: 'Moon Guard WC campaigns',
                  to: 'Conquest',
                  icon: 'castle',
                },
                {
                  label: 'WC Resources',
                  sublabel: 'Rules, guides, & tokens',
                  to: 'docs/wow-conquest/intro',
                  icon: 'style',
                },
                {
                  label: 'Vehicle Battle Tokens',
                  sublabel: 'Creat tokens & maps',
                  to: 'docs/wow-conquest/token',
                  icon: 'directions_boat',
                },
                {
                  label: 'Event Cards',
                  sublabel: 'Photoshop templates',
                  to: 'docs/wow-conquest/event-cards',
                  icon: 'event_note',
                },
                {
                  label: 'Loot Cards',
                  sublabel: 'Photoshop templates',
                  to: 'docs/wow-conquest/boss-item-cards',
                  icon: 'recent_actors',
                },
              ],
            },
            
          ],
        },
        /*{
          position: 'left',
          to: 'gallery',
          label: 'Art Gallery',
        },*/
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
              label: 'Carrd',
              href: 'https://sonceri.carrd.co/',
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
              label: 'Sonc Hombrewery',
              to: 'https://homebrewery.naturalcrit.com/user/sonceri',
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
          customTypes: {
            homebrew: {
              keyword: `homebrew`,
              infima: true,
              svg: '<svg width="512px" height="512px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#006591" d="M218.4 24.72c-14.2 0-30.5 3.56-49.5 11.88 77.2 8.6 65.9 91.4 14.1 106.2-65.4 18.7-131.31-23.7-98.34-99.2-39.67 18.95-42.17 80.8-12.93 111.5C141.3 227.9 56.9 279 37.25 200.7-1.929 326.2 60.34 489.5 258.7 489.5c250.7 0 282-374.7 129.2-415.04 26.5 43.04-13.1 70.94-24.9 73.14-51.3 9.9-58.1-122.89-144.6-122.88zm37.5 118.08c4.5 0 9.4 1.1 12.8 2.9l115.9 67.1c7.4 4.1 7.4 10.9 0 15.2l-115.9 66.9c-7.2 4.3-18.5 4.3-25.7 0L126.8 228c-7.3-4.3-7.3-11.1 0-15.2L243 145.7c3.4-1.8 7.9-2.9 12.9-2.9zm-89 62.6c-21.6-.4-33.1 15-18.2 24.3 9.6 4.8 23.7 4.4 32.7-.8 8.8-5.3 9.5-13.7 1.5-19.4-4.3-2.5-10-4-16-4.1zm178.6.1c-20.8.4-31.3 15.5-16.3 24.5 9.6 4.9 23.9 4.6 33-.7 8.9-5.3 9.5-13.9 1.2-19.6-4.2-2.4-9.9-4-15.9-4.2h-2zm-89 0c-6.6-.1-13 1.5-17.7 4.2-10.2 5.6-10.4 15.1-.6 20.9 9.9 5.8 25.8 5.6 35.1-.6 15-9 4.6-24.3-16.8-24.5zm-141 41c1.5.1 3.4.5 5.6 1.6l111.5 64.5c7.2 4.1 12.9 14.2 12.9 22.5v119.7c0 8.3-5.7 11.7-12.9 7.6L121.2 398c-7.4-4.3-13.2-14.2-13.2-22.6V255.7c0-6.2 3-9.2 7.5-9.2zm281.3 0c4.2 0 7.2 3 7.2 9.2v119.7c0 8.4-6 18.3-13 22.6l-111.5 64.4c-7.2 4.1-12.9.7-12.9-7.6V335.1c0-8.3 5.7-18.4 12.9-22.5L391 248.1c2.1-1.1 4.2-1.5 5.8-1.6zm-185 65.5h-1.1c-5.3.4-8.5 4.8-8.5 11.6-.6 10.4 7.2 24.1 16.9 29.8 9.8 5.6 17.6 1.1 17.2-9.9.2-14.2-13.3-31.1-24.5-31.5zm130.9 21.8c-11.2.1-24.8 17.2-24.7 31.4.1 10.4 7.7 14.4 17.2 8.9 9.4-5.5 17-18.3 17.1-28.8 0-6.7-3.3-11.1-8.5-11.5h-1.1zm-216.9 22.5c-5.4.3-8.7 4.7-8.7 11.6-.5 10.5 7.3 24.1 17 29.8 9.8 5.5 17.6 1 17.2-10.1 0-14.5-14.1-31.8-25.5-31.3z"/></svg>'
            },
            gamerchic: {
              keyword: `gamerchic`,
              infima: true,
              svg: '<svg id="Layer_1" enable-background="new 0 0 507.52 507.52" viewBox="0 0 507.52 507.52" xmlns="http://www.w3.org/2000/svg" ><g><g><g><path d="m386.603 185.92 101.824 161.216v-208.192z" fill="#e5ab09"/><path d="m218.283 18.645-187.456 107.136 101.056 42.112z" fill="#e5ab09"/><path d="m135.787 202.325-108.523 171.819 208 9.045z" fill="#e5ab09"/><path d="m352.597 170.667-98.816-170.667h-.042l-98.816 170.667z" fill="#e5ab09"/><path d="m471.915 123.051-182.678-104.406 86.208 148.928z" fill="#e5ab09"/><path d="m19.093 144v203.136l101.568-160.811z" fill="#e5ab09"/><path d="m243.093 507.52v-102.677l-194.432-8.427z" fill="#e5ab09"/><path d="m272.235 383.232 208.021-9.088-108.523-171.819z" fill="#e5ab09"/><path d="m264.427 507.52 194.41-111.104-194.41 8.469z" fill="#e5ab09"/><path d="m154.475 192 99.285 180.523 99.285-180.523z" fill="#e5ab09"/></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>'
            },
            exalted: {
              keyword: `exalted`,
              infima: true,
              svg: '<svg style="height: 512px; width: 512px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="0"></path><g class="" style="" transform="translate(0,0)"><path d="M256 16c-5.718 51.466-24.204 93.997-32.813 124.687-8.896 2.525-17.386 5.918-25.312 10.313-27.803-15.645-71.13-32.34-111.563-64.688 32.348 40.434 49.043 83.76 64.688 111.563-4.395 7.926-7.788 16.416-10.313 25.312C109.997 231.797 67.467 250.282 16 256c51.466 5.718 93.997 24.204 124.687 32.812 2.525 8.897 5.918 17.387 10.313 25.313-15.645 27.802-32.34 71.128-64.688 111.562 40.434-32.347 83.76-49.042 111.563-64.687 7.926 4.395 16.416 7.788 25.312 10.312 8.61 30.69 27.095 73.22 32.813 124.688 5.718-51.467 24.204-93.998 32.812-124.688 8.897-2.524 17.387-5.917 25.313-10.312 27.802 15.645 71.128 32.34 111.562 64.687-32.347-40.434-49.042-83.76-64.687-111.562 4.395-7.926 7.788-16.416 10.312-25.313 30.69-8.608 73.22-27.094 124.688-32.812-51.467-5.718-93.998-24.204-124.688-32.813-2.524-8.896-5.917-17.386-10.312-25.312 15.645-27.803 32.34-71.13 64.687-111.563-40.434 32.348-83.76 49.043-111.562 64.688-7.926-4.395-16.416-7.788-25.313-10.313C280.204 109.997 261.718 67.467 256 16zm0 180c16.57 0 31.798 6.486 42.657 17.343C309.515 224.2 316 239.43 316 256c0 16.57-6.486 31.798-17.343 42.657C287.797 309.515 272.57 316 256 316c-16.57 0-31.8-6.486-42.657-17.343C202.483 287.797 196 272.57 196 256c0-16.57 6.486-31.8 17.343-42.657C224.2 202.483 239.43 196 256 196z" fill="#ad9759" fill-opacity="1"></path></g></svg>'
            },
            dungeon: {
              keyword: `dungeon`,
              infima: true,
              svg: '<svg style="height: 512px; width: 512px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="0"></path><g class="" style="" transform="translate(0,0)"><path d="M188.8 20.38c-5.3 26.85 4.6 55.74 34.1 86.52 11.2-7.29 31.6-10.94 50-8.16-46-22.31-66.5-47.13-84.1-78.36zM29.19 26.62C43.56 73.08 81.09 128.8 129.6 168.3 93.51 166 49.93 153.1 18.76 143c24.96 35.2 64.17 52.9 103.34 66.3C97.13 227 66.99 245 18.66 248c54.64 19.2 107.54 8.9 131.34.7-17.9 34.9-100.72 66.2-122.31 77 53.26 4.2 121.71-11 167.01-32.9 10 24.6-1.6 53.2-10.1 77.8-1.9 4.5-3.8 8.9-5.7 13.3 5.1-3.5 10.1-7 14.9-10.6 23.6-16.2 47.8-31.9 59.5-58.8 26.1 31.2 62.7 62.1 107 85.4 17.4 22.1 28.3 49 34.2 73.8 8.3-19.1 13.8-40.2 9.7-60.3 24.5-3.6 35.6-29.7 35.5-54.4-12.6 6.2-15.1 6.3-31.2 8.2 0-10.1.6-12.5-3-28.7-10.3 8.4-21 11.2-30.8 11.8 2.1-7.6 3-19.5 3.7-27.3-13 7.1-19.2 9.7-30.1 10.8-.4-10.9-.1-20-4.1-30.4-29.6 19-48.6 1.5-68-21.3 19.8-17 96.4-21.8 95.1 7.1 14-7.3 18.8-11.2 23.6-15.9 9.1 8.5 13.4 20.9 15.1 31.4 9.3-9.4 10.3-10.5 17.1-23.8 5.7 10.1 8.8 17 10.7 30.6 8.5-6.2 15.4-13.1 19.8-21.4 7.5 15.5 8.3 16 12.4 33 17.8-13.1 21.8-31.2 22.8-47.6 2-33-.3-108.2-31-142.9 1.7 36.3-13.1 70-33.8 80.7-12.6 4.9-96.5-74.6-137.6-93.3-23.5-10.2-48.1 7.1-67.8 9.3C147 106.2 83.57 70.94 29.19 26.62zM296.1 152.8c13.3 20.9 32.2 36.9 60.1 55-19.4 2.9-65.8-6.7-77.7-24-5.5-7.9 7.1-21.3 17.6-31zM180.6 319.1c-14.4 6.2-29.2 10.9-43.8 14.3-2.4 3.6-4.6 7.1-6.7 10.5 14.8 5.3 31.5 7 44.1 2.8 3.3-9.8 5.5-19.3 6.4-27.6zm-68 19.1l-10.2 1.5c-31.81 36.6-61.9 103.2-48.24 151.9h36.13c-11.12-37.7-16.53-87.1 22.31-153.4zm8.5 21.5c-5.9 11.4-10.4 22.1-13.8 32.1 12.9 6.7 29.1 8.9 44.8 8.2 4.6-10.5 9.8-21.8 14.6-33.3-15.4 1.8-31.4-1.4-45.6-7zm111.4 6.6c-12 10.5-25.2 20.3-38.9 29.6 7 34 33.4 63.4 73.9 95.7h83.3c-57.2-31.8-94.6-73.3-118.3-125.3zm-130 43.2c-2.5 11.8-3.3 22.7-3 32.9 37.3 14.2 62.5 13.5 97.5 4.1-7.2-10.3-13-21-16.9-32.3-32.7 9.4-55.4 5.7-77.6-4.7zm106.6 52.4c-38.1 10.9-68.8 13.2-107.5.3 1.8 10.4 4.5 20.1 7.5 29.4h130.1c-11.3-9.8-21.4-19.6-30.1-29.7z" fill="#df4b30" fill-opacity="1"></path></g></svg>'
            },
            shadowrun: {
              keyword: `shadowrun`,
              infima: true,
              svg: '<svg style="height: 512px; width: 512px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="0"></path><g class="" style="" transform="translate(0,0)"><path d="M228.844 32.22v114.218h17.687V32.218h-17.686zm-108.25.624c-15.507 0-28.094 12.586-28.094 28.093C92.5 76.444 105.087 89 120.594 89c12.655 0 23.34-8.372 26.844-19.875h44.937v77.313h17.688v-95H147.03c-3.888-10.837-14.262-18.593-26.436-18.593zm193.25 0c-15.507 0-28.063 12.586-28.063 28.093 0 12.124 7.677 22.45 18.44 26.376v59.124h17.655V87.844c11.596-3.452 20.063-14.193 20.063-26.906 0-15.508-12.587-28.094-28.094-28.094zM266.124 92.5v53.938h17.657V92.5h-17.655zm188.532 4.03c-15.507 0-28.094 12.588-28.094 28.095 0 13.083 8.948 24.074 21.063 27.188v27.468h-92.938v17.657h110.624v-46.342c10.223-4.192 17.407-14.233 17.407-25.97 0-15.507-12.557-28.094-28.064-28.094zM30.187 123.657v17.688H96.75v55.594h62.814V179.28h-45.126v-55.624h-84.25zm147.032 40.47v159.718h159.81v-159.72H177.22zm17.56 15.655h17.657v78.595l32.407 32.406h75.28v17.658H237.5l-2.594-2.594-10.75-10.75c-1.033 7.385-7.36 13.062-15.03 13.062-8.392 0-15.19-6.796-15.19-15.187 0-7.682 5.696-13.98 13.095-15l-9.655-9.658-2.594-2.593V179.78zm54.94.157h17.686v55.313h52.53l.002 17.688H249.72v-73zM53.124 217.375V307.344c-11.49 3.512-19.844 14.198-19.844 26.844 0 15.505 12.557 28.093 28.064 28.093s28.093-12.587 28.093-28.092c0-12.195-7.79-22.564-18.656-26.438v-72.72h88.782v-17.655H53.124zm301.563 0v17.656h53.968v-17.655h-53.97zm99.968 21.97c-10.898 0-20.342 6.21-25 15.28h-74.97l.002 17.688H427c2.325 13.168 13.824 23.187 27.656 23.187 15.507 0 28.063-12.588 28.063-28.094 0-15.507-12.557-28.062-28.064-28.062zm-349.062 15.28v17.688h53.97v-17.688h-53.97zm17.156 36.47v84.217c-11.498 3.513-19.875 14.2-19.875 26.844 0 15.506 12.587 28.094 28.094 28.094 15.506 0 28.06-12.588 28.06-28.094 0-12.194-7.766-22.564-18.624-26.437v-66.94h19.156v-17.686H122.75zm231.938 0v17.686h45.156v95.283c-11.323 3.624-19.53 14.26-19.53 26.78-.002 15.506 12.585 28.063 28.092 28.063 15.507 0 28.063-12.557 28.063-28.062 0-12.32-7.935-22.778-18.97-26.563V291.095h-62.814zM192.375 341.53v54.033h17.688V341.53h-17.688zm36.47 0v86.564c-11.013 3.794-18.94 14.233-18.94 26.53 0 15.506 12.588 28.095 28.095 28.095s28.063-12.59 28.063-28.095c0-12.53-8.203-23.14-19.532-26.75V341.53h-17.686zm37.28 0v54.033h17.688l-.032-54.032h-17.655zm38.094 0v140.064h17.655V341.53H304.22z" fill="#00dde0" fill-opacity="1"></path></g></svg>'
            },
            conquest: {
              keyword: `conquest`,
              infima: true,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#2A3E98" d="M200.1 29.7c-31 17.5-57 30-80.6 32.4 -8.1 0.8-15.9 0.2-23.2-1.9 -14.3 19.6-15.9 46-8.9 72 5.7 20.9 17.1 40.9 30.7 55.2 0.5-7.1 1.4-14.1 2.6-20.6 3.4-18.9 8.7-34.9 21.3-43.3 6.3-4.2 15-5.3 22.7-2.4 5.7 2.2 11 6 16.3 11.5l58.8-34.1L200.1 29.7 200.1 29.7zM61 34.2c-22.2 15-34.3 33.9-39.4 55 -5.6 23.4-2.3 49.9 7.8 75.6 17.6 44.8 55.8 86.3 97.3 104.5 -5.7-17.6-8.7-37.6-9.3-57.3 -22.4-16.9-40-44.8-48.2-75 -7.8-28.7-6.7-60.2 9.8-84.9C72.5 47.6 66.4 41.6 61 34.2L61 34.2zM236 122.3l-29.2 16.9c52.9 100.2 83.6 209.8 152.7 295.7l33.5-25.2c-42.8-47.3-67.3-93.2-88.5-140.5C283.7 222.9 265.6 175.2 236 122.3L236 122.3zM413.5 417.7l-50.6 38 17.4 23.1 50.6-38L413.5 417.7 413.5 417.7z"/><path fill="#DD1F26" d="M312.6 30.9L273 99.8l58.8 34c5.3-5.4 10.6-9.3 16.3-11.5 7.7-2.9 16.4-1.8 22.7 2.4 12.6 8.4 17.9 24.4 21.3 43.3 1.2 6.5 2 13.4 2.6 20.6 13.6-14.3 25-34.3 30.7-55.2 7-26 5.4-52.4-8.9-72 -7.4 2.1-15.2 2.7-23.2 1.9C369.7 60.9 343.6 48.5 312.6 30.9L312.6 30.9zM451.7 35.4c-5.4 7.5-11.5 13.4-18.1 17.9 16.5 24.8 17.5 56.3 9.8 84.9 -8.2 30.1-25.7 58.1-48.2 75 -0.6 19.6-3.6 39.7-9.3 57.3 41.5-18.2 79.8-59.8 97.3-104.5 10.1-25.7 13.4-52.2 7.8-75.6C486 69.3 473.9 50.4 451.7 35.4L451.7 35.4zM276.7 123.6c-3.4 6-6.6 11.9-9.6 17.8 6.9 13.4 13 26.5 18.9 39.3 6.4-13.5 13-26.9 20-40.2L276.7 123.6 276.7 123.6zM227.1 227.1c-6.3 14.7-12.5 29.1-18.9 43.4 -21.2 47.2-45.8 93.1-88.5 140.5l33.5 25.2c39.8-49.4 66.9-106.8 92.8-165.6C239.7 256 233.4 241.5 227.1 227.1L227.1 227.1zM99.3 419L81.8 442l50.6 38 17.4-23.1L99.3 419 99.3 419z"/></svg>'
            },
            wod: {
              keyword: `wod`,
              infima: true,
              svg: '<svg style="height: 512px; width: 512px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="0"></path><g class="" style="" transform="translate(0,0)"><path d="M229.2 18.34l-6.1 5.71C179.4 64.68 108 67.31 49.08 63.27l-11.43-.78 1.53 11.35c3.18 23.53.14 49.36-6.97 71.46-3.67 11.4-8.49 21.8-13.85 30.3V205c13.92-12.5 24.52-31.8 31.64-53.9 1.84-5.8 3.42-11.7 4.74-17.7l54.06-3 5.3-47.84c28.9-1.87 58.2-7.39 84.3-19.84l39.5 32.35 27-30.09c17 7.66 35.6 12.29 54.4 12.1l13.3 37.22 37.5-2.1c2.6 4.8 5.5 9.5 8.6 14 8.2 12 18.5 22.6 31.6 30.5l-2.2 29.5 22 2.6c.7 11.3 2.4 22.2 5.7 32.6 3.4 10.5 8.5 20.5 15.7 29.4l-20.1 19.7 15.6 11.6c-19.6 25.2-25.9 52.4-22.9 77.6l-20.9 3.1 3.4 23.5c-25.5 7.2-48 24.8-60.7 47.5l-28-14.6L313 444c-21.5-3.4-44.9-2.8-66.5 4.9l-15.7-29-26 22c-11.7-13-26.3-23.1-41.8-30.5-10.7-5.2-21.7-9.1-32.8-11.9l10.5-42.4-37.5 6c1.5-9 2.3-18.4 2-28-.3-12.5-2.7-25.4-8.04-37.6l42.24-27.4-35.6-19.3c17.6-17 28.6-37.4 34.1-57.5l44.2 5.8-6.7-30.7c5.1-.2 10.2-.6 15.3-1.5 11.9-2 23.7-6.4 34.6-13.8l19.4 30.9 18.4-31.9c6.1 2.3 12.2 3.5 18.1 3.9 4.3.4 8.4.3 12.5-.1l6 37.2 24.9-18.4c4.7 6.5 10 11.8 15.8 16 4.2 3.1 8.5 5.6 13 7.7l-12.8 33.8 31.8-3.7c.5 5.1 1.7 9.8 3.4 14.2 1 2.7 2.3 5.4 3.6 7.9l-31.8 14.2 26.9 21.4c-3.2 4.8-5.8 9.8-7.7 15.2-2.2 6.7-3.3 13.7-3.4 20.9l-22.6-8.6 4 34.6c-3.1 1.4-6.1 2.9-9.1 4.6-4.8 2.7-9.5 5.8-13.8 9.4l-21.2-25.9-14.3 32.8c-10.6-2-21.2-1.4-31.1 1.6l-7.8-21.3-20.2 15.1c-7.6-7.8-16.3-14.1-25.3-19.2l20.1-28-37-2.8c1.3-7.5 1.8-15 .9-22.3l27.3-4.4-16.8-19.7c2.7-2 5.2-4.3 7.4-6.8 4.8-5.6 7.6-12.4 9-20.1 6.7 1.5 13.6 1.7 20.2-.2 7.8-2.1 14.8-6.8 20.7-13.4 12.9 10.7 27.1 19.2 42.1 23.4-1.7 6.1-2.8 12.5-2.4 19.2.3 5.5 1.7 11.1 4.3 16.5-10.6 1.6-21.1 4.8-31 10.5-8.8-14.5-21.9-25.3-43.1-29.1 12.7 21.9 26.7 43.4 28.4 69l13.8-16.3c14.4-13 30.4-16.5 49.2-16.7l22.3-.2-15.8-15.8c-7-6.9-9.1-12.6-9.5-19-.4-6.3 1.5-13.6 4.7-21.7l4.4-11.2-11.9-1.5c-16.4-2-34.6-12.6-50.6-27.6l-8.6-8.1-5.8 10.2c-4.7 8.1-10.4 12.2-16.2 13.8-5.7 1.6-12 .9-18.5-2.9l-13.9-8-.1 16c-.1 11.2-1.9 16.4-5.9 20.9-3.9 4.6-11.5 9.1-24.3 14.8l-10 4.4 5.9 9.1c11 17.4 7.7 36.3-3.6 60.3l-5 10.6 11.4 2.5c23.5 5.1 50.3 20.1 63.3 45.3l5.4 10.6 8.9-7.7c18.7-15.9 40.3-18.3 64.6-1.4l9.3 6.6 4.6-10.5c4.1-9.6 13.5-18.3 24.7-24.5 11.1-6.3 23.9-10 32.8-10.7l11.8-1-3.6-11.2c-5-15.1-5.1-27.8-1.4-38.8 3.8-11.1 11.7-20.9 24.8-29.8l8.2-5.5-6-7.9c-7.5-10-14.7-18.9-18.3-28.3-3.5-9.4-4.3-19.1 1.7-33.7l4.3-10.5-11.1-2.2c-14.1-2.9-26.7-6.7-36.7-14-10-7.3-18-18-23.1-37.3l-2.5-9.6-9.4 3c-10.7 3.5-22.3 6.5-33.9 5.7-11.5-.8-23.3-5.1-35.9-18l-7.8-7.8-6.4 8.9c-12.9 17.5-28 25.1-44.8 28-16.9 2.8-35.5.5-52.9-3.3l-12.4-2.6 1.1 12.5c2.6 32.6-14 81.4-65.48 104l-14.86 6.6 13.1 9.5c22.49 16.5 29.74 37.7 30.39 60.5.65 22.8-6.1 46.5-12.52 64.1l-4.71 13 13.76-.4c20.82-.6 48.02 4.4 71.82 15.8 23.7 11.5 43.7 29 52.5 53.2l4.5 12.2h1.9l8.9-8.7c32.3-31.2 84.1-27.8 119.2-14l10.6 4.1 2-11.2c6.5-36.1 49.2-67.6 88-61.8l18.1 2.7-8.5-16.3c-18.2-34.9-17.5-78.3 32.6-117.7l8.9-7V262l-9.5-6.4c-16.6-11-25.4-24-30.5-39.9-5.1-15.9-6-35-5-56.4l.4-7.6-7.4-1.9c-22.2-5.7-36.2-17.7-47.5-34.2-11.4-16.47-19.4-37.6-27.7-59.79l-3.6-9.52-9.2 4.34c-39 18.42-87.2.94-117.9-26.68l-6.3-5.6h-.2z" fill="#9001f5" fill-opacity="1"></path></g></svg>'
            },
            sonceri: {
              keyword: `sonceri`,
              infima: true,
              svg: '<svg style="height: 512px; width: 512px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="0"></path><g class="" style="" transform="translate(0,0)"><path d="M256 25c-12.537 0-23 10.735-23 24.79 0 2.614.363 5.113 1.033 7.45l30.492-30.492C261.878 25.62 259 25 256 25zm21.043 14.684l-31.96 31.96c3.262 1.88 6.988 2.934 10.917 2.934 12.537 0 23-10.734 23-24.79 0-3.633-.703-7.043-1.957-10.104zm16.78 26.548C287.65 81.57 273.127 92.578 256 92.578c-1.528 0-3.033-.093-4.516-.264l231.92 386.536L293.822 66.232zm-77.09 3.147L28.595 478.85l216.908-361.516-28.772-47.955zM74.98 196.335L19.826 251.49l9.9 9.9 27.577-27.577 6.363-6.364 12.73 12.726-6.365 6.365-27.577 27.577 9.9 9.9 16.264-16.263 6.363-6.363 12.73 12.727-6.366 6.365-16.262 16.264 9.898 9.9 23.915-23.914 19.67-42.812-43.585-43.584zm362.04 0l-43.584 43.584 19.67 42.812 23.914 23.913 9.898-9.9-16.262-16.263-6.365-6.365 12.73-12.726 6.363 6.364 16.263 16.264 9.9-9.9-27.577-27.577-6.365-6.364 12.73-12.727 6.362 6.363 27.576 27.578 9.9-9.9-55.153-55.154zm-271.97 90.07l-31.013 51.692 13.775-13.776 6.364-6.363 12.728 12.726-6.363 6.365-27.575 27.58 9.898 9.897 16.264-16.263 6.363-6.364 12.73 12.727-6.366 6.365-16.264 16.262 9.9 9.9 27.578-27.576 6.364-6.365 12.728 12.728-6.365 6.365-27.576 27.578 9.897 9.898 16.264-16.262 6.366-6.364 12.727 12.73-6.364 6.362-16.264 16.264 9.9 9.9 27.576-27.578 6.364-6.363L256 419.78l11.314-11.31 6.364 6.362 27.576 27.578 9.9-9.9-16.263-16.264-6.363-6.363 12.727-12.73 6.365 6.365 16.263 16.263 9.898-9.897-27.575-27.578-6.365-6.364 12.728-12.727 6.364 6.365 27.578 27.576 9.9-9.9-16.264-16.262-6.365-6.365 12.73-12.727 6.363 6.364 16.264 16.263 9.898-9.898-27.576-27.58-6.364-6.364 12.728-12.727 6.363 6.362 13.776 13.774-31.014-51.69-90.95 90.95-90.95-90.95zM256 422.61l-4.95 4.95-27.577 27.577L256 487.664l32.527-32.527-27.578-27.576-4.95-4.95z" fill="#e836a1" fill-opacity="1"></path></g></svg>'
            },
          },
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
