import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import styles from './index.module.css';

import { Gallery, Item } from 'react-photoswipe-gallery'

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
        <a href="https://sonceri-mg.tumblr.com/" target="_blank"><img src="img/tumblr.png"/> Sonceri on Tumblr</a><br/>
        <a href="https://twitter.com/lorioliodraws" target="_blank"><img src="img/twitter.png"/> Loriolio on Twitter/X</a><br/>
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

    <Gallery>
  
    <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(400px, 100%), 1fr))',
    gridGap: 10,
    }}>

    <Item
      original="/img/gallery/shin.jpg"
      thumbnail="/img/gallery/shin-thumb.jpg"
      width="450"
      height="1125"
      title="Shin in Glass"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="/img/gallery/shin-thumb.jpg" />
      )}
    </Item>

    <Item
      original="/img/gallery/mirchea.jpg"
      thumbnail="/img/gallery/mirchea-thumb.jpg"
      width="570"
      height="810"
      title="Mirchea in Glass"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="/img/gallery/mirchea-thumb.jpg" />
      )}
    </Item>

    <Item
      original="/img/gallery/rillian.jpg"
      thumbnail="/img/gallery/rillian-thumb.jpg"
      width="570"
      height="810"
      title="Rillian in Glass"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="/img/gallery/rillian-thumb.jpg" />
      )}
    </Item>

    <Item
      original="/img/gallery/maxen.jpg"
      thumbnail="/img/gallery/maxen-thumb.jpg"
      width="960"
      height="960"
      title="Maxen in Glass"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="/img/gallery/maxen-thumb.jpg" />
      )}
    </Item>

    <Item
      original="/img/gallery/carda.jpg"
      thumbnail="/img/gallery/carda-thumb.jpg"
      width="1000"
      height="689"
      title="Carda map for Elsekind"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="/img/gallery/carda-thumb.jpg" />
      )}
    </Item>

    <Item
      original="/img/gallery/westgate1.jpg"
      thumbnail="/img/gallery/westgate1-thumb.jpg"
      width="1920"
      height="1634"
      title="Westgate"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="/img/gallery/westgate1-thumb.jpg" />
      )}
    </Item>
    <Item
      original="/img/gallery/westgate2.jpg"
      thumbnail="/img/gallery/westgate2-thumb.jpg"
      width="1000"
      height="1000"
      title="Westgate"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="/img/gallery/westgate2-thumb.jpg" />
      )}
    </Item>
    <Item
      original="/img/gallery/lanosee.jpg"
      thumbnail="/img/gallery/lanosee-thumb.jpg"
      width="724"
      height="1000"
      title="Westgate"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="/img/gallery/lanosee-thumb.jpg" />
      )}
    </Item>
    
    <Item
      original="/img/gallery/candle2.jpg"
      thumbnail="/img/gallery/candle2-thumb.jpg"
      width="764"
      height="1000"
      title="Candlekeep Secret Agents"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="/img/gallery/candle2-thumb.jpg" />
      )}
    </Item>

    <Item
      original="/img/gallery/candle3.jpg"
      thumbnail="/img/gallery/candle3-thumb.jpg"
      width="764"
      height="1000"
      title="Candlekeep Secret Agents"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="/img/gallery/candle3-thumb.jpg" />
      )}
    </Item>

    <Item
      original="/img/gallery/candle5.jpg"
      thumbnail="/img/gallery/candle5-thumb.jpg"
      width="764"
      height="1000"
      title="Candlekeep Secret Agents"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="/img/gallery/candle5-thumb.jpg" />
      )}
    </Item>

    <Item
      original="/img/gallery/candle6.jpg"
      thumbnail="/img/gallery/candle6-thumb.jpg"
      width="764"
      height="1000"
      title="Candlekeep Secret Agents"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="/img/gallery/candle6-thumb.jpg" />
      )}
    </Item>
    </div>
  </Gallery>
  </div></div></div></section>

    </Layout>
  );
}

export default SoncGallery;