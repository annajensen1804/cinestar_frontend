import styles from './subscription.module.css';
import SubscriptionForm from "../forms/subscriptionForm/SubscriptionForm";

const Subscription = () => {
    return (
      <article className={styles.contactSection}>
        <div className={styles.intro}>
          <p className="kicker">EN BLOG, DER KAN INSPIRERE OG HJÆLPE DIG</p>
          <p>
            Få de nyeste opdateringer, tips og indsigter direkte i din indbakke. Vores blog deler viden, inspiration og historier, der kan hjælpe dig med at tage dine projekter til det næste niveau.
          </p>
        </div>
          <div className={styles.contactFormContainer}>
            <SubscriptionForm />
          </div>
      </article>
    );
}

export default Subscription;