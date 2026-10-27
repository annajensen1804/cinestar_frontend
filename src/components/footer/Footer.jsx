import styles from './footer.module.css';
import logo from "../../assets/logo.png";

const Footer = () => {
    return (
        <article className={styles.footer}>
            <img src={logo} alt="logo" />
            <p className={styles.copyright}>Copyright © 2026 Cinestar | powered by Romethem E Studio</p>
        </article>
    )
}

export default Footer;