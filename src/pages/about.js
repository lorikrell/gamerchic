import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import styles from './index.module.css';

function SoncGallery() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
        title="Lori Krell Art Gallery"
        description="This site provides gaming resources for Warcraft Conquest, RPG tabletop adventures, and so much more! Graphics, guides, advice.">
    
    <header className="hero--gallery hero-banner" id="gallery">
        <div className="container">
          <h1 className="hero__title">Sonceri Art</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          
        </div>
      </header>
    
      <section className='spacer'>
        <div className='container'>
        <div className='row'>
        <div className="col col-md-6">

        <h1>About Sonceri</h1>
          
        <p>I am Lori Krell, also known as Sonceri my World of Warcraft character. I have crafted artworks and designs for many years in RPGs, novels, and online communities. I love to create images and resources in pencil and digital to help people tell their stories be it characters, maps, logos, journals, tokens, and more. You can find a full gallery in my <a href="https://lorikrell.myportfolio.com/work">Online Portfolio</a>.</p>

        <p>I may take commissions. I often donate work to charities. Ko-fi will include open commission slots over time.</p>
        
        <p><a href="https://ko-fi.com/sonceriart" target="_blank"><img src="img/kofi.png"/> Sonceri on Ko-fi</a><br/>
        <a href="https://lorikrell.myportfolio.com/work" target="_blank"><img src="img/portfolio.png"/> Full Online Portfolio</a><br/>
        <a href="https://bsky.app/profile/sonceri.bsky.social" target="_blank"><img src="img/bluesky.png"/> Sonceri on Bluesky</a><br/>
        <a href="https://sonceri-mg.tumblr.com/" target="_blank"><img src="img/tumblr.png"/> Sonceri on Tumblr</a><br/>
        <a href="https://twitter.com/lorioliodraws" target="_blank"><img src="img/twitter.png"/> Lorioliodraws on Twitter/X</a><br/>
        <img src="img/discord.png"/> loriolio on Discord</p>
        </div>
        <div className="center">
        <img src="img/soncavatar.png" className='responsive'/></div>
       </div>
       </div></section>

      <section className='spacer'>
        <div className='container'>
        <div className='row'>
        <div className="col col-md-6">

    
  </div></div></div></section>

    </Layout>
  );
}

export default SoncGallery;