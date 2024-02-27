/* eslint-disable @next/next/no-img-element */
"use client";

import React, { FC, useMemo } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import useWindowDimensions from "@/hooks/screen-layout";

type Props = {
  banners: any[];
};

export const CarouselBanner: FC<Props> = ({ banners }) => {
  const { width } = useWindowDimensions();
  const isMobile = useMemo(() => width < 960, [width]);
  const slidesPerView = useMemo(() => {
    const result = width / 960;
    return result < 1 ? 1 : result;
  }, [width]);

  const handleSlideChange = (swiper: any) => {
    const activeIndex = swiper.activeIndex;

    banners.forEach((banner, index) => {
      const slideElement = document.getElementById(`swiper-slide-${index}`);
      if (slideElement) {
        slideElement.style.filter = "none";
      }
    });

    const prevIndex = (activeIndex - 1 + banners.length) % banners.length;
    const nextIndex = (activeIndex + 1) % banners.length;

    const prevSlide = document.getElementById(`swiper-slide-${prevIndex}`);
    const nextSlide = document.getElementById(`swiper-slide-${nextIndex}`);

    if (prevSlide) {
      prevSlide.style.filter = "blur(.75px)";
    }

    if (nextSlide) {
      nextSlide.style.filter = "blur(.75px)";
    }
  };

  return (
    <Swiper
      slideNextClass="opacity-50"
      slidePrevClass="opacity-50"
      slidesPerView={slidesPerView}
      centeredSlides
      pagination
      spaceBetween={30}
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      onSlideChange={(swiper) => handleSlideChange(swiper)}
      className="sm:block md:hidden h-[210px] lg:h-[324px]"
    >
      {banners.map((banner, index) => {
        return (
          <SwiperSlide key={banner.mainBannerId} id={`swiper-slide-${index}`}>
            <img
              src={isMobile ? banner.mobileImageUrl : banner.pcImageUrl}
              alt={banner.title}
              className="h-full w-full "
            />
          </SwiperSlide>
        );
      })}
      <SwiperNavButtons />
    </Swiper>
  );
};

export const SwiperNavButtons = () => {
  const swiper = useSwiper();
  const { width } = useWindowDimensions();
  const leftRightPosition = useMemo(() => {
    const data = width - 960;
    return data / 2 + 20;
  }, [width]);

  return (
    <div className="text-white hidden lg:block">
      <button
        className="absolute bottom-36 z-20 bg-[#33333380] rounded-full p-2"
        style={{ left: leftRightPosition }}
        onClick={() => swiper.slidePrev()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        className="absolute  bottom-36 z-20 bg-[#33333380] rounded-full p-2"
        style={{ right: leftRightPosition }}
        onClick={() => swiper.slideNext()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};
