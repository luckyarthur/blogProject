import RSS from "rss";

import { BLOG_TITLE, BLOG_DESCRIPTION } from "../../constants";
import { getBlogPostList } from "../../helpers/file-helpers";

export async function GET() {
    const feed = new RSS({
        title: BLOG_TITLE,
        description: BLOG_DESCRIPTION,
    });

    const posts = await getBlogPostList();
    posts.forEach((post) => {
        feed.item({
            title: post.title,
            description: post.description,
            date: post.publishedOn,
            url: `mock-website.com/${post.slug}`,
        });
    });

    const xmlContent = feed.xml({indent: true});
    return new Response(xmlContent, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}