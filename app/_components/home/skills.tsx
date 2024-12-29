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
import { SiMongodb, SiJquery, SiMongoose } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import SkillBadge from "@/app/_ui/skill-badge";

function Skills() {
  return (
    <section className="container mx-auto my-10">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Window title="my.stack">
            <div className="flex gap-3 content-center justify-center flex-wrap bg-secondary custom-height">
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
        <div className="md:w-1/2">
          <Window title="stack.explained">
            <div className="px-2 py-4 md:py-6 lg:py-10 2xl:py-16 bg-secondary">
              <p className=" text-tBase mb-1">Apart from:</p>
              <p className="text-base text-tBaseSecondary font-bold">
                Next.js, TypeScript, React, Node.js, JavaScript, Tailwind,
                MongoDB, CSS3, HTML5, JQuery, Bootstrap, Firebase, GIT,
                Mongoose.
              </p>
              <p className=" text-tBase mb-1 mt-4">
                I also have hands-on experience with:
              </p>
              <p className="text-base text-tBaseSecondary font-bold">
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
