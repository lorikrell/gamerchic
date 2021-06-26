import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const features = [
  {
    title: 'Sonceri Tips & Tricks ',
    imageUrl: 'img/landing/logo-gamerchic.png',
    description: (
      <>
        Sonceri brings you templates, graphics, guides, and more to help you get creative with your events.
      </>
    ),
    link: (
      <>
      <a href="docs/intro" class="land-link">Find cool adventure stuff!</a>
      </>
    ),
  },
  {
    title: 'Warcraft Conquest',
    imageUrl: 'img/landing/logo-wc.png',
    description: (
      <>
        Find resources and guides for your Warcraft Conquest adventures and vehicle battles. See Sonceri's tips and tricks for more goodies.
      </>
    ),
    link: (
      <>
      <a href="http://google.com" class="land-link">Learn more about Conquest!</a>
      </>
    ),
  },
  {
    title: 'Lives Exalted',
    imageUrl: 'img/landing/logo-exalt.png',
    description: (
      <>
        Risen by gods, find campaign information and game resources for Exalted games. Includes fan creations and campaigns. 
      </>
    ),
    link: (
      <>
      <a href="http://google.com" class="land-link">Delve into the night...</a>
      </>
    ),
  },
  {
    title: 'A World of Darkness',
    imageUrl: 'img/landing/logo-wod.png',
    description: (
      <>
        Resources and content for all WoD games as we wander them, including Exalted, Kindred of the East, Vampire: The Masquerade, and more. 
      </>
    ),
    link: (
      <>
     Coming soon...
      </>
    ),
  },
  {
    title: 'Dungeons for Your Dragons',
    imageUrl: 'img/landing/logo-dnd.png',
    description: (
      <>
        Find custom world and battle maps, tokens, NPCs, coins, wax seals, and settings. Many ideas for game masters and players.
      </>
    ),
    link: (
      <>
      Coming soon...
      </>
    ),
  },
  {
    title: 'Running in Shadows',
    imageUrl: 'img/landing/logo-shadowrun.png',
    description: (
      <>
        Resources for your fast-paced games set in the Shadowrun universe. Great for DMs, Johnsons, and chummers.
      </>
    ),
    link: (
      <>
      Coming soon...
      </>
    ),
  },
];

const highlights = [
  {
    title: 'Develop with MLAPI',
    imageUrl: 'img/landing/logo-dnd.png',
    description: (
      <>
        We’re evolving our solution, built on MLAPI, in the open to become a netcode foundation that you can depend on – 
        customizable and extensible to meet the needs of many multiplayer game types.
      </>
    ),
    link: (
      <>
      <a href="http://google.com" class="land-link">Learn more about MLAPI</a>
      </>
    ),
  },
  {
    title: 'Develop with MLAPI',
    imageUrl: 'img/landing/logo-dnd.png',
    description: (
      <>
        We’re evolving our solution, built on MLAPI, in the open to become a netcode foundation that you can depend on – 
        customizable and extensible to meet the needs of many multiplayer game types.
      </>
    ),
    link: (
      <>
      <a href="http://google.com" class="land-link">Learn more about MLAPI</a>
      </>
    ),
  },
];

function Feature({imageUrl, title, description, link}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center land-feature">
          <img className="featureImage" src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <div class="land-box"><p>{description}</p></div>
      <p class="land-link">{link}</p>
    </div>
  );
}

function Highlight({imageUrl, title, description, link}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center land-highlight">
          <img className="highlightImage" src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <div class="highlight-box"><p>{description}</p></div>
      <p class="land-link">{link}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="This site provides Unity Multiplayer documentation, references, and sample code tutorials.">
      <header className="hero hero--primary hero-banner">
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="buttons-pages">
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/intro')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className="spacer">
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      {/*<div className="hero blog--primary hero-banner">
      <div className="container">
      <div className="row">
        
        <div className="col col--6">
          <h1 className="blog-title">Get the latest news!</h1>
          <p className="blog-subtitle">New releases, tips and tricks, contribution news, and much more...see the blog! Every month we highlight releases, new content, and community news. </p>
          <div className="buttons-pages">
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('blog')}>
              See the Blog
            </Link>
          </div>
        </div>
      </div>
      </div>
      </div>

       <main>
        {highlights && highlights.length > 0 && (
          <section className="spacer">
            <div className="container">
              <div className="row">
                {highlights.map((props, idx) => (
                  <Highlight key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        </main>*/}

      
    </Layout>
  );
}

export default Home;