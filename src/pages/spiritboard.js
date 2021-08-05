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
          <div className="contain row ">
    <div className='board-credit center'>
        <p><img src='/img/icons/icon-planchette2.png'/> Artwork created by <a href="https://twitter.com/MerelliaH">Hildira Moon Guard-US</a> - An incredible spirit board with a matching planchette.</p>
        </div>
    </div>
    <div className="spacer"></div>
    
   </Layout>
  );
}

export default SpiritBoard;