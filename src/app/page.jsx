import config from '@config/config.json';
import SeoMeta from '@layouts/partials/SeoMeta';
import { getSinglePage } from '@lib/contentParser';
import dynamic from 'next/dynamic';
import Pagination from './layouts/components/Pagination';

const Posts = dynamic(() => import('@partials/Posts'));
const { blog_folder } = config.settings;

const Home = () => {
  const { pagination } = config.settings;
  const posts = getSinglePage(`src/content/${blog_folder}`);
  const authors = getSinglePage('src/content/authors');
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPosts = posts.slice(0, pagination);

  return (
    <>
      <SeoMeta />
      <section className="section">
        <div className="container">
          <Posts className="mb-16" posts={currentPosts} authors={authors} />
          <Pagination totalPages={totalPages} currentPage={1} />
        </div>
      </section>
    </>
  );
};

export default Home;
