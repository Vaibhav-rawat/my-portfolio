import React from "react";
import Window from "../common/window";
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiJquery, SiMongoose, SiJest } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import SkillBadge from "@/app/_ui/skill-badge";
import Link from "next/link";
import { IoIosLink } from "react-icons/io";
import { PiHandWaving } from "react-icons/pi";

function Skills() {
  return (
    <section className="section">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Window title="my.stack">
            <div className="flex gap-5 lg:gap-3 content-center justify-center flex-wrap bg-secondary custom-height px-2 py-4">
              <SkillBadge
                className="hover:bg-[#000000] skill-badge"
                icon={RiNextjsFill}
                title="Next.js"
              />
              <SkillBadge
                className="hover:bg-[#007acc] skill-badge"
                icon={BiLogoTypescript}
                title="TypeScript"
              />
              <SkillBadge
                className="hover:bg-[#61dbfb] skill-badge"
                icon={FaReact}
                title="React"
              />
              <SkillBadge
                className="hover:bg-[#3c873a] skill-badge"
                icon={FaNodeJs}
                title="Node.js"
              />
              <SkillBadge
                className="hover:bg-[#99425b] skill-badge"
                icon={SiJest}
                title="Jest"
              />
              <SkillBadge
                className="hover:bg-[#F0DB4F] skill-badge"
                icon={IoLogoJavascript}
                title="JavaScript"
              />
              <SkillBadge
                className="hover:bg-[#38bdf8] skill-badge"
                icon={RiTailwindCssFill}
                title="Tailwind"
              />
              <SkillBadge
                className="hover:bg-[#3FA037] skill-badge"
                icon={SiMongodb}
                title="MongoDB"
              />
              <SkillBadge
                className="hover:bg-[#2965f1] skill-badge"
                icon={FaCss3Alt}
                title="CSS3"
              />
              <SkillBadge
                className="hover:bg-[#f06529] skill-badge"
                icon={FaHtml5}
                title="HTML5"
              />
              <SkillBadge
                className="hover:bg-[#0769ad] skill-badge"
                icon={SiJquery}
                title="JQuery"
              />
              <SkillBadge
                className="hover:bg-[#0275d8] skill-badge"
                icon={FaBootstrap}
                title="Bootstrap"
              />
              <SkillBadge
                className="hover:bg-[#f5820d] skill-badge"
                icon={IoLogoFirebase}
                title="Firebase"
              />
              <SkillBadge
                className="hover:bg-[#f34f29] skill-badge"
                icon={FaGitAlt}
                title="Git"
              />
              <SkillBadge
                className="hover:bg-[#880000] skill-badge"
                icon={SiMongoose}
                title="Mongoose"
              />
            </div>
          </Window>
        </div>
        <div className="md:w-1/2 sub-section">
          <Window title="stack.explained">
            <div className="px-2 py-4 md:py-6 lg:py-10 2xl:py-16 bg-secondary">
              <p className=" text-tBase mb-1  text-base border-b border-dashed border-gray-500 mb-1 pb-1">
                <PiHandWaving title="Hi there" className="inline-block mr-1 " />
                Hi there
              </p>
              <p className=" text-tBaseSecondary  text-sm">
                I designed and developed this portfolio using Next.js and
                Tailwind CSS to leverage modern web development capabilities and
                create a more sophisticated user experience. Previously, I built
                a{" "}
                <Link
                  href="https://vaibhavrawat.dev/"
                  target="_blank"
                  title="Checkout my old portfolio"
                >
                  portfolio
                  <IoIosLink
                    title="Checkout my old portfolio"
                    size={13}
                    className="inline-block"
                  />
                </Link>{" "}
                using vanilla React without external libraries, demonstrating my
                ability to work with both fundamental and advanced development
                approaches.
              </p>
              <p className="text-base text-tBase  mb-1 mt-4">
                I also have hands-on experience with:
              </p>
              <p className=" text-tBaseSecondary text-sm">
                MySQL, Styled Components, JWT, ApexCharts.js, Formik, Chakra UI,
                React Hook Form, Yep, Owl Carousel, Flickity, etc.
              </p>
            </div>
          </Window>
        </div>
      </div>
    </section>
  );
}

export default Skills;
