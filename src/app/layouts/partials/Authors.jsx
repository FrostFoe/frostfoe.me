import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Authors = ({ authors }) => {
  return (
    <div className="row justify-center">
      {authors.map((author, i) => (
        <div
          className="col-12 mb-8 text-center sm:col-6 md:col-4"
          key={`key-${i}`}
        >
          <div className="mb-4 inline-block rounded-full border-4 border-primary">
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
    </div>
  );
};

export default Authors;
