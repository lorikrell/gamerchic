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
         IC campaign across all US servers and factions: Alliance, Horde, and Neutral-aligned. Based on Moon Guard - US. We welcome new DMS and players!
      </>
    ),
  },
  
  {
    title: 'Recommended Addons',
    imageUrl: 'img/icons/tools.png',
    description: (
      <>
        We recommend <a href="https://www.curseforge.com/wow/addons/total-rp-3" target="_blank">TotalRP3</a>, <a href="https://www.curseforge.com/wow/addons/cross-rp" target="_blank">Cross RP</a>, <a href="https://www.curseforge.com/wow/addons/listener" target="_blank">Listener</a>, <a href="https://www.curseforge.com/wow/addons/dicemaster" target="_blank">Dicemaster</a>, <a href="https://www.curseforge.com/wow/addons/elephant">Elephant</a>, and long emote addons. Find addons in apps like <a href="https://wowup.io/" target="_blank">WoWUp.io</a>. 
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
    title: 'Plaguelands',
    imageUrl: 'img/icons/globe.png',
    description: (
      <>
        Events take place across the Plaguelands and proxies, using Hearthglen for a shared camp.
      </>
    ),
  },
 
  {
    title: 'D20 & RP Events',
    imageUrl: 'img/icons/d20.png',
    description: (
      <>
        We use the simplified <a href="https://docs.google.com/document/d/1uWgbEss5eeHPUwn3yROz4JuiYSbTq1JdxiMGy1a2pGY/edit?usp=sharing" target="_blank">Conquest D20 system</a> for PVE/PVP encounters. Additional mechanics and campaign loot available per DM.
      </>
    ),
  },
  {
    title: 'Vehicle Battles',
    imageUrl: 'img/icons/ship.png',
    description: (
      <>
        We use the <a href="https://docs.google.com/document/d/1Q9vnQ6pLNIQgCSIcxVzJzsQnPSz3nXffgqEjI0nqUsE/edit#heading=h.c9xwudtolrcj" target="_blank">Conquest Warmachine</a> system for vehicle battles in Discord, including naval, land, and air.
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



function Lichfall() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout title="Lichfall" 
    description="Warcraft Conquest presents Lichfall, a campaign set in the Plaguelands November 10th-20th. Learn more about this campaign and others!">
      <header className='conquest-header'>
      <div className='conquest-hero' id='barrens'>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Jx4-cUeZPp4?vq=hd1080&autoplay=1&mute=1&playlist=Jx4-cUeZPp4&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        

        
          <div className='credits'>
          <p>Video by <a href="https://www.youtube.com/channel/UCyj8FQbaiyj9qJPQ6ENZcXA">Sonceri</a></p>
          </div>
      </div>
      </header>

      <main id='death'>
      <section className='spacer'>
        <div className='container'>
        <div className='row'>
        <div className="col col-md-6">

        <h1>November 10 - 20 2022 | Plaguelands Campaign</h1>
          
        <p>Where once blighted earth stretched across nations, new enriched lands await the hands of farmers, ranchers, and good folk. Fields of plenty dotted with bright flowers and meadows of green grass fill the landscape where dying, hollowed woods once stood like jagged teeth against the hazed sky. Come and enjoy bright birdsong and the humming of bees, gleaming days and peaceful nights. The rebuilding has begun! The Westweald of Lordaeron calls to the homesteaders seeking homes in rejuvenated, black earth!</p>
        <p>These papers litter the streets of cities and villages, but the newfound hope has tarnished. Or perhaps the dream was never real. Where white towers stood as beacons of hope, a haze hangs over their pallid stone. Where putrid earth was reclaimed, the mushrooms and rot twist the landscape. </p>
        <p>Where the dead were entombed, they may yet rise again...</p>
        <p><strong>Warcraft Conquest</strong> presents <strong>Lichfall</strong>, a narrative and D20 campaign set to run between <strong>November 10th - 20th</strong> in the <strong>Plaguelands</strong>.  This story continues our journey to battle the remaining scourge and their ominous leaders seeking a final kingdom of death to rule. Players from Moon Guard, Wyrmrest Accord, and US servers are welcome!</p>
        </div>
        <div >
        <img src="img/landing/lichfall-logo.png" /></div>
       </div>
       
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
        <div className="col col--6"><img src="img/landing/lichfall-overview.png" className="img-responsive"/></div>
        
          </div>
          </div>
          
        </section>
    <section className='spacer'>
    <div className="hero lichfall-finale--primary hero-banner" id="barrens">
      <div className="container">
      <div className="row">
        
        <div className="col col--6">
          <h1 className="blog-title">Gain Allies</h1>
          <p className="blog-subtitle">Not all forces in the Plaguelands bow to the will of the Lich. You may find resources, supplies, allies, and aid in the many factions at work in the Plaguelands and perhaps in some of the Lich's forces. If you fail to gain their aid, the battle may become harder. Take care with your choices, paths, and final actions!</p>
          <p>All events, in-game and vehicle battles in Discord, will affect each other! Unlock allies, weaken the Lich, and break enemy forces.</p>
          
        </div>

        <div className="col col--6">
          <h1 className="blog-title right">Plagueshifter and the Lich</h1>
          <p className="blog-subtitle right">For quite some time, a dark force has moved enemies and allies as pawns on a board. Through numerous campaigns, hints of her power and influence have been found among the risen dead, cultists, supply depots, and more. A new force joins her in the Plaguelands, twisting the lands once cleansed with a dark druidic gift.<br/><br/>Take heed and find this foe! Remove pieces from the board, or gain their aid.</p>
          
        </div>
      </div>
      </div>
      </div>

       </section>
        

        <section className='spacer'>

        <div className='container'>
        <div className='row'>
        <div className="col col-md-6 center">
        <h1>Campaign Camp</h1>
        <p>We share a camp for all factions in Lichfall, set in Hearthglen.</p>
        <div className='responsive-google-slides'>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQDgoXWZK1z_f7AYcVwO6bP9EIHkS-WBhIzDxwOxYcUeGF6UR9WlerKbNjWh9OHsXBuvBql3suMStO1/embed?start=false&loop=false&delayms=3000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </div>

        <h1>Campaign Events Preview</h1>
        <p>Get a sneak peek into campaign events including stories, PVE, PVP, and vehicle battles. Additional events will be added over time. Coming Soon!</p>
        <div className='responsive-google-slides'>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTVcXts92JG7rloYaAXC8wJeIztb1kUvjXuHWghCvTB8fcIJN_UDiNg0CK_fTE9H9cjEV1lPDA5ShED/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </div>

        

        </div>
        </div>
        </div>


        </section>

        
        <section className='spacer'>
        <div className="hero lichfall-events--primary hero-banner" id="barrens">
      <div className="container">
      <div className="row">
        
        <div className="col col--6">
        <h1 className="blog-title">Players battle against scourge</h1>
          <p className="blog-subtitle"><strong><i>Optional, opt-in</i> PVP events are here!</strong> Key locations, story lines, and PVP Dungeon Masters offer a set of player warfare options at this campaign. For the Horde, Alliance, numerous neutral factions, and Azeroth! All battles will have their own maps, events, and rules to ensure the conflict does not spill into other storylines. A No Man's Land provides open PVP with DM led raid groups nightly.</p>
          <p>Maps and narration tales will track successes and failures as war rages. <a href="https://docs.google.com/document/d/1uWgbEss5eeHPUwn3yROz4JuiYSbTq1JdxiMGy1a2pGY/edit">Conquest D20 Simplified 1.2 rules</a>, <a href="https://tinyurl.com/WCD20PVPv101">helpful template</a>, in-game events, No Man's Land, and a vehicle battle. Battles may be Faction Skirmishes and Champions vs Scourge (red shirts).</p>
          <div className="buttons-pages">
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to='https://docs.google.com/document/d/1HVscEUeug8RE3dhJtfsjATH7sMEMpchfargOUPHsYzw'>
              Read the PVP Notice
            </Link>
          </div>
        </div>

        <div className="col col--6">
          <h1 className="blog-title right">Join Forces to End Threats</h1>
          <p className="blog-subtitle right">Not all battle each other when faced with the threats gaining lands and fortifications once held by the Alliance, Horde, neutral parties, and others. Events will help sway this campaign through battles, scouting missions, infiltrations, magical investigations, vehicle battles, safeguarding allies, and much more!</p>
          <p>The campaign may be run during the Dragonflight prepatch. The timeline for the campaign is before the 3 year Warcraft timeskip. Dracthyr and dragons are welcome to attend.</p>
          <div className="buttons-right">
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to='https://discord.gg/mzsT5UHHkg'>
              Learn more about Events
            </Link>
          </div>
        </div>
      </div>
      </div>
      </div>

       </section>
        <section className='spacer'>

      <div className="hero lichfall--primary hero-banner" id="barrens">
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
              to='https://discord.gg/Yc8PghgPbh'>
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
              to='https://discord.gg/dCrhP2mC2B'>
              See the Screenshots
            </Link>
          </div>
        </div>
      </div>
      </div>
      </div>

       </section>
      </main>
      
    </Layout>
  );
}

export default Lichfall;