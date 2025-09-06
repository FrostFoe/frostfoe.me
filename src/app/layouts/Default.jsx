'use client';
import { markdownify } from '@lib/utils/textConverter';
import { motion } from 'framer-motion';
import MDXContent from './partials/MDXContent';

const Default = ({ data }) => {
  const { frontmatter, content } = data;
  const { title } = frontmatter;
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="section"
    >
      <div className="container">
        {markdownify(title, 'h1', 'h2 mb-8 text-center')}
        <div className="content">
          <MDXContent content={content} />
        </div>
      </div>
    </motion.section>
  );
};

export default Default;
