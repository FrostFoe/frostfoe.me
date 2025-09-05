import { slug } from "github-slugger";

// slugify
export const slugify = (content) => {
  if (!content) return null;

  return slug(content);
};

// markdownify
export const markdownify = (content, tag, className) => {
  if (!content) return null;
  const Tag = tag;

  return <Tag className={className}>{content}</Tag>;
};

// humanize
export const humanize = (content) => {
  if (!content) return null;

  return content
    .replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_\s]+/g, " ")
    .replace(/^[a-z]/, function (m) {
      return m.toUpperCase();
    });
};

// plainify
export const plainify = (content) => {
  if (!content) return null;

  // A basic plainify to remove HTML-like tags.
  // For more robust parsing, a library might be needed, but this handles simple cases.
  return content.replace(/<\/?[^>]+(>|$)/g, "");
};
