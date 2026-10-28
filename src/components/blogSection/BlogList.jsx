import Blog from "./Blog";
import styles from "./blogSection.module.css";

const BlogList = ({ blogs }) => {
  return (
    <section className={styles.content}>
      {blogs?.map((blog) => (
        <Blog key={blog._id} blog={blog} showButton showTeaser showDate/>
      ))}
    </section>
  );
};

export default BlogList;