import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import ReactPlayer from 'react-player/youtube';
import './conquest.scss';
import Iframe from 'react-iframe';
import TimelineConquest from '../components/timeline-conquest/TimelineConquest';

const features = [
  {
    title: 'Open to All',
    imageUrl: 'img/icons/witch.png',
    description: (
      <>
        We welcome new and veteran DMs to build campaigns and run events with us. We provide DM workshops, Discord channels to plan, event marketing, and signup management.
      </>
    ),
  },
  
  {
    title: 'Recommended Addons',
    imageUrl: 'img/icons/tools.png',
    description: (
      <>
        We recommend <a href="https://www.curseforge.com/wow/addons/total-rp-3" target="_blank">TotalRP3</a>, <a href="https://www.curseforge.com/wow/addons/cross-rp" target="_blank">Cross RP</a>, <a href="https://www.curseforge.com/wow/addons/listener" target="_blank">Listener</a>, <a href="https://www.curseforge.com/wow/addons/dicemaster" target="_blank">Dicemaster</a>, <a href="https://www.curseforge.com/wow/addons/elephant">Elephant</a>, and <a href="https://www.curseforge.com/wow/addons/handynotes-warcraft-conquest">WC Handy Notes</a> (per campaign). Find addons in apps like <a href="https://wowup.io/" target="_blank">WoWUp.io</a>. 
      </>
    ),
  },
  {
    title: 'Connect in Discord',
    imageUrl: 'img/icons/discord.png',
    description: (
      <>
        Schedules, plans, discussions, narration updates, RP prompts, and more are tracked in the <a href="https://tinyurl.com/warcraftconquestdiscord">Warcraft Conquest Discord</a> and <a href="https://twitter.com/Warcraft_Conq">Twitter</a>.
      </>
    ),
  },
];

const features2 = [
  {
    title: 'Storytelling',
    imageUrl: 'img/icons/storytelling.png',
    description: (
      <>
        Explore your character story through battles, roleplay, events, and writing prompts. We provide in-game and in-Discord options to explore. Stock up on <a href="https://www.wowhead.com/item=2460/elixir-of-tongues">Elixir of Tongues</a>!
      </>
    ),
  },
 
  {
    title: 'D20 & RP Events',
    imageUrl: 'img/icons/d20.png',
    description: (
      <>
        We use the simplified <a href="https://docs.google.com/document/d/1XxboiKSuBA1UsGZfuCWi7EJ_YxYxzptIk-eCJjuLQWE/edit?usp=sharing" target="_blank">Conquest D20 system</a> for PVE/PVP encounters. Additional mechanics and campaign loot available per DM.
      </>
    ),
  },
  {
    title: 'Vehicle Battles',
    imageUrl: 'img/icons/ship.png',
    description: (
      <>
        We use the <a href="https://docs.google.com/document/d/1WNRYwGUhvwE6BuqN_VFThXmmhnMQ6zCTbEwGaZWek3Q" target="_blank">Conquest Warmachine</a> system for vehicle battles in Discord, including naval, land, and air. See these <a href="docs/wow-conquest/intro">resources</a>!
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col', styles.feature)}>
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

function Feature2({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col', styles.feature)}>
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
    <Layout title="Warcraft Conquest" 
    description="Warcraft Conquest is a community driven roleplay team of DMs and players based on Moon Guard. We present story arcs and campaigns set throughout Azeroth and beyond with a focus on warfare and diplomacy.">
      <header className='conquest-header'>
      <div className='conquest-hero' id='tropic'>
      <ReactPlayer 
      className='react-player'
      url='https://www.youtube.com/v/S92r_gv-N0c?version=3&vq=hd1080&t=5&playlist=S92r_gv-N0c' 
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
        <h1 className='conquest-title'>Warcraft Conquest</h1>

        <div className="buttons-pages">
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to='https://tinyurl.com/warcraftconquestdiscord'>
              Join the Fight
            </Link>
          </div>
          <div className='credits'>
          <p>Video by <a href="https://www.youtube.com/channel/UCwmkSpfuE47IL0yaG6QqQNg">IKEdit</a></p>
          </div>
      </div>
      </header>

      <main id='tropic'>
      <section className='spacer'>
        <div className='container'>
        <div className='row'>
        <div className="col col-md-6">

        <h1>Roleplay & Roll Play, Battles for Azeroth</h1>
          
        <p>The <strong>Warcraft Conquest Discord Server</strong> is a community project that focuses on coordinating fun and dynamic roleplay plot lines set in the Warcraft universe, conducted through dungeon mastered PvE-D20, PvP-D20, RP-PvE, and RP-PvP events. We hope to provide a platform for networking and collaboration for players on the Moon Guard-US and Wyrmrest Accord-US World of Warcraft servers, and others wishing to join! Many immersive graphical and written resources have been created by members of this project that any player may use in their roleplay.</p>

        <p>We welcome players of diverse backstories and themes to our events, including all factions Alliance, Horde, Argent, and other neutral and independent forces. Campaigns welcome IC conflict and resolution, respectful of player boundaries and fairness. See our <a href="https://docs.google.com/document/d/1IUQtgYVFPPIYiwoNKvw8yVeVvzPuvR708CCWUITAEJE/preview">Code of Conduct.</a></p>
        </div>
        <div >
        <img src="img/landing/wc-logo.png"/></div>
       </div></div></section>
       
       <section >
       <div className="container">
          <div className="row">

       {features && features.length > 0 && (
            <div className="col col-md-3 thin">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
            </div>
        )}
        <div className="col-md-6 col-lg-6 hidden-xs hidden-sm thin"><img src="img/landing/conquest-overview.png" /></div>
        {features2 && features2.length > 0 && (
            <div className="col col-md-3 thin">
                {features2.map((props, idx) => (
                  <Feature2 key={idx} {...props} />
                ))}
            </div>
        )}
          </div>
          </div>
          
        </section>

        <div className="hero conquest--primary hero-banner" id="tropic">
      <div className="container">
      <div className="row">
        
        <div className="col col--6">
          <h1 className="blog-title">Join Our Discord</h1>
          <p className="blog-subtitle">Discord is the backbone of our operation. All planning, announcements, and signups are run through the Discord. Join, select roles, and be welcome!</p>
          <div className="buttons-pages">
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to='https://discord.gg/gKg8qfj8hP'>
              See You in Discord
            </Link>
          </div>
        </div>

        <div className="col col--6">
          <h1 className="blog-title right">Follow in Twitter</h1>
          <p className="blog-subtitle right">Our Twitter is another route for sharing information, following your adventures, and organizing with more roleplayers.</p>
          <div className="buttons-right">
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to='https://twitter.com/Warcraft_Conq'>
              Follow Us Today
            </Link>
          </div>
        </div>
      </div>
      </div>
      </div>
        <section className='spacer'>
        <h1 className='center'>Campaign Timeline</h1>
        <div className='container'>
        <div className='row center'>
        
          <TimelineConquest />
                    
        </div>
        </div>


        </section>
      </main>
      
    </Layout>
  );
}

export default TropicSunder;