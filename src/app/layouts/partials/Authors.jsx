'use client';
import { markdownify } from '@lib/utils/textConverter';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Authors = ({ authors }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.1, duration: 0.5 },
      }}
      viewport={{ once: true }}
      className="row justify-center"
    >
      {authors.map((author, i) => (
        <div
          className="col-12 mb-8 text-center sm:col-6 md:col-4"
          key={`key-${i}`}
        >
          <div className="mb-4 inline-block">
            {author.frontmatter.image && (
              <Image
                src={author.frontmatter.image}
                alt={author.frontmatter.title}
                height={150}
                width={150}
                className="rounded-full"
              />
            )}
          </div>
          <h3 className="h4 mb-2">
            <Link
              href={`/authors/${author.slug}`}
              className="block font-bold hover:text-primary"
            >
              {author.frontmatter.title}
            </Link>
          </h3>
          <p>{markdownify(author.content.slice(0, 120))}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default Authors;
