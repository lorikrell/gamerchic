import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import ReactPlayer from 'react-player/youtube';
import './sonceri.scss';
import Iframe from 'react-iframe';

const features = [
  {
    title: 'Astral Star',
    imageUrl: 'img/magesterium/astral-star.png',
    description: (
      <>
        Chronomancers with the power of fate, prophecy, and time. Those of the Astral Star seek divergent paths of learning, mystical to mathematical, in the spire halls. And yet the orders come to similar conclusions regardless of the journey.
      </>
    ),
  },
  {
    title: 'Elemental Scales',
    imageUrl: 'img/magesterium/elemental-scales.png',
    description: (
      <>
        Practitioners of the elements, forces of natural powwer. Every member of the Elemental Scales has walked through the fire of their calling, be it the realms of nature, fire, earth, water, air, and the very gravity of the world.
      </>
    ),
  },
  {
    title: 'Endless Scrolls',
    imageUrl: 'img/magesterium/endless-scrolls.png',
    description: (
      <>
        Keepers of arcane and the craft of enchantment, the prime of power. The greatest group of scholarship welcomes all from the spires at some point in their life. Beyond magic crafts, they herald exploration into the world bringing back new magics.
      </>
    ),
  },
  {
    title: 'Infinite Obelisk',
    imageUrl: 'img/magesterium/infinite-obelisk.png',
    description: (
      <>
        Agents of chaos and order, shadow and light, fel and holy. The Infinite Obelisk is a fractured tower of halves, ever watchful of each other and the power they wield. The only path of balance being the war between them, they walk a hard path. 
      </>
    ),
  },
  {
    title: 'Veiled Eye',
    imageUrl: 'img/magesterium/veiled-eye.png',
    description: (
      <>
        Wanderers of the mind, soul, spirit, and the emotional self. The Veiled Eye understands the body and magics are nothing without the soul and mind to weild them. They are the heart of the spires, ever offering support to the others and themselves. 
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
    <div className="land-box">
      {imgUrl && (
        <div className="mage-features-item ">
          <img className="mage-features-icon" src={imgUrl} alt={title} />
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
        <div className="mage-features-item ">
          <img className="mage-features-icon" src={imgUrl} alt={title} />
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
    <Layout title="The Magesterium" 
    description="The Magesterium is a custom Warcraft setting written by Sonceri. An isle of 5 spires seeking relics and magics in secret.">
      <header className='sonceri-header'>
      <div className='sonceri-hero' id='sonceri'>
      
      <h1 className='sonceri-title'>The Magesterium</h1>
      </div>
      </header>

      <main id='sonceri'>
      <section className='spacer'>
        <div className='container'>
        <div className='row'>
        <div className="col col-md-6">

        <h1>A New Age of Magic</h1>
          
        <p>Risen in the age of high magics and continued under relentless levels of secrecy, the Magisterium has maintained an academy of magic to one day rival the towers of Silvermoon and Dalaran Magocrats. Yet hiding from the world, numerous forces drove the academy further away from society, the memories, and records of the High Elven and later the Sin'dorei. Those that may have remembered the stronghold of magic fell before the armies of the Lich King and destruction of the Sunwell. Yet the stronghold of magic also felt that wrath, losing many in the wake of undeath. With dwindled numbers, continued secrecy, the knowledge has gathered dust among the few masters.</p>
        <p>With each passing year, the spires have sought new magi and scholars, delving beyond magi and elven kin to bolster ranks. Here and there, new members have joined giving solumn vow. The recruitment nigh entirely run by a public organizationed called The Silvered Legacy. Everything moved slowly with purpose until the mists parted revealing the Dragon Isles. In the quarum of the Aegis of Arcanum, the seeking of the aspects and hunger for lost magics warred on the council floor. Above all concerns, the fear of their isle being located and taken for the wealth of knowledge dominated discussions. Yet it did not win the majority, and the Silvered Legacy has struck out to the isles.</p>
        <p>What comes next? Who will join the ranks? What magics will they find? The answers lie in the campaigns and stories to come.</p>
        </div>
        <div className="center">
        <img src="img/magesterium/mage-letter.png" className='responsive'/></div>
       </div>

       <div className='row'>
        <div className="col col-md-6">
        <h2>The Isle of Spires</h2>
        <p>The spires rise from a small set of isles off the coasts of Sunstrider Isle and Quel'danas. For ages, the protective wards and social methods of influence have kept the academy and secretive mages from scrutiny from the Quel'thalas Magisterium, the Sun Spire (after Kael'thas' departure), and further forces seeking any forms of magic. With the fall of the Sunwell and invasion of the Lich King, the isle was lost to time and history, disappearing with the dead.</p>
        <p>Yet time decays all things, and the heavy losses in the marsh of the Lich King have left the isle woefully understaffed. It may be possible to peirce the remaining magics, or perceive the spires through the mists.</p>
        <p></p>
        </div>
        <div className="col col-md-6">
        <h2>Aegis Arcanum</h2>
        <p>The Aegis Arcanum formed to control and judge all aspects of the towers from entering students, rank advancement, funding, materials, external support, and projects. Each tower sends leaders to the inner circle of the Aegis to speak for the many. The positions differ between the spires, some are voted others are just told. </p>
        <p>All Magisterium members can vote on resolutions. Major decisions, judgments, and drafting of laws is handled by the inner council. Each tower has 1 vote in these matters, no abstentions allowed.</p>
        <p></p>
        </div>
        </div>
       </div></section>
       
       <section >

       {features && features.length > 0 && (
          <section className="spacer">
            <div className="container">
            <div className="mage-flex">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
            </div></div>
          </section>
        )}


        </section>
        <section >
        <div className="hero sonceri--primary sonceri-banner" id="sonceri">
      <div className="container">
      <div className="row">
        
        <div className="col col--6">
          <h1 className="blog-title">Allies: Silver Legacy</h1>
          <p className="blog-subtitle">The explorers faction, the Silver Legacy, is the public face for the Magisterium. They have answered the call of their allies among the Explorer's League and Reliquary, and traveled to the Dragon Isles. They have become allies for those that seek their aid!</p>
          <div className="buttons-pages">
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to='/docs/setting/silver-legacy'>
              Join the Legacy
            </Link>
          </div>
        </div>

        <div className="col col--6">
          <h1 className="blog-title right">Becoming a Member</h1>
          <p className="blog-subtitle right">The Spires have started interviewing and taking new members. Most were found through the Silver Legacy, others through sheer will and research. Each spire has tests to entry, some you may have taken without realization. And giving your oath is a magical pact. One of your family members could also be from the Magisterium, perhaps marking for consideration. You don't need to be a mage to join.</p>
          
        </div>
        
      </div>
      <div className='creditsdiv'>
          <p>Art by <a href="https://lorikrell.myportfolio.com/">Sonceri</a></p>
      </div>
      </div>
      </div>
      </section>

      <section className='spacer'>
        <div className='container'>
        <div className='row '><div className="col col-md-12">
        <div className="center">
        <img src="img/magesterium/logo-awakened-flame.png" />
          </div></div></div>
        <div className='row'>
        <div className="col col-md-6">          
        <p>As the Silver Legacy investigate the ruins of the Ruby Life Vaults, they have worked out a few more details. During their work, Guard Master Munera Cloudwalker sets off into the wilderness with a few dracthyr and guards from the Dragonscale Expedition to track down the Red Curios Bandits. With more information, a few caches to check based on the interrogation of a captured member, Cloudwalker speaks with the Legacy. It's time to seek their allies! Messages arrive in various offices across Azeroth to join the Silver Legacy in the Ruby Life Vault to seek and end the bandits, save any final hostages, and safeguard lost relics. Seekers and scholars need additional help with their findings of crystal libraries. But where will the trail lead...?</p>
        
        <p>This was the second part to the Starfall campaign, Awakened Flame!</p>

        <ul>
          <li><strong>When:</strong> May 22-26</li>
        <li><strong>Where:</strong> Waking Shores to Azure Span</li>
        <li><strong>Lead Storyteller:</strong> Sonceri</li>
        </ul>
        <img src="img/coth/hardmode.png" />
        <p>We will be testing a new option for campaigns! Players will be able to choose to opt-into a more challenging system to add more interesting elements to their play and recovery. There are three facets to this system, and players can pick any number of them to add to their play if they choose.</p>
        <ul>
          <li><strong>Heroic Events are missions of a dire nature.</strong> For these events, the DM will throw higher difficulty checks and heavier damage at players, creating a full-range of mechanics designed to not only make OCs feel like they are in dire straits, but also reward opportunities for heroic actions, and encourage cooperation to ensure every character leaves the event in one piece.</li>
          <li><strong>Limited Healing between missions.</strong> Unlike previously, players who pick this option do not full heal at the start of everyday. They will get a 1d3 dice roll to heal with rest, and an additional +3 HP if they were seen to by a medic.</li>
          <li><strong>Exhaustion.</strong> At the start of normal mission day, the player can roll to see how much sleep their character got. Not being well rested enough will give the character a debuff which can compound with multiple days of poor rest.
          </li>
        </ul>
        </div>
       </div>
       </div></section>


       <section className='spacer'>
        <div className='container'>
        <div className='row '><div className="col col-md-12">
        <div className="center">
        <img src="img/magesterium/logo-silvered-legacy.png" />
          </div></div></div>
        <div className='row'>
        <div className="col col-md-6">          
        <p>The Dragonscale Expedition has run into a bit of a problem...they lost of one their groups! The Silver Legacy, a group of magical scholars and disaster experts, sought a ruin one of the Explorers kind of...exploded. But the treacherous wildlife and wayward forces have cut off communications. Will you aid? A Silvered Legacy was the first expedition of the Starfall Campaign. Your missions brought together new alliances between friends and guilds with the potential to expand that kinship with the Silver Legacy! Tales of magic, lore of the Dracthyr, battles against foes and elements, and opportunities abounded!</p>
        
        <p>This was the first campaign for Starfall, March 2023!</p>

        </div>
       </div>
       </div></section>


      </main>
      
    </Layout>
  );
}

export default Conquest;