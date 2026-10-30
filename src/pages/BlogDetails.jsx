import styles from "../components/blogSection/blogSection.module.css";
import { useLoaderData } from "react-router-dom";
import Blog from "../components/blogSection/Blog";
import Header from "../components/header/Header";

const BlogDetails = () => {
    const blog = useLoaderData();
    return (
      <article>
        <Header title="BLOG ARKIV" />
        <section className={styles.content}>
          <Blog blog={blog} showDescription />
        </section>
      </article>
    );
}

export default BlogDetails;