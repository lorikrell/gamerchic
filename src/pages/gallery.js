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
    <p>A growing collection of art for fun, games, and more. I'll add more as I can between projects. You can find more <a href="https://lorikrell.myportfolio.com/work">here</a> until they are all moved and updated. Do not reuse unless that art is so noted. An open source gallery will be provided at a later time.</p>

    <h2>Cartography</h2>
    <Gallery>
  
    <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(400px, 100%), 1fr))',
    gridGap: 10,
    }}>
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
      original="/img/gallery/audalis.jpg"
      thumbnail="/img/gallery/audalis-thumb.jpg"
      width="1200"
      height="870"
      title="Audalis for Red Dragon Inn"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="/img/gallery/audalis-thumb.jpg" />
      )}
    </Item>
    <Item
      original="/img/gallery/siova.jpg"
      thumbnail="/img/gallery/siova-thumb.jpg"
      width="1000"
      height="598"
      title="Siova in Obraes"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="/img/gallery/siova-thumb.jpg" />
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
    
    </div>
  </Gallery>

<h2>Pencil Works</h2>

  <Gallery>
  
    <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(400px, 100%), 1fr))',
    gridGap: 10,
    }}>
    
    <Item
      original="/img/gallery/candle1.jpg"
      thumbnail="/img/gallery/candle1-thumb.jpg"
      width="576"
      height="1000"
      title="Candlekeep Secret Agents"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="/img/gallery/candle1-thumb.jpg" />
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
      original="/img/gallery/candle4.jpg"
      thumbnail="/img/gallery/candle4-thumb.jpg"
      width="764"
      height="1000"
      title="Candlekeep Secret Agents"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="/img/gallery/candle4-thumb.jpg" />
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