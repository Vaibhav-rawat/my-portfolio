"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import Image from "next/image";

function CertificatesDeck() {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image
          fill={true}
          alt="AWS Essential Training for Developers"
          src="/images/aws-essential-training-for-developers.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          fill={true}
          alt="Advanced Node.js Scaling Applications"
          src="/images/advanced-node-js-scaling-applications.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          fill={true}
          alt="Creating a Serverless React Application in AWS"
          src="/images/creating-a-serverless-react-application-in-aws.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          fill={true}
          alt="Next.js Creating and Hosting a Full Stack Site"
          src="/images/next-js-creating-and-hosting-a-full-stack-site.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
}
export default CertificatesDeck;
