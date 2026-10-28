import styles from './blogSection.module.css';
import Button from '../button/Button';
import { useNavigate } from "react-router-dom";

const Blog = ({
  blog,
  showButton,
  showTeaser,
  showDescription,
  showDate
}) => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const formattedDate = date.toLocaleDateString("da-DK", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const finalDate = formattedDate.replace(/\s(\d{4})$/, ", $1");

    return `Oprettet d. ${finalDate}`;
  };

  return (
    <figure className={styles.blogCard}>
      <img src={blog.image} alt={blog.title} />
      <div className={styles.blogCardContent}>
        <h3 className={styles.title}>{blog.title}</h3>
        {showTeaser && <p>{blog.teaser}</p>}
        {showDescription && <p>{blog.description}</p>}
        {showDate && (
          <p className={styles.blogDate}>{formatDate(blog.created)}</p>
      )}
        {showButton && (
        <Button
          buttonText="Læs mere"
          onClick={() => navigate(`/blog/${blog._id}`)}
        />
      )}
      </div>
      
    </figure>
  );
};

export default Blog;