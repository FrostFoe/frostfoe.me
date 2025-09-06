'use client';
import shortcodes from '@layouts/shortcodes/all';
import { MDXRemote } from 'next-mdx-remote';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';

const MDXContent = ({ content }) => {
  const mdxOptions = {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      [rehypePrettyCode, { theme: 'one-dark-pro' }],
    ],
  };

  return (
    <div className="prose max-w-none">
      <MDXRemote
        source={content}
        components={shortcodes}
        options={{
          mdxOptions: mdxOptions,
        }}
      />
    </div>
  );
};

export default MDXContent;
