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

const features = [
  {
    title: 'Open to All',
    imageUrl: 'img/icons/knight.png',
    description: (
      <>
         IC campaign across all US servers and factions: Alliance, Horde, and Neutral. Based on Moon Guard - US. We welcome new DMS and players!
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
    title: 'Northrend',
    imageUrl: 'img/icons/globe.png',
    description: (
      <>
        Events take place across the distant northern lands of Northrend. Landing in Dragonblight, forces set up camp and begin the trek to Icecrown Citadel.
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
        We use the <a href="https://docs.google.com/document/d/1WNRYwGUhvwE6BuqN_VFThXmmhnMQ6zCTbEwGaZWek3Q" target="_blank">Conquest Warmachine</a> system for vehicle battles in Discord, including naval, land, and air.
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

function DeathShadow() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout title="In Death's Shadow" 
    description="Warcraft Conquest presented In Death's Shadow, a campaign set in Northrend in Fall 2020. Learn more about this campaign and others! https://youtu.be/LwngFEIg8Kw?t=12">
      <header className='conquest-header'>
      <div className='conquest-hero' id='death'>
      <ReactPlayer 
      className='react-player'
      url='https://www.youtube.com/v/LwngFEIg8Kw?version=3&vq=hd1080&t=14' 
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
        <h1 className='conquest-title'>In Death's Shadow</h1>

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

      <main id='death'>
      <section className='spacer'>
        <div className='container'>
        <div className='row'>
        <div className="col col-md-6">

        <h1>September 20 - 30 2020 | Northrend Campaign</h1>
          
        <p>The eternal veil screams, torn asunder above the frozen wastes of Icecrown. Even as the shattered sky presents terrifying new threats, an old enemy has been released from the shackles that once bound them. Guided by a sinister hand from beyond, undead swarm across Azeroth to take advantage of a world weakened by strife.</p>

        <p>The Alliance and Horde must now muster their war-wearied armies and sail north with all haste to aid the Argent Crusade in confronting the renewed Scourge onslaught. They must find some way to achieve victory, or forever be condemned to torment...In Death's Shadow.</p>

        </div>
        <div >
        <img src="img/landing/death-shadow.png" /></div>
       </div>
       <p><strong>Warcraft Conquest</strong> presents <strong>In Death's Shadow</strong>, a narrative and D20 campaign that will take place between September 20th - September 30th in Northrend. This will be our final campaign in Battle for Azeroth, telling the story that leads into the Shadowlands expansion. Players from Moon Guard and Wyrmrest Accord are welcome!</p>
       <p><img src='img/icons/helm.png' height='30px' width='30px' /> See the <a href="https://www.icy-veins.com/forums/topic/52709-awesome-icecrown-role-play-event-one-of-the-largest-ever/">Icy Veins article</a>, <a href="https://www.reddit.com/r/wow/comments/j32dc1/moon_guard_just_wrapped_up_a_gigantic_d20_server/">Reddit post</a>, and <a href="https://imgur.com/a/p3bvzMF">incredible gallery</a>! Thank you!</p></div></section>
       
       <section >
       <div className="container">
          <div className="grid ">
          <grid-item>
       {features && features.length > 0 && (
            <div >
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
            </div>
        )}</grid-item>
        <grid-item><div className="grid-center"><img src="img/landing/shadow-overview.png" className="img-responsive"/></div></grid-item>
        <grid-item>{features2 && features2.length > 0 && (
            <div>
                {features2.map((props, idx) => (
                  <Feature2 key={idx} {...props} />
                ))}
            </div>
        )}</grid-item>
          </div>
          </div>
          
        </section>

        <div className="hero death--primary hero-banner" id="death">
      <div className="container">
      <div className="row">
        
        <div className="col col--6">
          <h1 className="blog-title">Learn what happened</h1>
          <p className="blog-subtitle">Every night DMs posted narration information and reports on events and the campaign, crafting the story based on player achievements.</p>
          <div className="buttons-pages">
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to='https://discord.gg/vUp9G7BaqR'>
              See the Narration Log
            </Link>
          </div>
        </div>

        <div className="col col--6">
          <h1 className="blog-title right">Captured Moments</h1>
          <p className="blog-subtitle right">Everyone shared screenshots, journals, and more throughout the campaign. See what you missed, or remember all the great adventures!</p>
          <div className="buttons-right">
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to='https://discord.gg/zvRfQQzVu2'>
              See the Screenshots
            </Link>
          </div>
        </div>
      </div>
      </div>
      </div>
        <section className='spacer'>

        <div className='container'>
        <div className='row'>
        <div className="col col-md-6 center">
          <h1>Campaign Camps</h1>
        <p>Camps for the campaign, beginning in Dragonblight and ending in Icecrown.</p>
        <p><img src="img/landing/camp-wintergarde.jpg" /></p>
        <p><img src="img/landing/camp-agmar.jpg" /></p>
        <p><img src="img/landing/camp-icecrown.jpg" /></p>

        <h1>Campaign Events Preview</h1>
        <div className='responsive-google-slides'>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTqnwKMj2PwtMDWqNaQWbu1hnvTuvxScOc-tq2ahPvv0gOZm5qRJu1vjfPPR4kBk5f36lx5iLzrPEAo/embed?start=false&loop=false&delayms=3000" frameborder="0" width="800" height="829" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </div>

        <h1>Finale Event</h1>
        <p><img src="img/landing/death-ic.png" /></p>


        </div>
        </div>
        </div>


        </section>
      </main>
      
    </Layout>
  );
}

export default DeathShadow;