import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import ReactDOM from 'react-dom';
import MainApp from './draggy.js';
import './conquest.scss';

function SpiritBoard() {
    
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
      <Layout title="Warcraft Spirit Boards" 
      description="Call the spirits with these special tools, created by Hildira of Moon Guard-US!">
    <MainApp />
    <section className='spacer2'>
        <div className="container">
        <div className='board-credit'>
        <p><img src='../../static/img/icons/icon-planchette2.png'/> Artwork created by <a href="https://www.youtube.com/channel/UCwmkSpfuE47IL0yaG6QqQNg">Hildira Moon Guard-US</a> - An incredible spirit board with a matching planchette.</p>
        </div>
    </div></section>
   </Layout>
  );
}

export default SpiritBoard;