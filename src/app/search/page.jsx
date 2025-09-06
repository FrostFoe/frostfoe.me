import { getSinglePage } from '@lib/contentParser';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const SearchResults = dynamic(() => import('@layouts/partials/SearchResults'));

const SearchPage = async () => {
  const authors = await getSinglePage('src/content/authors');

  return (
    <>
      <div className="section">
        <div className="container">
          <Suspense
            fallback={
              <h1 className="h2 mb-8 text-center">
                অনুসন্ধান করা হচ্ছে <span className="text-primary">...</span>
              </h1>
            }
          >
            <SearchResults authors={authors} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
