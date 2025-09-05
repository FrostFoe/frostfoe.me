import Posts from "@components/partials/Posts";
import { getSinglePage } from "@lib/contentParser";
import config from "@config/config.json";

const { blog_folder, pagination } = config.settings;

const Home = () => {
  const posts = getSinglePage(`src/content/${blog_folder}`);
  const authors = getSinglePage("src/content/authors");

  return (
    <section className="section">
      <div className="container">
        <Posts
          className="mb-16"
          posts={posts}
          authors={authors}
          pagination={pagination}
        />
      </div>
    </section>
  );
};

export default Home;
