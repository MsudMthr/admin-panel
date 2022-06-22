import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import usersBannerImage from "../assets/user.jpg";
import productsBannerImage from "../assets/products.png";
import categoriesBannerImage from "../assets/category.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Swiper
      loop={true}
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper mt-3 z-0"
    >
      <SwiperSlide>
        <div className="mx-auto flex h-40 w-5/6 items-center justify-around rounded-lg bg-[#f94045] shadow-lg sm:h-52 md:h-60">
          <div className="pl-2">
            <h3 className="text-md mb-3 font-bold  md:text-xl">
              Edit & Manage Users
            </h3>
            <Link
              to={"/Users"}
              className="rounded bg-[#fbdece] px-2 py-1 font-semibold"
            >
              Users Panel
            </Link>
          </div>
          <img
            src={usersBannerImage}
            alt="edit user "
            className="md:60 w-40 sm:w-52  "
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mx-auto flex h-40 w-5/6 items-center justify-around rounded-lg bg-[#f0f0f0] shadow-lg sm:h-52 md:h-60">
          <div className="pl-2">
            <h3 className="text-md mb-3 font-bold  md:text-xl">
              Edit & Manage Product
            </h3>
            <Link
              to={"/Products"}
              className="rounded bg-teal-200 px-2 py-1 font-semibold"
            >
              Products Panel
            </Link>
          </div>
          <img
            src={productsBannerImage}
            alt="edit products "
            className="md:60 w-40 sm:w-52  "
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mx-auto flex h-40 w-5/6 items-center justify-around rounded-lg bg-[#27272b] shadow-lg sm:h-52 md:h-60">
          <div className="pl-2">
            <h3 className="text-md mb-3 font-bold  text-white md:text-xl">
              Edit & Manage Users
            </h3>
            <Link
              to={"/Categories"}
              className="rounded bg-[#c48375] px-2 py-1 font-semibold"
            >
              Users Panel
            </Link>
          </div>
          <img
            src={categoriesBannerImage}
            alt="edit categories "
            className="w-40 sm:w-52 md:w-72  "
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
