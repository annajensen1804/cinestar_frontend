import styles from './blogSection.module.css'

const Blog = ({ blog }) => {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
  
      const formattedDate = date.toLocaleDateString("da-DK", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
       
        const finalDate = formattedDate.replace(/\s(\d{4})$/, ", $1");
        
        return `Oprettet d. ${finalDate}`;
      };

    return (
      <figure className={styles.blogCard}>
        <img src={blog.image} alt={blog.title} />
        <h3 className={styles.title}>{blog.title}</h3>
        <p>{blog.teaser}</p>
        <p className={styles.blogDate}>{formatDate(blog.created)}</p>
      </figure>
    );
}

export default Blog;