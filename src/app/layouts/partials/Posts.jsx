"use client";

import config from "@config/config.json";
import dateFormat from "@lib/utils/dateFormat";
import { humanize, slugify } from "@lib/utils/textConverter";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BiSolidFolder } from "react-icons/bi";
import { FaRegClock, FaUserAlt } from "react-icons/fa";

const Posts = ({ posts, className, authors }) => {
  const { summary_length } = config.settings;
  const authorsBySlug = authors.reduce((acc, author) => {
    acc[slugify(author.frontmatter.title)] = author;
    return acc;
  }, {});

  return (
    <div className={` ${className}`}>
      <div className="mb-16">
        {posts[0].frontmatter.image && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.1,
                duration: 0.5,
              },
            }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <Link href={`/${posts[0].slug}`} className="block">
              <Image
                className="w-full rounded-lg"
                src={posts[0].frontmatter.image}
                alt={posts[0].frontmatter.title}
                width={925}
                height={475}
                priority={true}
              />
            </Link>
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.2,
              duration: 0.5,
            },
          }}
          viewport={{ once: true }}
        >
          <ul className="mb-3 flex flex-wrap items-center space-x-4 text-sm text-text">
            <li>
              {authors &&
                posts[0].frontmatter.authors &&
                posts[0].frontmatter.authors.map((authorSlug, i) => {
                  const author = authorsBySlug[slugify(authorSlug)];
                  return (
                    author && (
                      <Link
                        href={`/authors/${slugify(author.frontmatter.title)}`}
                        key={`author-${i}`}
                        className="inline-flex items-center font-medium text-primary"
                      >
                        <Image
                          src={author.frontmatter.image}
                          alt={author.frontmatter.title}
                          height={25}
                          width={25}
                          className="mr-2 rounded-full"
                        />
                        <span>{author.frontmatter.title}</span>
                      </Link>
                    )
                  );
                })}
            </li>
            <li className="inline-flex items-center">
              <FaRegClock className="mr-2" />
              {dateFormat(posts[0].frontmatter.date)}
            </li>
            <li className="inline-flex items-center">
              <BiSolidFolder className="mr-2" />
              <ul>
                {posts[0].frontmatter.categories?.map((category, i) => (
                  <li className="inline-block" key={`category-${i}`}>
                    <Link
                      href={`/categories/${slugify(category)}`}
                      className="mr-3 hover:text-primary"
                    >
                      {humanize(category)}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <h3 className="mb-4">
            <Link
              href={`/${posts[0].slug}`}
              className="block text-[32px] font-bold text-dark hover:text-primary"
            >
              {posts[0].frontmatter.title}
            </Link>
          </h3>
          <p className="text-text">
            {posts[0].content &&
              posts[0].content.slice(0, Number(summary_length))}
            ...
          </p>
        </motion.div>
      </div>
      <div className="row">
        {posts.slice(1).map((post, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: i * 0.1,
                duration: 0.5,
              },
            }}
            viewport={{ once: true }}
            key={`key-${i}`}
            className={"col-12 mb-8 sm:col-6"}
          >
            {post.frontmatter.image && (
              <Link href={`/${post.slug}`} className="mb-6 block">
                <Image
                  className="w-full rounded-lg"
                  src={post.frontmatter.image}
                  alt={post.frontmatter.title}
                  width={445}
                  height={230}
                />
              </Link>
            )}
            <ul className="mb-3 flex flex-wrap items-center space-x-4 text-sm text-text">
              <li>
                {authors &&
                  post.frontmatter.authors &&
                  post.frontmatter.authors.map((authorSlug, i) => {
                    const author = authorsBySlug[slugify(authorSlug)];
                    return (
                      author && (
                        <Link
                          href={`/authors/${slugify(author.frontmatter.title)}`}
                          key={`author-${i}`}
                          className="inline-flex items-center font-medium text-primary"
                        >
                          <FaUserAlt className="mr-2" />
                          {author.frontmatter.title}
                        </Link>
                      )
                    );
                  })}
              </li>
              <li className="inline-flex items-center">
                <FaRegClock className="mr-2" />
                {dateFormat(post.frontmatter.date)}
              </li>
              <li className="inline-flex items-center">
                <BiSolidFolder className="mr-2" />
                <ul>
                  {post.frontmatter.categories?.map((category, i) => (
                    <li className="inline-block" key={`category-${i}`}>
                      <Link
                        href={`/categories/${slugify(category)}`}
                        className="mr-3 hover:text-primary"
                      >
                        {humanize(category)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <h3 className="mb-4">
              <Link
                href={`/${post.slug}`}
                className="block text-2xl font-bold text-dark hover:text-primary"
              >
                {post.frontmatter.title}
              </Link>
            </h3>
            <p className="text-text">
              {post.content && post.content.slice(0, Number(summary_length))}
              ...
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
