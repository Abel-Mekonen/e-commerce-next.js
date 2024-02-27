/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <div
      className="
      bg-white
      lg:sticky
      lg:top-0
      lg:z-10
    "
    >
      <div
        className="
        py-[4px] pr-[4px] pl-[24px]
        flex flex-row justify-between
        lg:max-w-[960px]
        lg:m-auto lg:p-0 lg:h-[72px]
      "
      >
        <div
          className="
            flex flex-row items-center
          "
        >
          <Image
            src="https://www.testvalley.kr/logo/logo-mobile-new.svg"
            alt="testvalley"
            className="lg:mr-[16px]"
            width={126}
            height={32}
          />
          <div
            className="
              hidden lg:flex flex-row
              w-[16px] h-[16px] items-start
              pointer
            "
          >
            <img
              src="https://www.testvalley.kr/common/icon-category.svg"
              alt=""
            />
            <div className="whitespace-nowrap text-[#00d094] ml-[4px]">
              카테고리
            </div>
          </div>
          <div className="hidden lg:flex flex-row ml-[170px] w-[335px] px-[10px] py-[9px] border border-[#dddddd] rounded-[4px]">
            <img
              src="https://www.testvalley.kr/common/search.svg"
              alt=""
              className="w-[20px] mr-[5px]"
            />
            <input
              type="text"
              placeholder="살까말까 고민된다면 검색해보세요!"
              className="flex-1 outline-none text-[14px] tracking-[-.5px] leading-[1.57px] mr-[5px]"
            />
            <img
              src="https://www.testvalley.kr/common/clear.svg"
              alt=""
              className=""
            ></img>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <Image
            src="https://www.testvalley.kr/common/bell_default.svg"
            alt=""
            className="p-[12px] lg:hidden"
            width={48}
            height={48}
          />
          <Image
            src="https://www.testvalley.kr/common/search_new.svg"
            alt=""
            className="p-[12px] lg:hidden"
            width={42}
            height={44}
          />
          <img
            src="https://www.testvalley.kr/common/home-event.svg"
            alt=""
            className="hidden lg:block mr-[8px]"
          />
          <img
            src="https://www.testvalley.kr/common/vertical-bar.svg"
            alt=""
            className="hidden lg:block mr-[12px]"
          />
          <div className="text-[14px] font-semibold hidden lg:block whitespace-now">
            로그인 / 회원가입
          </div>
        </div>
      </div>
    </div>
  );
};
