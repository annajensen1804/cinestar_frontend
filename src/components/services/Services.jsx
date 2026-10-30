import styles from './services.module.css';
import { MdOutlineLocalMovies } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { MdOutlineVideoCameraBack } from "react-icons/md";
import { IoMdMusicalNote } from "react-icons/io";


const Services = () => {
    return (
      <article className={styles.servicesContainer}>
        <p className="kicker">SERVICE</p>
        <h2 className="title">HVILKEN SERVICE TILBYDER VI?</h2>
        <div className={styles.servicesList}>
          <div className={styles.serviceCard}>
            <MdOutlineLocalMovies size={70} color="rgba(240, 114, 50, 1)" />
            <div className={styles.serviceCardText}>
              <h3>FILM PRODUKTION</h3>
              <p>
                Vi skaber professionelle filmproduktioner, der formidler dit
                budskab klart, engagerende og visuelt overbevisende.
              </p>
            </div>
          </div>
          <div className={styles.serviceCard}>
            <FaPhotoVideo size={70} color="rgba(240, 114, 50, 1)" />
            <div className={styles.serviceCardText}>
              <h3>EN KREATIV RETNING</h3>
              <p>
                Vi sikrer en kreativ retning, der løfter dit projekt fra
                almindeligt til uforglemmeligt.
              </p>
            </div>
          </div>
          <div className={styles.serviceCard}>
            <MdOutlineVideoCameraBack size={70} color="rgba(240, 114, 50, 1)" />
            <div className={styles.serviceCardText}>
              <h3>TV PRODUKTION</h3>
              <p>
                Vi leverer komplette løsninger inden for formatudvikling,
                optagelse og redigering.
              </p>
            </div>
          </div>
          <div className={styles.serviceCard}>
            <IoMdMusicalNote size={70} color="rgba(240, 114, 50, 1)" />
            <div className={styles.serviceCardText}>
              <h3>MUSIK VIDEO</h3>
              <p>
                Lad din musik træde frem i et visuelt univers, der forstærker
                din lyd og dit budskab.
              </p>
            </div>
          </div>
        </div>
      </article>
    );
}

export default Services;