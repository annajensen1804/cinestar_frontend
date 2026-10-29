import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import slide1 from "../../assets/daughter_mom.jpg";
import slide2 from "../../assets/into_your_heart.jpg";
import slide3 from "../../assets/school_life.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import styles from "./portfolio.module.css";

const Portfolio = () => {
  const slides = [
    { id: 1, img: slide1 },
    { id: 2, img: slide2 },
    { id: 3, img: slide3 },
    { id: 4, img: slide1 },
    { id: 5, img: slide2 },
    { id: 6, img: slide3 },
  ];

  return (
    <section className={styles.sectionsContainer}>
        <div className={styles.intro}>
            <p className="kicker">Portfolio</p>
            <h2 className="title">UDVALGTE PROJEKTER</h2>
        </div>
      
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
                stretch: -60,
                depth: 300,
                modifier: 1,
                slideShadows: true,
              },
            },
          }}
          className={styles.mySwiper}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className={styles.swiperSlide}>
              <div className={styles.slideContent}>
                <img src={slide.img} alt={slide.text} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
