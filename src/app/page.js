import React from 'react';

import styles from './homepage.module.css';
import BlogGallery from '../components/BlogGallery';
import { BLOG_TITLE, BLOG_DESCRIPTION } from '../constants';

export const metadata = {
  title: `${BLOG_TITLE}`,
  description: BLOG_DESCRIPTION,
}

function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        Latest Content:
      </h1>
      <BlogGallery />
    </div>
  );
}

export default Home;
