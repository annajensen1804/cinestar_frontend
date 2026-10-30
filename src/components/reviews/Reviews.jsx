import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import slide1 from "../../assets/daughter_mom.jpg";
import slide2 from "../../assets/into_your_heart.jpg";
import slide3 from "../../assets/school_life.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import styles from "./reviews.module.css";
import { useLoaderData } from "react-router-dom";

const Reviews = () => {
  const {reviews} = useLoaderData();

  return (
    <section className={styles.sectionsContainer}>
      <p className="kicker">UDTALELSER</p>
      <h2 className="title">HVAD SIGER VORES SAMARBEJDSPARTNERE OM OS? </h2>
      <p>
        “Cinestar er en fantastisk samarbejdspartner, der formår at kombinere
        kreativitet med professionalisme. Deres evne til at skabe unikke og
        engagerende produktioner er imponerende, og resultatet taler altid for
        sig selv.”
      </p>

      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          navigation={true}
          pagination={{ clickable: true }}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          watchSlidesProgress={true}
          effect={"coverflow"}
          breakpoints={{
            0: {
              slidesPerView: 1,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: false,
              },
            },
            768: {
              slidesPerView: "auto",
              coverflowEffect: {
                rotate: 0,
                stretch: -100,
                depth: 300,
                modifier: 1,
                slideShadows: true,
              },
            },
          }}
          className={styles.mySwiper}
        >
          {reviews.map((review) => {
            const rating = review.rating || 0;
            const stars = "★".repeat(rating);

            return (
              <SwiperSlide key={review._id} className={styles.swiperSlide}>
                <div className={styles.slideContent}>
                  <div className={styles.ratingStars}>
                    {stars}
                  </div>
                  <p>"{review.text}"</p>
                  <p className={styles.orange}>{review.name}</p>
                  <p>{review.position}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
