import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Window from "../common/window";
import Image from "next/image";
import Link from "next/link";
import {
  TbFileCv,
  TbBrandLinkedin,
  TbBrandInstagram,
  TbMessageDots,
} from "react-icons/tb";

function HeroSection() {
  return (
    <section className="section">
      <Window title="vaibhav.dev_">
        <div className="flex flex-col md:flex-row items-center justify-center bg-secondary px-2 gap-2 py-10 md:py-16 lg:py-16 2xl:py-36">
          <div className="md:w-1/3 text-center mb-5 md:mb-0 md:text-start">
            <Image
              className="mx-auto rounded-lg shadow-xl	"
              alt="It's Me!"
              height={380}
              width={285}
              src="/images/itsme.png"
              sizes="(min-width: 1040px) 285px, (min-width: 780px) 239px, (min-width: 400px) 285px, calc(33.75vw + 157px)"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-start">
            <RoughNotationGroup show={true}>
              <h1 className="text-2xl font-bold text-tBase mb-4">
                Hello! I&apos;m Vaibhav Rawat, a{" "}
                <RoughNotation
                  type="highlight"
                  animationDelay={1000}
                  color="burlywood"
                  multiline={true}
                  animationDuration={700}
                >
                  Full Stack
                </RoughNotation>{" "}
                Developer.
              </h1>
              <p className="text-base text-tBaseSecondary mb-2">
                I have{" "}
                <RoughNotation
                  type="box"
                  animationDelay={1000}
                  color="burlywood"
                  multiline={true}
                >
                  4 years
                </RoughNotation>{" "}
                of hands-on experience in{" "}
                <RoughNotation
                  type="underline"
                  animationDelay={1000}
                  color="burlywood"
                  multiline={true}
                  iterations={1}
                  padding={3}
                >
                  front-end
                </RoughNotation>{" "}
                and{" "}
                <RoughNotation
                  type="underline"
                  animationDelay={1000}
                  color="burlywood"
                  multiline={true}
                  iterations={1}
                  padding={3}
                >
                  back-end
                </RoughNotation>{" "}
                web development.
              </p>
              <p className="text-base text-tBaseSecondary">
                Through my experiences, I have had the opportunity to work with
                both small and large, specialised and cross-functional teams
                across different time zones and developed a working style that
                leans towards{" "}
                <RoughNotation
                  type="underline"
                  animationDelay={1000}
                  color="burlywood"
                  padding={3}
                >
                  flexibility,
                </RoughNotation>{" "}
                <RoughNotation
                  type="underline"
                  animationDelay={1000}
                  color="burlywood"
                  padding={3}
                >
                  clarity,
                </RoughNotation>{" "}
                and{" "}
                <RoughNotation
                  type="underline"
                  animationDelay={1000}
                  color="burlywood"
                  padding={3}
                >
                  collaboration.{" "}
                </RoughNotation>
              </p>
            </RoughNotationGroup>
            <div className="mt-5 gap-2 flex items-center justify-center md:justify-start">
              <Link
                target="_blank"
                className="text-tBaseSecondary text-lg  inline-block scale-x-125"
                title="My Resume"
                href="https://flowcv.com/resume/01oc5juss1"
              >
                <TbFileCv size={35} />
              </Link>
              <Link
                target="_blank"
                className="text-tBaseSecondary text-lg  inline-block "
                title="My LinkedIn"
                href="https://www.linkedin.com/in/vaibhavrawat-dev/"
              >
                <TbBrandLinkedin size={35} />
              </Link>

              <Link
                target="_blank"
                className="text-tBaseSecondary text-lg  inline-block "
                title="My Instagram"
                href="https://www.instagram.com/vaibhav_rwtt/"
              >
                <TbBrandInstagram size={39} />
              </Link>
              <Link
                className="text-tBaseSecondary text-lg  inline-block "
                title="Write an Email"
                href="mailto:rawat4vaibhav@gmail.com"
              >
                <TbMessageDots size={35} />
              </Link>
            </div>
          </div>
        </div>
      </Window>
    </section>
  );
}

export default HeroSection;
