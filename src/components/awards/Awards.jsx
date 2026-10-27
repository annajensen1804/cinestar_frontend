import styles from "./awards.module.css";
import award1 from "../../assets/awards/award1.png";
import award2 from "../../assets/awards/award2.png";
import award3 from "../../assets/awards/award3.png";

const Awards = () => {
    return (
        <div className={styles.awardsContainer}>
            <img src={award1} alt="Award 1" className={styles.awardImg} />
            <img src={award2} alt="Award 2" className={styles.awardImg} />
            <img src={award3} alt="Award 3" className={styles.awardImg} />
        </div>
    )
}

export default Awards;