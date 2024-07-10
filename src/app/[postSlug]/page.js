import React from 'react';

import BlogHero from '../../components/BlogHero';
import { MDXRemote } from 'next-mdx-remote/rsc';

import styles from './postSlug.module.css';
import { loadBlogPost } from '../../helpers/file-helpers'
import { BLOG_TITLE } from '../../constants';
import COMPONENT_MAP from '../../helpers/mdx-components';
import { notFound } from 'next/navigation';

async function BlogPost({ params }) {

  const post = await loadBlogPost(params.postSlug);
  if(!post) {
    notFound();
  }

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={post.frontmatter.title}
        publishedOn={post.frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={post.content} components={COMPONENT_MAP}/>
      </div>
    </article>
  );
}

export default BlogPost;

export async function generateMetadata({ params }) {
  const post = await loadBlogPost(params.postSlug);
  if(!post) {
    notFound();
  }

  return{
    title: `${post.frontmatter.title} • ${BLOG_TITLE}`,
    description: post.frontmatter.abstract
  }
}