import config from "@config/config.json";

const JsonLD = ({ post }) => {
  const { title, description, image, date, authors } = post.frontmatter;
  const { base_url, logo, title: siteTitle } = config.site;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${base_url}/${post.slug}`,
    },
    headline: title,
    image: image ? `${base_url}${image}` : `${base_url}${logo}`,
    datePublished: date,
    author: {
      "@type": "Person",
      name: authors[0],
    },
    publisher: {
      "@type": "Organization",
      name: siteTitle,
      logo: {
        "@type": "ImageObject",
        url: `${base_url}${logo}`,
      },
    },
    description: description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
};

export default JsonLD;
