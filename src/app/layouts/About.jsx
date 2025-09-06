'use client';
import Social from '@components/Social';
import { markdownify } from '@lib/utils/textConverter';
import { motion } from 'framer-motion';
import Image from 'next/image';
import MDXContent from './partials/MDXContent';

const About = ({ data }) => {
  const { frontmatter, content } = data;
  const { title, image, social } = frontmatter;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="section"
    >
      <div className="container text-center">
        {image && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="img-cover mb-8"
          >
            <Image
              src={image}
              width={920}
              height={515}
              alt={title}
              className="rounded-lg"
            />
          </motion.div>
        )}
        {markdownify(title, 'h1', 'h2')}
        <Social source={social} className="social-icons-simple my-8" />

        <div className="content">
          <MDXContent content={content} />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
