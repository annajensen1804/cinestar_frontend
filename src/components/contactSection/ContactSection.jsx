import styles from "./contactSection.module.css";
import tlf from "../../assets/icons/tlf.png";
import gps from "../../assets/icons/gps.png";
import mail from "../../assets/icons/mail.png";
import ContactForm from "../forms/contactForm/ContactForm";

const ContactSection = () => {
    return (
      <article className={styles.contactSection}>
        <div className={styles.intro}>
          <p className="kicker">KONTAKT</p>
        <h2 className="title">BOOK EN SAMTALE MED OS</h2>
        <p>
          Har du spørgsmål eller ønsker du at vide mere om, hvordan vi kan
          hjælpe med dit næste projekt? Udfyld formularen, og vi kontakter dig
          hurtigst muligt. Vi ser frem til at samarbejde med dig!
        </p>
        </div>
        
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <img src={tlf} alt="telefon" width="24" height="auto" />
              <p>+45 12 34 56 78</p>
            </div>
            <div className={styles.contactItem}>
              <img src={gps} alt="adresse" width="24" height="auto" />
              <p>Fotovej 66, 8456 Cineby</p>
            </div>
            <div className={styles.contactItem}>
              <img src={mail} alt="email" width="24" height="auto" />
              <p>cinestar@production.dk</p>
            </div>
          </div>
          <div className={styles.contactFormContainer}>
            <ContactForm />
          </div>
        </div>
      </article>
    );
}

export default ContactSection;