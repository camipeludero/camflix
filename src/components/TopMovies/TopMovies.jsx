import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { apiEntity } from "../../apiConfig";
import useApi from "../../hooks/useApi";
import TopMoviesCard from "./TopMoviesCard";

const TopMovies = () => {
  const [values, loading, error] = useApi(apiEntity.popularMovies);

  return (
    <div className="top_rating">
      <Swiper
        spaceBetween={50}
        slidesPerView={5.17}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {values.slice(0, 10).map((value) => (
          <SwiperSlide>
            <TopMoviesCard imgPath={value.backdrop_path} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopMovies;
