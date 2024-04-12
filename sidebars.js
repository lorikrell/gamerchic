/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  graphics: [

    'intro',
    'photoshop/basics',
        'photoshop/coins',
        'photoshop/wax-seals',
        'photoshop/avatars',
        'photoshop/wow-emoji',
    {
      type: 'category',
      label: 'Banners and Crests',
      link: {
        type: 'doc',
        id: 'photoshop/banner-intro',
      },
      items: [
        'photoshop/banners',
        'photoshop/discord-banner',
        'photoshop/wow-logo',
        'photoshop/crest'
      ]
    },
    {
      type: 'category',
      label: 'Event and Loot Cards',
      link: {
        type: 'doc',
        id: 'photoshop/cards-intro',
      },
      items: [
        'photoshop/event-maps',
        'warcraft/event-cards',
        'warcraft/boss-item-cards',
        'photoshop/announcements',
      ]
    },
    {
      type: 'category',
      label: 'Journals and Scrolls',
      link: {
        type: 'doc',
        id: 'photoshop/journals',
      },
      items: [
        'photoshop/adventure-journal',
        'photoshop/dragonflight-journal',
        'photoshop/tech-journals',
        'photoshop/final-journal',
        'photoshop/elven-journal',
        'photoshop/dwarf-journal',
        'photoshop/arden-journal',
        'photoshop/vampire-journal',
        'photoshop/jungle-journal',
        'photoshop/alterac-journal',
        'photoshop/scrollcase',
        'photoshop/parchments',
        'photoshop/posters',
      ]
    },
    {
      type: 'category',
      label: 'Vehicle Battles',
      link: {type: 'doc', id: 'warcraft/intro'},
      items: [
        'warcraft/token',
        'warcraft/capture-assets',
        'warcraft/simple-token',
        'warcraft/create-ship',
        'warcraft/squad-token',
        
      ],
    },
    
    
  ],
  warcraft: [
    {
      type: 'category',
      label: 'DM Guides',
      link: {type: 'doc', id: 'events-campaigns'},
      items: [
        'boss',
        'investigations',
        'stealth',
        'horror',
        'onepage'
      ]
    },
    {
      type: 'category',
      label: 'Magisterium WoW Setting',
      items: [
      'setting/astral-star',
      'setting/elemental-scales',
      'setting/endless-scrolls',
      'setting/silver-legacy',
      'setting/infinite-obelisk',
      'setting/veiled-eye',
      {
        type: 'link',
        label: 'Magisterium',
        href: '/Magisterium',
      },
    ]
    },
  ],
  settings: [
    {
      type: 'category',
      label: 'Exalted',
      link: {type: 'doc', id: 'exalted/resources'},
      items: [
        {
          type: 'category',
          label: 'Campaigns',
          items: [
            'exalted/ghosts-south',
            'exalted/ascending-souls',
          ]
        },
        {
          type: 'category',
          label: 'South',
          items: [
            'exalted/chiaroscuro',
            'exalted/trade-routes',
            'exalted/society',
            'exalted/markets',
            'exalted/groups',
            'exalted/delzahn',
          ]
        },
        'exalted/timelines'
      ],
    },
    {
      type: 'category',
      label: 'World of Darkness',
      link: {type: 'doc', id: 'w-o-d/intro'},
      items: [
      'w-o-d/suicide-kings',
      {
        type: 'category',
        label: 'Vampire Domains',
        items: ['w-o-d/domains', 'w-o-d/create-domain', 'w-o-d/merits-flaws', 'w-o-d/domain-rules', 'w-o-d/example-domain'],
      }
    ]
    },
  ],
};
