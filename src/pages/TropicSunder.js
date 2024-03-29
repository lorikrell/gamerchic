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
    title: 'Stranglethorn Vale',
    imageUrl: 'img/icons/globe.png',
    description: (
      <>
        Events take place across the jungles, rivers, camps, Zul'Gurub outside instance, and Booty Bay. Chromie time not recommended.
      </>
    ),
  },
 
  {
    title: 'D20 & RP Events',
    imageUrl: 'img/icons/d20.png',
    description: (
      <>
        We use the simplified <a href="https://docs.google.com/document/d/1nlRtaicINUoWWn35ny1MoXp1-zMDL1YMTIW69sHd0v0" target="_blank">Conquest D20 system</a> for PVE/PVP encounters. Additional mechanics and campaign loot available per DM.
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
    <Layout title="Tropic Sunder" 
    description="Warcraft Conquest presented Tropic Sunder, a campaign set in Stranglethorn Vale in Spring 2021. Learn more about this campaign and others!">
      <header className='conquest-header'>
      <div className='conquest-hero' id='tropic'>
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
        <h1 className='conquest-title'>Tropic Sunder</h1>

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
      </div>
      </header>

      <main id='tropic'>
      <section className='spacer'>
        <div className='container'>
        <div className='row'>
        <div className="col col-md-6">

        <h1>April 4 - 10, 2021 | Stranglethorn Campaign</h1>
          
        <p>Stranglethorn, the everblooming jewel of the southern Eastern Kingdoms, is lush and rife with flora, fauna, and people of all cultures. As the Horde and Alliance have settled their war and the shadow of Death looms over the world, threats have risen deep within the tropical wilderness. Skirmishes with the remnants of Colonel Kurzen's rebellion have brought the attention of the humans of Stormwind. The Zandalari's new allegiance to the Horde has sparked dissent among the Gurubashi Trolls; slights and years of war against them are not so easily forgiven. Dark forces are afoot, stirring these tensions and preparing for a dark ritual. The jungle holds many dangers, but those who know where to look will find riches beyond imagining.</p>

        <p>Warcraft Conquest presents Tropic Sunder, a narrative and D20 campaign that will take place between April 4-10th, 2021, in Stranglethorn Vale. Roleplayers and Dungeon Masters are welcome, with events hosted on Moon Guard-US.</p>

        <p><img src='img/icons/helm.png' height='30px' width='30px' /> <a href="https://docs.google.com/document/d/1YaWnGtB4lB6V5PlR7Eh0sWr3CzHcyncvWl0SnQrG6a4/edit" target="_blank">Alliance roster</a> | <a href="/img/landing/tropic-horde.jpg" target="_blank">Horde roster</a></p>
        </div>
        <div >
        <img src="img/landing/tropic-logo.png"/></div>
       </div></div></section>
       
       <section >
       <div className="container">
          <div className="grid">
        
        <grid-item>
       {features && features.length > 0 && (
            <div>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
            </div>
        )}</grid-item>
        <grid-item><div className="grid-center"><img src="img/landing/tropic-overview.png" className="img-responsive"/></div></grid-item>
        <grid-item>
        {features2 && features2.length > 0 && (
            <div>
                {features2.map((props, idx) => (
                  <Feature2 key={idx} {...props} />
                ))}
            </div>
        )}</grid-item>
          </div>
          </div>
          
        </section>

        <div className="hero tropic--primary hero-banner" id="tropic">
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
              to='https://discord.gg/gKg8qfj8hP'>
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
              to='https://discord.gg/9HvZc6ntzE'>
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
        <div className="col col-md-6 center ">
        <div className='responsive-google-slides'>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRdT1954PxagEt0kVhvz3ZvQK92IlNjGh4U9O82N0eSDkIzB1mP673WsBjBl-QFnrjJApAaalA605xl/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="577" allowFullScreen="true" mozallowFullScreen="true" webkitallowFullScreen="true"></iframe>
        </div>
        <div className='responsive-google-slides'>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSP9oZzf6axVjLde32DUCylbWzR9Xiyydg96HcAaxkX_afw7uw6qy0u0wqBs6KJjIBysZBtJQZbinOP/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="615" allowFullScreen="true" mozallowFullScreen="true" webkitallowFullScreen="true"></iframe>
        </div>
        <div className='responsive-google-slides'>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQLZhuG8NsW15HTN0zt7lTucb7PCNSjBSbrVK2Q12dywvSItaQBuiYyQyEnTQ1WqX09wgDZRfYfztMd/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="577" allowFullScreen="true" mozallowFullScreen="true" webkitallowFullScreen="true"></iframe>
        </div>
        <h1>Zul'Gurub Event</h1>
        <p><img src="img/landing/tropic-zg.png" /></p>

        <p>See <a href="https://docs.google.com/presentation/d/1_-rGWZkL5a0zFJX1d9o6TkTamqT0KAFnzII5m87Iz14">this link</a> to create a copy of the journal slidedeck.</p>
        <div className='responsive-google-slides'>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTK2Hhui7-_FqMepYwnVd80T2Fp6CQ5WcYIOd3G7kPVW19EHquhI3fUHA8utsAkur9XkbP_6FMmGvOy/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowFullScreen="true" mozallowFullScreen="true" webkitallowFullScreen="true"></iframe>
        </div>
        </div>
        </div>
        </div>


        </section>
      </main>
      
    </Layout>
  );
}

export default TropicSunder;