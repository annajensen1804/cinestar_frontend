import styles from "./header.module.css";
import headerImg from "../../assets/studio.jpg";

const Header = ({ brandName, title, description, isMainPage = false, children }) => {
  return (
    <article className={styles.header}>
      <div className={styles.imageWrapper}>
        <img src={headerImg} alt="Cinestar" className={styles.headerImg} />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.content}>
        {brandName && <p className={styles.brandName}>{brandName}</p>}
        <h1 className={styles.title}>
          {isMainPage ? (
            <>
              FILM & TV <span className={styles.orange}>PRODUKTION</span>
            </>
          ) : (
            title
          )}
        </h1>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {children && <div className={styles.bottomContent}>{children}</div>}
    </article>
  );
};

export default Header;