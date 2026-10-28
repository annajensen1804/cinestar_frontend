import styles from './some.module.css';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const SoMe = () => {
    return (
      <section className={styles.container}>
        <div className={styles.info}>
          <h2 className="title">
            HAR DU EN IDÉ I TANKERNE? <br />
            LAD OS STARTE DIT PROJEKT SAMMEN
          </h2>
          <p className={styles.some}>Cinestar Studio</p>
          <p className={styles.some}>+123-456-789</p>
          <p className={styles.some}>hello@awesomesite.com</p>
        </div>

        <div className={styles.links}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkItem}
          >
            <FaFacebookF className={styles.icon} />
            <span className={styles.text}>Facebook</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkItem}
          >
            <FaTwitter className={styles.icon} />
            <span className={styles.text}>Twitter</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkItem}
          >
            <FaLinkedinIn className={styles.icon} />
            <span className={styles.text}>Linkedin</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkItem}
          >
            <FaInstagram className={styles.icon} />
            <span className={styles.text}>Instagram</span>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkItem}
          >
            <FaYoutube className={styles.icon} />
            <span className={styles.text}>Youtube</span>
          </a>
        </div>
      </section>
    );
};

export default SoMe;