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
  
  games: [
    'intro',
    {
      type: 'category',
      label: 'DM & Storyeller Resources',
      items: [
        {
          type: 'category',
          label: 'Event Guides',
          items: [
            'events-campaigns',
            'investigations',
            'horror',
          ]
        },
        'photoshop/fonts-brushes',
        'photoshop/coins',
        'photoshop/wax-seals',
        'photoshop/event-maps',
      ]
    },
    {
      type: 'category',
      label: 'Character Journals',
      items: [
        'photoshop/final-journal',
        'photoshop/elven-journal',
        'photoshop/dwarf-journal',
        'photoshop/arden-journal',
      ]
    },
    {
      type: 'category',
      label: 'Warcraft Conquest',
      items: [
        'wow-conquest/intro', 'wow-conquest/token', 'wow-conquest/capture-assets', 'wow-conquest/simple-token', 'wow-conquest/create-ship', 'wow-conquest/squad-token','wow-conquest/event-cards', 'wow-conquest/boss-item-cards'
      ],
    },
    {
      type: 'category',
      label: 'Exalted',
      items: [
        'exalted/resources',
        {
          type: 'category',
          label: 'Campaigns',
          items: [
            'exalted/sands-south',
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
      items: ['w-o-d/intro', 
      {
        type: 'category',
        label: 'Vampire Domains',
        items: ['w-o-d/domains', 'w-o-d/create-domain', 'w-o-d/merits-flaws', 'w-o-d/domain-rules', 'w-o-d/example-domain'],
      }
    ]
    },

    /*
    {
      type: 'category',
      label: 'Dungeons and Dragons',
      items: ['d-n-d/intro', 'photoshop/coins',],
    },
    {
      type: 'category',
      label: 'Shadowrun',
      items: ['shadowrun/intro'],
    },*/
  ],
};
