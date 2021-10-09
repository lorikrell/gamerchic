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
  {
    title: 'Barrens',
    imageUrl: 'img/icons/globe.png',
    description: (
      <>
        Events take place across the northern and southern Barrens of Kalimdor. Forces set up camp and seek dangers to homes and strongholds.
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



function Barrens() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout title="Thornwake" 
    description="Warcraft Conquest presents Thornwake, a campaign set in the Barrens Nov 11-21. Learn more about this campaign and others! ">
      <header className='conquest-header'>
      <div className='conquest-hero' id='barrens'>
      <ReactPlayer 
      className='react-player'
      url='https://www.youtube.com/v/II1S3w9gIC0?version=3&vq=hd1080' 
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
        <h1 className='conquest-title'>Thornwake</h1>

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
          <p>Video by <a href="https://www.youtube.com/channel/UCyj8FQbaiyj9qJPQ6ENZcXA">Sonceri</a></p>
          </div>
      </div>
      </header>

      <main id='barrens'>
      <section className='spacer'>
        <div className='container'>
        <div className='row'>
        <div className="col col-md-6">

        <h1>November 11 - 21 2021 | Barrens Campaign</h1>
          
        <p>Emboldened by the thinning lines of Alliance and Horde, the mongrels of the Barrens now aggressively test the defenses of the major factions. Patrols, traders, and even fortified outposts of the Horde and Alliance have been attacked, with false flags planted to stoke the tensions of the thinly-held armistice. Quillboar war drums thunder from the depths of the Kraul. Centaur and Harpies raise war banners. The Venture Company arms these denizens with equipment salvaged from the Iron Horde, seeking vengeance for their losses in Stranglethorn. In the shadows of the Overgrowth and within the walls of Northwatch Hold, a clandestine power seeks to ignite the flames of war.</p>
        
        <p>The <strong>Thornwake</strong> rises. The Alliance and Horde will have to face it - <i>and each other</i>.</p>

        </div>
        <div >
        <img src="img/landing/thorns-wake.png" /></div>
       </div>
       <p><strong>Warcraft Conquest</strong> presents <strong>Thornwake</strong>, a narrative and D20 campaign set to run between <strong>November 11th - November 21st</strong> in the <strong>Barrens</strong>. This story continues our journey to battle foes in Azeroth, plaguing the Barrens and threatening to tip the factions into open war. Players from Moon Guard, Wyrmrest Accord, and US servers are welcome!</p>
       </div></section>
       
       <section >
       <div className="container">
       <div className="row">
       <div className="col col--5">
       {features && features.length > 0 && (
            <div >
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
            </div>
        )}
        </div>
        <div className="col col--6"><img src="img/landing/barrens-info.png" className="img-responsive"/></div>
        
          </div>
          </div>
          
        </section>

        <div className="hero barrens--primary hero-banner" id="barrens">
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
        <p>Camps for the campaign will not move, with Alliance in Northwatch Hold and Horde in Crossroads.</p>
        <div className='responsive-google-slides'>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQfB2w0cInTJILXT_o38nJZP48MvoQj6oMubLQtFrovgJ3k-C5W7ifE6DhX3sWM0_sQfzJEbEl8_WfX/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </div>

        <h1>Campaign Events Preview</h1>
        <p>Coming soon!</p>

        <h1>Finale Event</h1>
        <p>Coming soon!</p>


        </div>
        </div>
        </div>


        </section>
      </main>
      
    </Layout>
  );
}

export default Barrens;