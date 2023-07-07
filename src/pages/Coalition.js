import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import ReactPlayer from 'react-player/youtube';
import './coalition.scss';
import Iframe from 'react-iframe';

const features = [
  {
    title: 'Open to All',
    imageUrl: 'img/icons/witch2.png',
    description: (
      <>
        Players, dungeon masters, and guests are all welcome from Moon Guard and across US servers. New players and veterans can find friends, guilds, and events to join.
      </>
    ),
  },
  {
    title: 'Connect in Discord',
    imageUrl: 'img/icons/discord2.png',
    description: (
      <>
        Schedules, plans, discussions, narration updates, RP prompts, and more are tracked in the <a href="https://tinyurl.com/TheCoalitionoftheHorde">Coalition of the Horde Discord</a>.
      </>
    ),
  },
  {
    title: 'Recommended Addons',
    imageUrl: 'img/icons/tools2.png',
    description: (
      <>
        We recommend <a href="https://www.curseforge.com/wow/addons/total-rp-3" target="_blank">TotalRP3</a>, <a href="https://www.curseforge.com/wow/addons/cross-rp" target="_blank">Cross RP</a>, <a href="https://www.curseforge.com/wow/addons/listener" target="_blank">Listener</a>, <a href="https://www.curseforge.com/wow/addons/dicemaster" target="_blank">Dicemaster</a>, and <a href="https://www.curseforge.com/wow/addons/elephant">Elephant</a>. Find addons in apps like <a href="https://wowup.io/" target="_blank">WoWUp.io</a>. 
      </>
    ),
  },
  
];

const features2 = [
  {
    title: 'Storytelling',
    imageUrl: 'img/icons/storytelling2.png',
    description: (
      <>
        Explore your story through battles, roleplay, events, and gatherings. We provide in-game and in-Discord options. Recommend stocking up on <a href="https://www.wowhead.com/item=2460/elixir-of-tongues">Elixir of Tongues</a>!
      </>
    ),
  },
 
  {
    title: 'D20 & RP Events',
    imageUrl: 'img/icons/d202.png',
    description: (
      <>
        We use the <a href="https://docs.google.com/document/d/1nlRtaicINUoWWn35ny1MoXp1-zMDL1YMTIW69sHd0v0" target="_blank">Conquest D20 system</a> with <a href="">Advanced Expertise</a> for D20 events. DMs may include additional mechanics and event loot.
      </>
    ),
  },
  {
    title: 'Vehicle Battles',
    imageUrl: 'img/icons/ship2.png',
    description: (
      <>
        We use the <a href="https://docs.google.com/document/d/1Q9vnQ6pLNIQgCSIcxVzJzsQnPSz3nXffgqEjI0nqUsE/edit#heading=h.c9xwudtolrcj" target="_blank">Conquest Warmachine</a> system with advanced options for vehicle battles in Discord, including squads, naval, land, and air!
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

function Conquest() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout title="Coalition of the Horde" 
    description="Warcraft Coalition of the Horde is a community of storytellers and players based on Moon Guard. We present story and adventures arcs set throughout Azeroth and beyond for all walks of life.">
      <header className='coalition-header'>
      <div className='coalition-hero' id='coalition'>
      
        
      </div>
      </header>

      <main id='coalition'>
      <section className='spacer'>
        <div className='container'>
        <div className='row'>
        <div className="col col-md-6">

        <h1>For Hearth, Home, and Horde</h1>
          
        <p>Many peoples stand among the Horde and call them comrades. Once considered the home of outcasts and the misunderstood, the Horde has changed over the years. These diverse peoples strive to unite through diversity and protect the lives and lands of those dedicated to a future of freedom. The meaning varies among all, and yet the core sentiment remains true. But that freedom requires a good fight, be it with arms, wits, or belief.</p>
        
        <p>The <strong>Coalition of the Horde</strong> is a community project that focuses on storytelling and coordination between the many races and creeds in the Horde, neutral factions, and independents. This community provides a home to share stories, build histories, and experience plot lines set in the Warcraft universe. The group meets socially and holds small to large campaigns using freeform roleplay and dungeon mastered events using d20 rules. All players are welcome across US servers, with events currently hosted on Moon Guard (Central time zone).</p>

        <p>We welcome players of diverse backstories and themes to our events, including the Horde, independents, and all neutral factions such as the Argent Crusade, Earthen Ring, Cenarion Circle, Ebon Blade, Kirin Tor, Dracthyr of the Dark Talons and Healing Wings, and others. Campaigns include a diverse range of options and conflicts, PVE and PVP, battles to story circles, roleplayed medical and security, vehicle battles, and camp life. Join our <a href="https://tinyurl.com/TheCoalitionoftheHorde">Discord</a> and see our <a href="https://docs.google.com/document/d/18lFup8tGF8ynTv_tuHVJIOmi5HLvuFwSaNwB4H-2htE/edit?usp=sharing">Charter.</a></p>
        </div>
        <div className="center">
        <img src="img/coth/coth-logo.png" className='responsive'/></div>
       </div>
       <div className='row'>
       <div className="col col-md-6 center">
        <img src="img/icons/icon-horde.png"/><img src="img/icons/icon-argent.png"/><img src="img/icons/icon-cenarion.png"/><img src="img/icons/icon-earthenring.png"/><img src="img/icons/icon-ebonblade.png"/><img src="img/icons/icon-kirin-tor.png"/><img src="img/icons/icon-valdrakken-accord.png"/><img src="img/icons/icon-cartel.png"/><img src="img/icons/icon-independent.png"/><img src="img/icons/icon-alliance-neutral.png"/>
        </div>
       </div>
       </div></section>
       
       <section >
       <div className="container">
          <div className="grid">
       
       <grid-item>
       {features && features.length > 0 && (
         <div>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}</div>
        )}
        </grid-item>

        <grid-item><div className="grid-center"><img src="img/coth/coth-info.png" className="img-responsive"/></div></grid-item>
        
        <grid-item>
        {features2 && features2.length > 0 && (
          <div>
                {features2.map((props, idx) => (
                  <Feature2 key={idx} {...props} />
                ))}</div>
        )}</grid-item>
          </div>
          </div>
          
        </section>
        <section >
        <div className="hero coalition--primary coalition-banner" id="coalition">
      <div className="container">
      <div className="row">
        
        <div className="col col--6">
          <h1 className="blog-title">Join Our Discord</h1>
          <p className="blog-subtitle">Craft your story and find community in the Coalition Discord. All members of the Horde, neutral aligned factions, mercenaries, and Alliance comrades welcome! We post resources for characters, dungeon masters, calendars, rp channels, and information on campaigns.</p>
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
          <h1 className="blog-title right">Horde Nights</h1>
          <p className="blog-subtitle right">Seeking walk-up roleplay for the Horde? Monday nights 7:30p central the Coalition holds social nights hosted on Moon Guard! Join us for a relaxing wind-down night starting in the Valley of Honor in Orgrimmar. Find more events in our calendar.</p>
          <div className="buttons-right">
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to='https://discord.gg/HE98MHK9KP'>
              Check the Event Calendar
            </Link>
          </div>
        </div>
        
      </div>
      <div className='creditsdiv'>
          <p>Art by <a href="https://ko-fi.com/imadreamwalker">Dreamwalker</a></p>
      </div>
      </div>
      </div>
      </section>

      <section className='spacer'>
        <div className='container'>
        <div className='row '><div className="col col-md-12">
        <div className="center">
        <img src="img/coth/twilight-genesis-logo.png" />
          </div></div></div>
        <div className='row'>
        <div className="col col-md-6">          
        <p>With the eyes of Azeroth cast toward the Dragon Isles, Twilight's Hammer has once again resurfaced. Sightings of twilight drakes have again been reported by both Highbank and Dragonmaw Port, while claims have been made that some have already slain a select few of the beasts. But these were not old, wily creatures who somehow had remained unseen for a dozen years. These were adolescents. A whole new brood of Twilight Drakes have been born. Goriona, the twilight drake who once served as the mount of Warmaster Blackthorn, after abandoning her master to his fate, had left a clutch of eggs hidden deep inside a cavern in the Twilight Highlands before going into hiding herself.</p>
        
        <p>The Coalition of the Horde presents: Twilight Genesis!</p>

        <ul>
          <li><strong>When:</strong> July 15th-22nd</li>
        <li><strong>Where:</strong> The Twilight Highlands</li>
        <li><strong>Who:</strong> Horde and Neutral Factions</li>
        <li><strong>Phasing:</strong>Please complete all Twilight Highlands quests</li>
        </ul>
        <p>Join our <a href="https://tinyurl.com/TheCoalitionoftheHorde">Discord</a> and see our <a href="https://us.forums.blizzard.com/en/wow/t/hn-rp-campaign-twilight-genesis-july-15th-22nd">forum post</a> for details!</p>
        <img src="img/coth/hardmode.png" />
        <p>For Twilight Genesis, players will be able to choose to opt-into a more challenging system to add more interesting elements to their play and recovery. There are three facets to this system, and players can pick any number of them to add to their play if they choose.</p>
        <ul>
          <li><strong>Heroic Events are missions of a dire nature.</strong> For these events, the DM will throw higher difficulty checks and heavier damage at players, creating a full-range of mechanics designed to not only make OCs feel like they are in dire straits, but also reward opportunities for heroic actions, and encourage cooperation to ensure every character leaves the event in one piece.</li>
          <li><strong>Limited Healing between missions.</strong> Unlike previously, players who pick this option do not full heal at the start of everyday. They will get a 1d3 dice roll to heal with rest, and an additional +3 HP if they were seen to by a medic.</li>
          <li><strong>Exhaustion.</strong> At the start of normal mission day, the player can roll to see how much sleep their character got. Not being well rested enough will give the character a debuff which can compound with multiple days of poor rest.
          </li>
        </ul>
        </div>
        <div className="center">
        <img src="img/coth/twilight-genesis-card.png" className='responsive'/></div>
       </div>
       </div></section>

       <section className='spacer'>
        <div className="hero genesis-events hero-banner" >
      <div className="container">
      <div className="row">
        
        <div className="col col--6">
          <h2 className="blog-title">Allies Seeking Aid!</h2>
          <p><img src="img/coth/card-red-dragonflight.png" className='responsivecard'/> <img src="img/coth/card-earthen.png" className='responsivecard'/></p>
        </div>

        <div className="col col--6">
          <h1 className="blog-title right">Regional Forces</h1>
          <p className='right'><img src="img/coth/card-wildhammer.png" className='responsivecard'/> <img src="img/coth/card-dragonmaw.png" className='responsivecard'/></p>
        </div>
      </div>
      </div>
      </div>

       </section>

      </main>
      
    </Layout>
  );
}

export default Conquest;