import Share from "@components/Share";
import dateFormat from "@lib/utils/dateFormat";
import similerItems from "@lib/utils/similarItems";
import { humanize, markdownify, slugify } from "@lib/utils/textConverter";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { BiSolidFolder } from "react-icons/bi";
import { FaRegCalendarAlt, FaUserAlt } from "react-icons/fa";
import MDXContent from "./partials/MDXContent";

const SimilarPosts = dynamic(() => import("@partials/SimilarPosts"), {
  ssr: false,
});

const PostSingle = ({ post, posts, authors, slug }) => {
  const { frontmatter, content } = post;
  let { description, title, date, image, categories, tags } = frontmatter;
  description = description ? description : content.slice(0, 120);
  const similarPosts = similerItems(post, posts, slug);

  return (
    <>
      <section className="section">
        <div className="container">
          <article className="text-center">
            {image && (
              <div className="mb-10">
                <Image
                  src={image}
                  height={700}
                  width={1200}
                  alt={title}
                  className="rounded-lg"
                  priority={true}
                />
              </div>
            )}
            {markdownify(title, "h1", "h2 mb-4")}
            <ul className="mb-8 mt-4 flex flex-wrap items-center justify-center space-x-3 text-text">
              <li>
                {authors
                  .filter((author) =>
                    frontmatter.authors
                      .map((author) => slugify(author))
                      .includes(slugify(author.frontmatter.title))
                  )
                  .map((author, i) => (
                    <Link
                      href={`/authors/${slugify(author.frontmatter.title)}`}
                      key={`author-${i}`}
                      className="flex items-center hover:text-primary"
                    >
                      <FaUserAlt className="mr-2" />
                      <span>{author.frontmatter.title}</span>
                    </Link>
                  ))}
              </li>
              <li className="flex items-center">
                <FaRegCalendarAlt className="mr-2" />
                <span>{dateFormat(date)}</span>
              </li>
              <li className="flex items-center">
                <BiSolidFolder className="mr-2" />
                <ul>
                  {categories.map((category, i) => (
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

            <div className="content mb-16 text-left">
              <MDXContent content={content} />
            </div>
            <div className="flex flex-wrap items-center justify-between">
              <ul className="mb-4 mr-4 space-x-3">
                {tags.map((tag, i) => (
                  <li className="inline-block" key={`tag-${i}`}>
                    <Link
                      href={`/tags/${slugify(tag)}`}
                      className="block rounded-lg bg-theme-light px-4 py-2 font-semibold text-dark hover:bg-primary hover:text-white"
                    >
                      #{humanize(tag)}
                    </Link>
                  </li>
                ))}
              </ul>
              <Share
                className="social-share mb-4"
                title={title}
                description={description}
                slug={slug}
              />
            </div>
          </article>
        </div>
      </section>
      {similarPosts.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="mb-8 text-center font-bold">অনুরূপ পোস্ট</h2>
            <SimilarPosts posts={similarPosts.slice(0, 3)} />
          </div>
        </section>
      )}
    </>
  );
};

export default PostSingle;
