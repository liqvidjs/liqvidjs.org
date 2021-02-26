import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Tutorial() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Tutorial | ${siteConfig.title}`}
      description="Create interactive videos in React">
      <main className="tutorial">
        <div className="video-container">
          <div className="aspect-ratio" style={{paddingBottom: "62.5%"}}>
            <iframe src="/r/rp-tutorial/" allowFullScreen></iframe>
          </div>
        </div>
        <p>To use this tutorial, clone the <a href="https://github.com/ysulyma/rp-tutorial">repository</a> and follow along in the source.</p>
      </main>
    </Layout>
  );
}

export default Tutorial;
