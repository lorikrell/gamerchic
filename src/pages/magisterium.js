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
    link: 'docs/setting/astral-star',
  },
  {
    title: 'Elemental Scales',
    imageUrl: 'img/magesterium/elemental-scales.png',
    description: (
      <>
        Practitioners of the elements, forces of natural powwer. Every member of the Elemental Scales has walked through the fire of their calling, be it the realms of nature, fire, earth, water, air, and the very gravity of the world.
      </>
    ),
    link: 'docs/setting/elemental-scales',
  },
  {
    title: 'Endless Scrolls',
    imageUrl: 'img/magesterium/endless-scrolls.png',
    description: (
      <>
        Keepers of arcane and the craft of enchantment, the prime of power. The greatest group of scholarship welcomes all from the spires at some point in their life. Beyond magic crafts, they herald exploration into the world bringing back new magics.
      </>
    ),
    link: 'docs/setting/endless-scrolls',
  },
  {
    title: 'Infinite Obelisk',
    imageUrl: 'img/magesterium/infinite-obelisk.png',
    description: (
      <>
        Agents of chaos and order, shadow and light, fel and holy. The Infinite Obelisk is a fractured tower of halves, ever watchful of each other and the power they wield. The only path of balance being the war between them, they walk a hard path. 
      </>
    ),
    link: 'docs/setting/infinite-obelisk',
  },
  {
    title: 'Veiled Eye',
    imageUrl: 'img/magesterium/veiled-eye.png',
    description: (
      <>
        Wanderers of the mind, soul, spirit, and the emotional self. The Veiled Eye understands the body and magics are nothing without the soul and mind to weild them. They are the heart of the spires, ever offering support to the others and themselves. 
      </>
    ),
    link: 'docs/setting/veiled-eye',
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

function Feature({imageUrl, title, description, link}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className="land-box">
      {imgUrl && (
        <div className="mage-features-item ">
          <img className="mage-features-icon" src={imgUrl} alt={title} />
          <a href={link} className="land-link"><h3>{title}</h3></a>
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
      
      <h1 className='sonceri-title'>The Magisterium</h1>
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
        <p>Yet time decays all things, and the heavy losses in the march of the Lich King have left the isle woefully understaffed. It may be possible to pierce the remaining magics, or perceive the spires through the mists.</p>
        <p></p>
        </div>
        <div className="col col-md-6">
        <h2>Aegis Arcanum</h2>
        <p>The Aegis Arcanum formed to control and judge all aspects of the spires from entering students, rank advancement, funding, materials, external support, and projects. Each spire sends leaders to the inner circle of the Aegis to speak for the many. The positions differ between the spires, some are voted others are just told. The current speaker for the Aegis is Dumath Evencrown of the Veiled Eye.</p>
        <p>All Magisterium members can vote on resolutions. Major decisions, judgments, and drafting of laws is handled by the inner council. Each spire has 1 vote in these matters, no abstentions allowed.</p>
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
        <img src="img/magesterium/logo-remnants-of-creation.png" />
          </div></div></div>
        <div className='row'>
        <div className="col col-md-6">

        <p>It has been some months since the gathering of forces now called the Fellowship of Azeroth sought the Azure Span. When last they heeded the call of the Silver Legacy and Dragonscale Expedition, they uncovered new relics and artifacts to collect throughout the lands, claimed new knowledge of a forgotten era, and compiled everything for investigation at the Three Falls camp. However, the hunger and need of the Sundered Flame also knew of the collection, stealing away with key items to aid in their battles for Neltharion's deeply hidden labs.</p>
        <p>Battled back, the Sundered Flame left the battles for the skies, taking their injured and aching leader Eternak away to the Forbidden Reach and beyond. Despite the turn of events, the many reclaimed these powerful artifacts and settled with the Silver Legacy to continue the investigation efforts. For months, they in league with the Dragonscale Expedition have sought the secrets of these items and the respect of Valdrakken. It seems they have been quite successful!</p>
        <p>Now a new age of exploration and learning has come! While the explorers and archeologists have high hopes and bright eyes for the future, those of the Fellowship know where great success comes, the hunger of other forces stirs. Will the unknown pirate lords make themselves known again? Have bandits laid in wait, plotting revenge? Will scholars find themselves in unfortunate situations in the wilds of the Span?</p>
        <p>The Silver Legacy on behalf of the new Azerothian Archives welcome you to a new journey into learning and adventure! <strong>STARFALL: Remnants of Creation</strong> is the third campaign in the exploration adventures of the Fellowship of Azeroth in Dragonflight! We welcome everyone to a slightly different experience and schedule with hopes of expanding over time.</p>
        
        <p>This is part 3 to the Starfall campaign, Remnants of Creation!</p>

        <ul>
          <li><strong>When:</strong> Arc 1 Feb 11-13 AND Arc 2 Feb 18-20</li>
        <li><strong>Where:</strong> Azure Span, Zaralak Caverns, and other new places</li>
        <li><strong>Lead Storytellers:</strong> Sonceri, Arathyr, Amasira, Gredlick</li>
        </ul>
        <img src="img/coth/hardmode.png" />
        <p>We support the <a href="https://docs.google.com/document/d/1dv7NzMgNHK95Qmop8ffAVjhR-458DbYALqcqk-J0JOE/edit#heading=h.nt3aaztb7jx2" target="_blank">Opt In Hardmore</a> and will be using the new <a href="https://docs.google.com/document/d/1dv7NzMgNHK95Qmop8ffAVjhR-458DbYALqcqk-J0JOE/edit" target="_blank">FOA D20 Rules</a> with Expertise. The events will also include a vehicle battle using the squad adventure system.</p>
        </div>
        <div className="center">
        <img src="img/magesterium/starfall3.jpg" /></div>
       </div>

       </div></section>

      <section className='spacer'>
        <div className='container'>
        <div className='row '><div className="col col-md-12">
        <div className="center">
        <img src="img/magesterium/logo-awakened-flame.png" />
          </div></div></div>
        <div className='row'>
        <div className="col col-md-6">

        <p>Since the battle against bandits and the strange Betrayer, the Silver Legacy continued their investigations of the Ruby Life Vaults and crystal libraries.  They have found hidden records, training materials, and notes of powerful caches of weapons, armors, and artifacts...including more libraries! Throughout the Dracthyr have extended their support, avidly intrigued by these ancient recordings. Yet Guard Master Munera Cloudwalker took another route, seeking into the wilderness with a few dracthyr and guards from the Dragonscale Expedition to track down the Red Curios Bandits. She returned with new leads and old trails using information gained from the captured bandit interrogation, updating maps, and preparing battle plans. In a recent meeting, the Legacy determined it's time to seek their allies!</p>
        <p>Messages have been sent to various offices across Azeroth calling for aid! </p>
        <p>Join the Silver Legacy at the Ruby Life Vault to seek and end the bandits, safeguard lost relics and hostages, and investigate these caches of power. Through battle, magic, and scholarship, they hope to end the threats and continue seeking these crystal libraries. But where will the trail lead? It begins with bandits and the records of the ruins, and leads to a final showdown and a new adventure. And throughout, shadows fall from wings, and draconic eyes follow progress. Expect twists, turns, scouting, battle, and magic!</p>
        
        <p>This is the second part to the Starfall campaign, Awakened Flame!</p>

        <ul>
          <li><strong>When:</strong> May 22-26 (Mon-Fri) with Wednesday as a Free Day of open rp</li>
        <li><strong>Where:</strong> Waking Shores to Azure Span</li>
        <li><strong>Lead Storytellers:</strong> Sonceri & Shin</li>
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
        <div className="center">
        <img src="img/magesterium/starfall2.jpg" /></div>
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

        <p>The group learned of bandits plundering the countryside of the Dragon Isles, thieving relics, artifacts, and scholars. A few Dracthyr ended up in their hands, only one still alive but terribly wounded. The bandits went by a cover name of the Red Fox Curios, working for an unknown group. They prepared to smuggle their finds, just waiting for a ship! Adventurers caught up with the Red Fox when they stole from the wrong caravan, the Silver Legacy.</p>

        <p>Freeing the prisoners, bandits on the run, the group sought out the still missing Silver Legacy...finding them held in a ruin they couldn't escape from! By freeing them, they found a strange crystal library crafted of the Blue Flight with a construct called Saccageur embedded within it. The vision of a starlit dragon were the imprinted memories of an old dragon long past, holding records of numerous historical texts, lessons for whelplings, and odd entries regarding the Dracthyr and other experimental works. </p>

        <p>As they repaired the ruins to open the door though, power flared up through a series of linked spells to a prison in a tower. Light and magic gleamed high into the sky, charging the tower and the spellwork locked in a time incantation. A prison of a corrupted dragon called the Betrayer and a Dracthyr named Brightmorn. As they battled to break the prison, end that battle held in stasis for untold years, and heal the Dracthyr, the many realized this was just one part in a larger mystery!</p>

        <p><i>And so have stars begun to fall, it begins with the final rise of dawn, and ends in the depths where stars die.</i></p>
        
        <p>This was the first campaign for Starfall, March 2023!</p>
        </div>
        <div className="center">
        <img src="img/magesterium/starfall1.jpg" /></div>
       </div>

       </div></section>


      </main>
      
    </Layout>
  );
}

export default Conquest;