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
<section className='spacer'>
        <div className="hero barrens-events--primary hero-banner" id="barrens">
      <div className="container">
      <div className="row">
        
        <div className="col col--6">
          <h1 className="blog-title">Players battle for regions</h1>
          <p className="blog-subtitle"><strong><i>Optional, opt-in</i> PVP events are here!</strong> Key locations, story lines, and PVP Dungeon Masters offer a set of player warfare options at this campaign. For the Horde, Alliance, and Azeroth! All battles will have their own maps, events, and rules to ensure the faction conflict does not spill into other storylines. A No Man's Land provides open PVP with DM led raid groups nightly.</p>
          <p>Maps and narration tales will track successes and failures as war rages. [Conquest D20 Simplified 1.1 rules](https://tinyurl.com/WCD20v101), [helpful template](https://tinyurl.com/WCD20PVPv101), "Pro Faction War" in your TRP profiles, in-game events, No Man's Land, and vehicle battle.</p>
          <div className="buttons-pages">
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to='https://docs.google.com/document/d/1Uxdudk6KI8-1FgkeRwvK5-6kwKR0lEQLaFjLeaRciVM/view'>
              Learn more about PVP
            </Link>
          </div>
        </div>

        <div className="col col--6">
          <h1 className="blog-title right">Save the Barrens and Strongholds</h1>
          <p className="blog-subtitle right">Sabers rattle and smoke rises across the Barrens as the Mongrel Horde continues attacks against all peoples in the plains. The Horde endured attacks in Durotar and have lost contact with Crossroads. Alliance seeks Northwatch Hold having gone silent after requisitioning supplies and ammunitions. Druids moving from the cinders of Teldrassil make silent moves into the Barrens. Thorns rise, casting shadows from the cliffs. </p>
          <p>Maps and narration tales provide details over the campaign. D20 and open RP, in-game events, camp RP, Discord RP, and vehicle battles.</p>
          <div className="buttons-right">
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to='https://discord.gg/zvRfQQzVu2'>
              Learn more about Events
            </Link>
          </div>
        </div>
      </div>
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
              to='https://discord.gg/4fY6GaPaYn'>
              See the Narration Log
            </Link>
          </div>
        </div>


        <div className="col col--6">
          <h1 className="blog-title right">Captured moments</h1>
          <p className="blog-subtitle right">Everyone shared screenshots, journals, and more throughout the campaign. See what you missed, or remember all the great adventures!</p>
          <div className="buttons-right">
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to='https://discord.gg/TpzaYyUgGt'>
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
        <p>Get a sneak peek into campaign events including stories, PVE, PVP, and vehicle battles. Additional events will be added over time.</p>
        <div className='responsive-google-slides'>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRZNEao5wLY4fIL8Jby-I7E8SbNuxh4v5cn8u0SfiRj1z_C7ebsFk6I7Svqh4kQ2aivW0WPHhxBdQ_8/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </div>

        <h1>Campaign PVP Maps</h1>
        <p>These maps track the ongoing PVP battles through Ashenvale and the Barrens. Objectives and results will be noted nightly. We use [Conquest D20 Simplified 1.1](https://tinyurl.com/WCD20v101) for D20 PVP battles. [This template](https://tinyurl.com/WCD20PVPv101) can help create and track your character abilities and status. </p>
        <div className='responsive-google-slides'>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRc-HtfI8pr7Rmii_tUObKamwxjbiKnNZLik2VyTxiiaIP-uV-b2EieguaNDzIsTblNNxX6sIrb0HAw/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </div>
        <p> </p>

        <h1>Finale Events</h1>
        <p>We have two finales planned with a series of events per night: Thornwake Druids and Gravetusk Quilboar!</p>

        </div>
        </div>
        </div>


        </section>

        

        <section className='spacer'>
        <div className="hero barrens-finale--primary hero-banner" id="barrens">
      <div className="container">
      <div className="row">
        
        <div className="col col--6">
          <h1 className="blog-title">Thornwake Druids</h1>
          <p className="blog-subtitle">As the Horde and Alliance and all neutral factions arrive in the Barrens, what seems to haunt the land and peoples may not be what it seems. At the depths of misfortune and attacks by twisted plants and corrupted leadership are a faction of rogue druids. The Thornwake. Events lead us through to locate their numbers and battle the true horrors of this twisted grove midway in the campaign!</p>
          <p>All events invade the Overgrowth to scout, investigate, and battle the Thornwake!</p>
          
        </div>

        <div className="col col--6">
          <h1 className="blog-title right">Gravetusk Quilboar</h1>
          <p className="blog-subtitle right">For months, the Bramblespear Horde has gathered and armed allies to retake the Barrens from usurpers and invaders. Woefully called the Mongrel Horde, these folk of plains and cliffs and thorns rise up as the druids fall, enacting great battles that culminate in a final draw. But who is the true enemy? This horde battling to hold their ancestral lands, or something that lurks still in the Kraul?</p>
          <p>Final events all take place together, as we siege Razorfen Kraul and Downs to find the truth.</p>
          
        </div>
      </div>
      </div>
      </div>

       </section>
      </main>
      
    </Layout>
  );
}

export default Barrens;