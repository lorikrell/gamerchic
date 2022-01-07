import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const features = [
  {
    title: 'Graphic Resources',
    imageUrl: 'img/landing/logo-gamerchic.png',
    description: (
      <>
        Sonceri brings you Photoshop templates, wax seals, coins, event images, and more!
      </>
    ),
    link:'docs/intro',
  },
  {
    title: 'Dungeon Master Guides',
    imageUrl: 'img/landing/logo-gamerchic.png',
    description: (
      <>
        Sonceri brings you Photoshop templates, wax seals, coins, event images, and more!
      </>
    ),
    link:'docs/events-campaigns',
  },
  {
    title: 'Warcraft Conquest',
    imageUrl: 'img/landing/logo-wc.png',
    description: (
      <>
        Find resources and guides for your Warcraft Conquest adventures and vehicle battles. See Sonceri's tips and tricks for more goodies.
      </>
    ),
    link: 'docs/wow-conquest/intro',
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
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
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
      title={`Hello from ${siteConfig.title}`}
      description="This site provides gaming resources for Warcraft Conquest, RPG tabletop adventures, and so much more! Graphics, guides, advice.">
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
      </main>
    </Layout>
  );
}

export default Home;