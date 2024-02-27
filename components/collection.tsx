"use client";
import React, { FC, useRef, useState } from "react";
import { CollectionProduct } from "@/components/collection-card";
import {
  Swiper,
  SwiperClass,
  SwiperSlide,
} from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

type Props = {
  collection: any;
};

export const Collection: FC<Props> = ({ collection }) => {
  let sliderRef = useRef<SwiperClass | null>(null);
  const [isPrevDisabled, setPrevDisabled] = useState<boolean>(false);
  const [isNextDisabled, setNextDisabled] = useState<boolean>(false);

  const handleSlideChange = () => {
    if (sliderRef.current?.isBeginning) {
      setPrevDisabled(true);
    } else {
      setPrevDisabled(false);
    }

    if (sliderRef.current?.isEnd) {
      setNextDisabled(true);
    } else {
      setNextDisabled(false);
    }
  };

  return (
    <div className="mt-[48px] lg:flex lg:flex-row">
      <div className="lg:w-[240px] lg:flex lg:flex-col">
        <div className="lg:flex-1">
          <div className="font-semibold text-[18px] leading-[24px] text-[#333333]">
            {collection.title}
          </div>
          <div className="mt-[8px] text-[12px] font-medium leading-[20px] text-[#999999]">
            {collection.subtitle}
          </div>
        </div>
        <div className="hidden lg:block">
          <button
            className={`mr-[10px] ${
              isPrevDisabled ? "text-gray-300" : ""
            }`}
            onClick={() => !isPrevDisabled && sliderRef.current?.slidePrev()}
            disabled={isPrevDisabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
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
            className={`${
              isNextDisabled ? "text-gray-300" : ""
            }`}
            onClick={() => !isNextDisabled && sliderRef.current?.slideNext()}
            disabled={isNextDisabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
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
      </div>
      <div className="grid grid-cols-2 gap-y-[24px] gap-x-[8px] lg:hidden">
        {collection.items.map((item: any, key: number) => (
          <CollectionProduct key={key} product={item} />
        ))}
      </div>
      <div>
        <Swiper
          onSwiper={(swiper) => {
            sliderRef.current = swiper;
            handleSlideChange();
          }}
          onSlideChange={() => handleSlideChange()}
          spaceBetween={60}
          slidesPerView={4}
          autoplay={{
            delay: 5000,
          }}
          modules={[Autoplay, Pagination]}
          className="!hidden lg:!block w-[720px]"
        >
          {collection.items.map((item: any, key: number) => {
            return (
              <SwiperSlide key={key} className="">
                <CollectionProduct product={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
