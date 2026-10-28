import styles from "../components/blogSection/blogSection.module.css";
import { useLoaderData } from "react-router-dom";
import Blog from "../components/blogSection/Blog";

const BlogDetails = () => {
    const blog = useLoaderData();

    return (
      <section className={styles.content}>
        <Blog blog={blog} showDescription />
      </section>
    );
}

export default BlogDetails;