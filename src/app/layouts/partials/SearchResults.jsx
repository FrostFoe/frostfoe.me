import { slugify } from '@lib/utils/textConverter';
import Posts from './Posts';
import SeoMeta from './SeoMeta';

const SearchResults = ({ searchParams, posts, authors }) => {
  const key = searchParams?.key || '';
  const keyword = slugify(key);

  const searchResults = posts.filter((product) => {
    if (product.frontmatter.draft) {
      return false;
    }
    if (slugify(product.frontmatter.title).includes(keyword)) {
      return true;
    }
    if (
      product.frontmatter.categories.find((category) =>
        slugify(category).includes(keyword)
      )
    ) {
      return true;
    }
    if (
      product.frontmatter.tags.find((tag) => slugify(tag).includes(keyword))
    ) {
      return true;
    }
    if (slugify(product.content).includes(keyword)) {
      return true;
    }
    return false;
  });

  return (
    <>
      <SeoMeta title={`'${key}' এর জন্য অনুসন্ধানের ফলাফল`} />
      <h1 className="h2 mb-8 text-center">
        {searchResults.length > 0
          ? `'${key}' এর জন্য ${searchResults.length} টি ফলাফল পাওয়া গেছে`
          : `'${key}' এর জন্য কোনো ফলাফল পাওয়া যায়নি`}
      </h1>
      {searchResults.length > 0 ? (
        <Posts posts={searchResults} authors={authors} />
      ) : (
        <div className="py-24 text-center text-h3 shadow">
          অনুগ্রহ করে অন্য কোনো শব্দ দিয়ে অনুসন্ধান করুন।
        </div>
      )}
    </>
  );
};

export default SearchResults;
