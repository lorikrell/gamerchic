import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import ReactPlayer from 'react-player/youtube'
import './conquest.css';

const features = [
  {
    title: 'Open to All',
    imageUrl: 'img/icons/knight.png',
    description: (
      <>
         IC campaign across all US servers and factions: Alliance, Horde, and Neutral. Based on Moon Guard - US.
      </>
    ),
    link: (
      <>
      <a href="docs/intro" class="land-link">Find cool adventure stuff!</a>
      </>
    ),
  },
  {
    title: 'Dungeon Masters',
    imageUrl: 'img/icons/witch.png',
    description: (
      <>
        We welcome new and veteran DMs to build and run events throughout the campaign.
      </>
    ),
    link: (
      <>
      <a href="docs/wow-conquest/intro" class="land-link">Learn more about Conquest!</a>
      </>
    ),
  },
  {
    title: 'Recommended Addons',
    imageUrl: 'img/icons/tools.png',
    description: (
      <>
        We recommend TotalRP3, Cross RP, Listener, Dicemaster. WC Handy Notes may return! Check your addon app, like WoWUp.io. 
      </>
    ),
    link: (
      <>
      <a href="docs/exalted/resources" class="land-link">Become heroes of the ages!</a>
      </>
    ),
  },
  {
    title: 'Connect in Discord',
    imageUrl: 'img/icons/discord.png',
    description: (
      <>
        Schedules, plans, discussions, narration updates, RP prompts, and more are tracked in the Warcraft Conquest Discord.
      </>
    ),
    link: (
      <>
     <a href="docs/w-o-d/intro" class="land-link">Battle the night!</a>
      </>
    ),
  },
  {
    title: 'Stranglethorn Vale',
    imageUrl: 'img/icons/globe.png',
    description: (
      <>
        Events take place across the jungles, rivers, camps, Zul'Gurub outside instance, and Booty Bay. Chromie time not recommended.
      </>
    ),
    link: (
      <>
      Coming soon...
      </>
    ),
  },
  {
    title: 'Variety of Events',
    imageUrl: 'img/icons/helm.png',
    description: (
      <>
        Explore your story through multiple event types including battle, stealth, scouting, medic, security, magic, vehicle, horror, and more!
      </>
    ),
    link: (
      <>
      Coming soon...
      </>
    ),
  },
  {
    title: 'D20 & RP Events',
    imageUrl: 'img/icons/d20.png',
    description: (
      <>
        We use the simplified Conquest D20 system for PVE/PVP encounters. Additional mechanics and campaign loot available per DM.
      </>
    ),
    link: (
      <>
      Coming soon...
      </>
    ),
  },
  {
    title: 'Vehicle Battles',
    imageUrl: 'img/icons/ship.png',
    description: (
      <>
        We use the Conquest Warmachine system for vehicle battles in Discord, including naval, land, and air.
      </>
    ),
    link: (
      <>
      Coming soon...
      </>
    ),
  },
];

function Feature({imageUrl, title, description, link}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="alt-features-item ">
          <img className="alt-features-icon" src={imgUrl} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

function TropicSunder() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout title="Tropic Sunder">
      <header className='conquest-header'>
      <div className='conquest-hero'>
      <ReactPlayer 
      className='react-player'
      url='https://www.youtube.com/v/8WwwnQge8KA?version=3&vq=hd1080' 
      loop
      playing
      muted
      width='100%'
      height='100%'
      config={{
        youtube: {
          playerVars: { controls:0 , modestbranding:1 }
        }
      }}
      
      />
        <p>
          Edit <code>pages/hello.js</code> and save to reload.
        </p>
      </div>
      </header>

      <main>
      <section className='spacer'>
        <div className='container'>
        <div className='row'>
        <p>Stranglethorn, the everblooming jewel of the southern Eastern Kingdoms, is lush and rife with flora, fauna, and people of all cultures. As the Horde and Alliance have settled their war and the shadow of Death looms over the world, threats have risen deep within the tropical wilderness. Skirmishes with the remnants of Colonel Kurzen's rebellion have brought the attention of the humans of Stormwind. The Zandalari's new allegiance to the Horde has sparked dissent among the Gurubashi Trolls; slights and years of war against them are not so easily forgiven. Dark forces are afoot, stirring these tensions and preparing for a dark ritual. The jungle holds many dangers, but those who know where to look will find riches beyond imagining.</p>

        <p>Warcraft Conquest presents Tropic Sunder, a narrative and D20 campaign that will take place between April 4-10th, 2021, in Stranglethorn Vale. Roleplayers and Dungeon Masters are welcome, with events hosted on Moon Guard-US.</p>
       </div></div></section>
       {features && features.length > 0 && (
          <section >
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default TropicSunder;