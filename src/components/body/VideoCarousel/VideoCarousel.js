import React from "react";
import ReactPlayer from "react-player";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper";

import video1 from "../../../assets/body/videos/Benefits Of Fasting On Tuesday.mp4";
// import video1 from "../assets/video/";
import video2 from "../../../assets/body/videos/Manifestation Techniques That Really Works.mp4";
import video3 from "../../../assets/body/videos/Tulsi Planting Tips.mp4";
import video4 from "../../../assets/body/videos/Astrological Tips To Control Anger.mp4";

import "./VideoCarousel.css";

const VideoCarousel = () => {
  const videoObjs = [
    { id: 1, url: video1 },
    { id: 2, url: video2 },
    { id: 3, url: video3 },
    { id: 4, url: video4 },
  ];
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {videoObjs.map((videoObj) => {
          return (
            <SwiperSlide key={videoObj.id}>
              <div className="video-slide">
                <ReactPlayer
                  width={"100%"}
                  height={"100%"}
                  className="player"
                  url={videoObj.url}
                  controls
                  pip
                />
              </div>
            </SwiperSlide>
          );
        })}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default VideoCarousel;
