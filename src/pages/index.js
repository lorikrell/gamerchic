import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import './conquest.scss';
import useBaseUrl from '@docusaurus/useBaseUrl';

const features = [
  {
    title: 'Warcraft Worlds',
    imageUrl: 'img/landing/logo-wc.png',
    description: (
      <>
        Find resources and guides for your Warcraft adventures and Conquest conflicts. These include events, campaigns, and vehicle battles.
      </>
    ),
    link: 'docs/warcraft/intro',
  },
  {
    title: 'Dungeon Master Guides',
    imageUrl: 'img/landing/logo-gamerchic.png',
    description: (
      <>
        Learn how to run events and campaigns for TTRPG and MMO-RPG games, spycraft, horror and more! 
      </>
    ),
    link:'docs/events-campaigns',
  },
  {
    title: 'Graphics and Guides',
    imageUrl: 'img/icons/graphic.png',
    description: (
      <>
        Sonceri brings you Photoshop templates, wax seals, coins, event images, and more!
      </>
    ),
    link:'docs/intro',
  },
  {
    title: 'Adventure Journals',
    imageUrl: 'img/icons/journals.png',
    description: (
      <>
        Create personal journals, scrolls, and notice boards using these Google slide decks.
      </>
    ),
    link:'docs/photoshop/journals',
  },
  {
    title: 'Lives Exalted',
    imageUrl: 'img/landing/logo-exalt.png',
    description: (
      <>
        Risen by gods, find campaign information and game resources for Exalted games. Includes fan creations and campaigns. 
      </>
    ),
    link: 'docs/exalted/resources',
  },
  {
    title: 'A World of Darkness',
    imageUrl: 'img/landing/logo-wod.png',
    description: (
      <>
        Resources and content for all WoD games as we wander them, including Kindred of the East, Vampire: The Masquerade, and more. 
      </>
    ),
    link: 'docs/w-o-d/intro',
  },
];

const highlights = [
  {
    title: 'txt',
    imageUrl: 'img/landing/logo-dnd.png',
    description: (
      <>
        Text.
      </>
    ),
    link: 'http://google.com',
  },
];

function Feature({imageUrl, title, description, link}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className="land-box">
      {imgUrl && (
        <div className="land-image">
          <img className="featureImage" src={imgUrl} alt={title} />
        </div>
      )}
      <div className="land-body">
      <a href={link} className="land-link"><h3 className="land-title">{title}</h3></a>
      <div className="land-desc"><p>{description}</p></div>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="img/landing/sonc-logo.png"></img>
        <div className={styles.buttons}>
        </div>
      </div>
    </header>
  );
}

function Highlight({imageUrl, title, description, link}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className="land-box">
      {imgUrl && (
        <div className="land-image">
          <img className="featureImage" src={imgUrl} alt={title} />
        </div>
      )}
      <div className="land-body">
      <a href={link} className="land-link"><h3 className="land-title">{title}</h3></a>
      <div className="land-desc"><p>{description}</p></div>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
<Layout
      title="Sonceri.art"
      description="This site provides gaming resources for TTRPGs, MMOs, campaigns, events, DMs, and more! Graphics, guides, advice.">
      <HomepageHeader />
      <main>
        {features && features.length > 0 && (
          <section className="spacer">
            <div className="container">
            <div className="land-flex">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
            </div></div>
          </section>
        )}

        <section className='spacer'>
        <div className="hero gamerchic-special--primary hero-banner" id="barrens">
      <div className="container">
      <div className="row">
        
        <div className="col col--6">
        <h1 className="blog-title left">WARCRAFT EMOJIS</h1>
          <p className="blog-subtitle left">Finding Warcraft emojis and stickers for your Discord, Twitch, and other accounts can be hard. Sonceri's emoji sets include 9 free images you can use for emojis and stickers in Discord and other sites. Each set includes additional options through Ko-fi donations. Find your sets today!</p>
          
          <div className="left">
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to='docs/photoshop/wow-emoji'>
              Get Emojis and Stickers
            </Link>
          </div>
        </div>

        <div className="col col--6">
          <h1 className="blog-title right">JOURNALS AND WAX SEALS</h1>
          <p className="blog-subtitle right">Document your character journey. Capture and reveal ideas and messages from your villains and allies in storylines. Craft short stories and grand declarations for players to find and follow. Sonceri's <a href="docs/photoshop/journals">Journals</a> and <a href="docs/photoshop/wax-seals">Wax Seals</a> give you the options to create visual letters, notice boards, scrolls, and wax seals with symbols for your house, group, organization, or faction.</p>
          
          <div className="buttons-right">
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to='docs/photoshop/journals'>
              Find a Journal or Scroll
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

export default Home;