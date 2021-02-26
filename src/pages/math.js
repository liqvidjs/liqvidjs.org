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
      image="https://d2og9lpzrymesl.cloudfront.net/r/rp-tutorial-math/icon.png"
      title={`Math Tutorial`}
      description="Math tutorial for ractives (equations and 2d/3d graphics)">
      <main className="tutorial">
        <div className="video-container">
          <div className="aspect-ratio" style={{paddingBottom: "62.5%"}}>
            <iframe src="/r/rp-tutorial-math/" allowFullScreen></iframe>
          </div>
        </div>
        <p>To use this tutorial, clone the <a href="https://github.com/ysulyma/rp-tutorial-math" target="_blank">repository</a> and follow along in the source.</p>
      </main>
    </Layout>
  );
}

export default Tutorial;
