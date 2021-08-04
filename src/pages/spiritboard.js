import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import ReactPlayer from 'react-player/youtube';
import Iframe from 'react-iframe';
import ReactDOM from 'react-dom';
import MainApp from './draggy.js';

function SpiritBoard() {
    
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
      <Layout title="Tropic Sunder" 
      description="Warcraft Conquest presented Tropic Sunder, a campaign set in Stranglethorn Vale in Spring 2021. Learn more about this campaign and others!">
   <MainApp />
   </Layout>
  );
}

export default SpiritBoard;