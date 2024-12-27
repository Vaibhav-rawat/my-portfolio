import ThemeButton from "@/app/_ui/theme-button";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import React from "react";
import Image from "next/image";
function HeroSection() {
  return (
    <section className="container mx-auto my-4">
      <div className="relative border border-gray-500 mx-5 rounded-md overflow-hidden">
        <div className="flex px-1 py-1 xl:px-3 xl:py-3 items-center">
          <div className="flex gap-1">
            <ThemeButton
              value="light"
              ariaLabel="Toggle White Theme"
              title="Toggle White Theme"
            />
            <ThemeButton
              value="dark"
              ariaLabel="Toggle Dark Theme"
              title="Toggle Dark Theme"
            />
            <ThemeButton
              value="retro"
              ariaLabel="Toggle Retro Theme"
              title="Toggle Retro Theme"
            />
          </div>
          <div className="flex-1 text-center">
            <h2 className="text-xs text-tBase mr-11 xl:mr-16">vaibhav.dev_</h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center bg-secondary px-2 gap-2 py-10 md:py-16 lg:py-24 xl:py-36">
          <div className="md:w-1/3">
            <Image
              className="mx-auto rounded-lg shadow-xl	"
              alt="It's Me!"
              height={380}
              width={285}
              src="/images/itsme.png"
              sizes="(min-width: 1040px) 285px, (min-width: 780px) 248px, 282px"
            />
          </div>
          <div className="md:w-2/3">
            <RoughNotationGroup show={true}>
              <h1 className="text-2xl font-bold text-tBase mb-3">
                Hello! I&rsquo;m Vaibhav Rawat, a{" "}
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
              <p className="text-base text-tBaseSecondary">
                With{" "}
                <RoughNotation
                  type="circle"
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
                >
                  back-end
                </RoughNotation>{" "}
                web development.
                <br />
                Through my experiences, I have had the opportunity to work with
                both small and large, specialised and cross-functional teams
                across different time zones and developed a working style that
                leans towards{" "}
                <RoughNotation
                  type="underline"
                  animationDelay={1000}
                  color="burlywood"
                >
                  flexibility,
                </RoughNotation>{" "}
                <RoughNotation
                  type="underline"
                  animationDelay={1000}
                  color="burlywood"
                >
                  clarity,
                </RoughNotation>{" "}
                and{" "}
                <RoughNotation
                  type="underline"
                  animationDelay={1000}
                  color="burlywood"
                >
                  collaboration.{" "}
                </RoughNotation>
              </p>
            </RoughNotationGroup>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
