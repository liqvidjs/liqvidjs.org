import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: "Lightning-Fast Development",
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Say goodbye to render times. When you make edits, your new video is only a refresh away. Style your videos with CSS and (using LiveReload) see your changes appear <em>while the video is running!</em>
      </>
    ),
  },
  {
    title: "Unleash the Power of the Web",
    // imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Interactive graphics with THREE.js, interactive coding demos with CodeMirror—Liqvid turns the entire JavaScript ecosystem into video creation tools. Create and distribute your own React components to reuse across videos.
      </>
    ),
  },
  {
    title: "An Entirely New Medium",
    // imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        "Liquid videos" dissolve the boundaries between text, images, audio, and video—or even between author and viewer. The creative possibilities have barely begun to be scratched.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Create interactive videos in React`}
      description="Create interactive videos in React">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">Create <strong>interactive</strong> videos in React</p>
          <p className="interactive">This video is interactive. Try it out!</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
        <div className="video-container">
          <div className="aspect-ratio" style={{paddingBottom: "62.5%"}}>
            <iframe src="/r/lv-tutorial/" allowFullScreen></iframe>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
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
    </Layout>
  );
}

export default Home;
