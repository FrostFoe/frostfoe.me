import { getSinglePage } from '@lib/contentParser';
import SearchResults from '@layouts/partials/SearchResults';
import config from '@config/config.json';
const { blog_folder } = config.settings;

const SearchPage = ({ searchParams }) => {
  const authors = getSinglePage('src/content/authors');
  const posts = getSinglePage(`src/content/${blog_folder}`);

  return (
    <div className="section">
      <div className="container">
        <SearchResults
          searchParams={searchParams}
          posts={posts}
          authors={authors}
        />
      </div>
    </div>
  );
};

export default SearchPage;
