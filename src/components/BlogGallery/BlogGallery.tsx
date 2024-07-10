import React from 'react';
import { getBlogPostList } from '../../helpers/file-helpers';
import BlogSummaryCard from '../BlogSummaryCard';

interface Post {
  slug: string;
  title: string;
  abstract: string;
  publishedOn: string;
}

async function BlogGallery() {
  const posts = await getBlogPostList() as Post[];

  return (<>
    {posts.map((post: Post) => {
      return <BlogSummaryCard 
        slug={post.slug}
        title={post.title}
        abstract={post.abstract}
        publishedOn={post.publishedOn}
        key={crypto.randomUUID()}
        />
    })}
  </>);
}

export default BlogGallery;
