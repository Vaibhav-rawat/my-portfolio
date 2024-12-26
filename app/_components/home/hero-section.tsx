import ThemeButton from "@/app/_ui/theme-button";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import React from "react";
function HeroSection() {
  return (
    <section className="container mx-auto border border-gray-500 m-4 rounded-md ">
      <div className="flex gap-1 border-b px-1 py-1 bg-neutral-400">
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
      <div className="flex items-center justify-center h-screen bg-secondary px-2 gap-2">
        <RoughNotationGroup show={true}>
          <div className="w-1/2">
            <h1 className="text-2xl font-bold text-tBase mb-3">
              Hello! I&rsquo;m Vaibhav Rawat, a{" "}
              <RoughNotation
                type="highlight"
                animationDelay={1000}
                color="burlywood"
                multiline={true}
              >
                Full Stack
              </RoughNotation>{" "}
              Developer.
            </h1>
            <p className="text-base text-tBaseSecondary">
              With{" "}
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
                type="highlight"
                animationDelay={1000}
                color="burlywood"
                multiline={true}
              >
                front-end
              </RoughNotation>{" "}
              and{" "}
              <RoughNotation
                type="highlight"
                animationDelay={1000}
                color="burlywood"
                multiline={true}
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
                color="indianred"
              >
                flexibility,
              </RoughNotation>{" "}
              <RoughNotation
                type="underline"
                animationDelay={1000}
                color="indianred"
              >
                clarity,
              </RoughNotation>{" "}
              and{" "}
              <RoughNotation
                type="underline"
                animationDelay={1000}
                color="indianred"
              >
                collaboration.{" "}
              </RoughNotation>
            </p>
          </div>
        </RoughNotationGroup>
        <div className="w-1/2"></div>
      </div>
    </section>
  );
}

export default HeroSection;
