export const slugify = (content) => {
  if (!content) return null;

  return content
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

export const markdownify = (content, tag, className) => {
  if (!content) return null;
  const Tag = tag;

  return <Tag className={className}>{content}</Tag>;
};

export const humanize = (content) => {
  if (!content) return null;

  return content
    .replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_\s]+/g, " ")
    .replace(/^[a-z]/, function (m) {
      return m.toUpperCase();
    });
};

export const plainify = (content) => {
  if (!content) return null;

  return content.replace(/<\/?[^>]+(>|$)/g, "");
};
