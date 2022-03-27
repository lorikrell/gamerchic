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
    title: 'Barrens',
    imageUrl: 'img/icons/globe.png',
    description: (
      <>
        Events take place across the Alterac mountains, using locations in Hillsbrad for camps and events. AV and other locations as proxies.
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



function Everfrost() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout title="Everfrost" 
    description="Warcraft Conquest presents Everfrost, a campaign set in Alterac April 18-24. Learn more about this campaign and others!">
      <header className='conquest-header'>
      <div className='conquest-hero' id='barrens'>
      <ReactPlayer 
      className='react-player'
      url='https://www.youtube.com/v/D1s6bjaOpBI?version=3&vq=hd1080' 
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

        <h1>April 18 - 24 2022 | Alterac Campaign</h1>
          
        <p>A violent storm brews in the Alterac Mountains, and the misbegotten children cast out seek vengeance against the Alliance and Horde by summoning new powers into the fray.  Lok'harak, a Frost Lord of ancient tales rises from the depths from the help of the Syndicate and the Winterax Tribe to bring about an eternal winter to all of Alterac, and if not stopped, all of Lordaeron. The Alliance and Horde must work together to stop the eternal winter and cast out the local brigands in <strong>Everfrost</strong>.</p>
        <p><strong>Warcraft Conquest</strong> presents <strong>Everfrost</strong>, a narrative and D20 campaign set to run between <strong>April 18th - April 24th</strong> in <strong>Alterac</strong>. This story continues our journey to battle a rising frost lord seeking to plunge Azeroth into an eternal winter. Players from Moon Guard, Wyrmrest Accord, and US servers are welcome!</p>
        </div>
        <div >
        <img src="img/landing/everfrost-logo.png" /></div>
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
        <div className="col col--6"><img src="img/landing/everfrost-overview.png" className="img-responsive"/></div>
        
          </div>
          </div>
          
        </section>
    <section className='spacer'>
    <div className="hero everfrost-finale--primary hero-banner" id="barrens">
      <div className="container">
      <div className="row">
        
        <div className="col col--6">
          <h1 className="blog-title">Gain Allies</h1>
          <p className="blog-subtitle">Not all elements bow to the will of the frozen lord of Alterac. Seek allies in the slopes and passes, protect them from the forces to subvert them, and have their aid in the final battle. If you fail to gain their aid, the battle may become harder. Take care with your choices, paths, and final actions!</p>
          <p>All events, in-game and vehicle battles in Discord, will affect each other! Unlock allies, gain buffs, break enemy forces.</p>
          
        </div>

        <div className="col col--6">
          <h1 className="blog-title right">The Frozen Lord</h1>
          <p className="blog-subtitle right">A powerful elemental of ice, snow, and hungering vengeance rises in the Alterac Mountains. It has gained a foothold through the climes towards Alterac Valley. It may have gained allies and support in the region, promising resources and an endless winter. Whatever promises made, we must end the threat or have those elementals forces bear down on regions ill-prepared for the onslaught.<br/><br/>Entering the region will be difficult...</p>
          
        </div>
      </div>
      </div>
      </div>

       </section>
        

        <section className='spacer'>

        <div className='container'>
        <div className='row'>
        <div className="col col-md-6 center">
        <h1>Campaign Camps</h1>
        <p>Camps for the campaign coming soon.</p>
        <div className='responsive-google-slides'>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQS5l6e9Exi7ZrN0Iylq58J-J0C1mPR3uffRbSMG8jHtrFeEvCkToTwvQ2raQkDmcWkubVdO7FpmJHM/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowFullScreen="true" mozallowFullScreen="true" webkitallowFullScreen="true"></iframe>
        </div>

        <h1>Campaign Events Preview</h1>
        <p>Get a sneak peek into campaign events including stories, PVE, PVP, and vehicle battles. Additional events will be added over time. Coming Soon!</p>
        <div className='responsive-google-slides'>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR-4NAyRvxhbhC2aTyaBKyAOrngPE70h4s-_Fm3uHxTu5mls7PywevohrLMidx4i9Y88GNGjBHvrGkT/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowFullScreen="true" mozallowFullScreen="true" webkitallowFullScreen="true"></iframe>
        </div>

        

        </div>
        </div>
        </div>


        </section>

        
        <section className='spacer'>
        <div className="hero everfrost-events--primary hero-banner" id="barrens">
      <div className="container">
      <div className="row">
        
        <div className="col col--6">
          <h1 className="blog-title">Battles of Skill</h1>
          <p className="blog-subtitle"><strong><i>Optional, opt-in</i> PVP events are here!</strong> All members of all factions can battle each other to test skills, win challenges, and gain advantages. This is not a war of locations and supplies, but of old grudges and supremacy of honed ability. The true enemy lies in the frozen climes of the Alterac Mountains.  More info coming soon on the arena and events.</p>
          <div className="buttons-pages">
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to='https://docs.google.com/document/d/1uWgbEss5eeHPUwn3yROz4JuiYSbTq1JdxiMGy1a2pGY/edit#heading=h.ikvn67qkgdo2'>
              Learn about PVP D20
            </Link>
          </div>
        </div>

        <div className="col col--6">
          <h1 className="blog-title right">Join Forces to End Threats</h1>
          <p className="blog-subtitle right">Not all battle each other when faced with the threats gaining lands and fortifications once held by the Alliance, Horde, neutral parties, and others. Events will help sway this campaign through battles, scouting missions, infiltrations, magical investigations, vehicle battles, safeguarding allies, and much more!<br/><br/>Updates and event descriptions are coming soon!</p>
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
        <section className='spacer'>

      <div className="hero everfrost--primary hero-banner" id="barrens">
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

       </section>
      </main>
      
    </Layout>
  );
}

export default Everfrost;