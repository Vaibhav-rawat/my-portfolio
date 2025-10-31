"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";

const certificateImages = [
  {
    src: "/images/excellence-in-front-end-by-accolite.jpg",
    alt: "Excellence in Front-end by Bounteous x Accolite",
  },
  {
    src: "/images/introduction-to-openai-api-n-chatgpt-api-for-developers.jpg",
    alt: "Introduction to OpenAl API & ChatGPT API for Developers",
  },
  {
    src: "/images/aws-essential-training-for-developers.jpg",
    alt: "AWS Essential Training for Developers",
  },
  {
    src: "/images/microservices-foundations-professional-certificate-by-kong.jpg",
    alt: "Microservices Foundations Professional Certificate by Kong",
  },
  {
    src: "/images/advanced-node-js-scaling-applications.jpg",
    alt: "Advanced Node.js Scaling Applications",
  },
  {
    src: "/images/creating-a-serverless-react-application-in-aws.jpg",
    alt: "Creating a Serverless React Application in AWS",
  },
  {
    src: "/images/next-js-creating-and-hosting-a-full-stack-site.jpg",
    alt: "Next.js Creating and Hosting a Full Stack Site",
  },
  {
    src: "/images/sql-essential-training-by-national-association-of-state-boards-of-accountancy.jpg",
    alt: "SQL Essential Training by National Association of State Boards of Accountancy (NASBA)",
  },
];

const CertificatesDeck = () => {
  return (
    <Swiper
      effect="cards"
      grabCursor
      modules={[EffectCards]}
      className="mySwiper"
    >
      {certificateImages.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            fill
            alt={image.alt}
            src={image.src}
            sizes="320px"
            className="object-cover rounded-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CertificatesDeck;
