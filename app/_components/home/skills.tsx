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
import { SiMongodb, SiJquery } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import SkillBadge from "@/app/_ui/skill-badge";
import Link from "next/link";
import { IoIosLink } from "react-icons/io";
import { PiHandWaving } from "react-icons/pi";
import { GiJesterHat } from "react-icons/gi";

function Skills() {
  return (
    <section className="section" id="skill-section">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Window title="my.stack">
            <div className="flex gap-5 lg:gap-3 content-center justify-center flex-wrap bg-glass px-2 py-4 custom-height">
              <SkillBadge
                className="hover:bg-[#000000]"
                icon={RiNextjsFill}
                title="Next.js"
              />
              <SkillBadge
                className="hover:bg-[#007acc]"
                icon={BiLogoTypescript}
                title="TypeScript"
              />
              <SkillBadge
                className="hover:bg-[#61dbfb]"
                icon={FaReact}
                title="React"
              />
              <SkillBadge
                className="hover:bg-[#3c873a]"
                icon={FaNodeJs}
                title="Node.js"
              />
              <SkillBadge
                className="hover:bg-[#99425b]"
                icon={GiJesterHat}
                title="Jest"
              />
              <SkillBadge
                className="hover:bg-[#F0DB4F]"
                icon={IoLogoJavascript}
                title="JavaScript"
              />
              <SkillBadge
                className="hover:bg-[#38bdf8]"
                icon={RiTailwindCssFill}
                title="Tailwind"
              />
              <SkillBadge
                className="hover:bg-[#3FA037]"
                icon={SiMongodb}
                title="MongoDB"
              />
              <SkillBadge
                className="hover:bg-[#2965f1]"
                icon={FaCss3Alt}
                title="CSS3"
              />
              <SkillBadge
                className="hover:bg-[#f06529]"
                icon={FaHtml5}
                title="HTML5"
              />
              <SkillBadge
                className="hover:bg-[#0769ad]"
                icon={SiJquery}
                title="JQuery"
              />
              <SkillBadge
                className="hover:bg-[#0275d8]"
                icon={FaBootstrap}
                title="Bootstrap"
              />
              <SkillBadge
                className="hover:bg-[#f5820d]"
                icon={IoLogoFirebase}
                title="Firebase"
              />
              <SkillBadge
                className="hover:bg-[#f34f29]"
                icon={FaGitAlt}
                title="Git"
              />
            </div>
          </Window>
        </div>
        <div className="md:w-1/2 sub-section">
          <Window title="stack.explained">
            <div className="inner-container">
              <p className=" text-tBase text-base border-b border-dashed border-gray-500 mb-1 pb-1">
                <PiHandWaving
                  title="Hi there"
                  className="inline-block mr-1 icon-animate"
                />
                Hi there
              </p>
              <p className=" text-tBaseSecondary  text-sm">
                I designed and developed this portfolio using Next.js and
                Tailwind CSS to leverage modern web development capabilities.
                Previously, I built a{" "}
                <Link
                  href="https://vaibhavrawat.netlify.app/"
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
                using React and without external libraries, demonstrating my
                ability to work with both fundamental and advanced development
                approaches.
              </p>
              <p className="text-sm text-tBase  border-b border-dashed border-gray-500 mb-1 pb-1 mt-4">
                I also have hands-on experience with:
              </p>
              <p className=" text-tBaseSecondary text-sm">
                Motion, MySQL, Styled Components, JWT, ApexCharts.js, Formik,
                Chakra UI, React Hook Form, Yep, Swipper, etc.
              </p>
            </div>
          </Window>
        </div>
      </div>
    </section>
  );
}

export default Skills;
