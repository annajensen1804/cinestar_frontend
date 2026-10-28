import styles from "./blogSection.module.css";
import Blog from "./Blog";

const BlogSection = ({ blogs }) => {  
    
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className="kicker">BLOG</p>
        <h2 className="title">VORES SENESTE BLOG</h2>
        <p>
          Hold dig opdateret med de seneste nyheder, indblik og historier fra
          Cinestar. Vi deler inspiration, tips og bag kulisserne fra vores
          spændende projekter og produktioner.
        </p>

        {blogs?.map((blog) => (
          <Blog key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;