import config from '@config/config.json';
import { Facebook, Linkedin, Pinterest, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Share = ({ title, description, slug, className }) => {
  const { base_url } = config.site;

  return (
    <ul className={`${className}`}>
      <motion.li
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className="inline-block"
      >
        <a
          aria-label="facebook share button"
          href={`https://facebook.com/sharer/sharer.php?u=${base_url}/${slug}`}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-block p-3"
        >
          <Facebook className="h-5 w-5" />
        </a>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className="inline-block"
      >
        <a
          aria-label="twitter share button"
          href={`https://twitter.com/intent/tweet/?text=${title}&amp;url=${base_url}/${slug}`}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-block p-3"
        >
          <Twitter className="h-5 w-5" />
        </a>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className="inline-block"
      >
        <a
          aria-label="linkedin share button"
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${base_url}/${slug}&title=${title}&summary=${description}&source=${base_url}`}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-block p-3"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        className="inline-block"
      >
        <a
          aria-label="pinterest share button"
          href={`https://pinterest.com/pin/create/button/?url=${base_url}/${slug}&media=&description=${description}`}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-block p-3"
        >
          <Pinterest className="h-5 w-5" />
        </a>
      </motion.li>
    </ul>
  );
};

export default Share;
