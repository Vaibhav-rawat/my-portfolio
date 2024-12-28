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
            <div className="flex gap-2 content-center justify-center flex-wrap bg-secondary my-stack-height">
              <SkillBadge icon={RiNextjsFill} title="Next.js" />
              <SkillBadge icon={BiLogoTypescript} title="TypeScript" />
              <SkillBadge icon={FaReact} title="React" />
              <SkillBadge icon={FaNodeJs} title="Node.js" />
              <SkillBadge icon={IoLogoJavascript} title="JavaScript" />
              <SkillBadge icon={RiTailwindCssFill} title="Tailwind" />
              <SkillBadge icon={SiMongodb} title="MongoDB" />
              <SkillBadge icon={FaCss3Alt} title="CSS3" />
              <SkillBadge icon={FaHtml5} title="HTML5" />
              <SkillBadge icon={SiJquery} title="JQuery" />
              <SkillBadge icon={FaBootstrap} title="Bootstrap" />
              <SkillBadge icon={IoLogoFirebase} title="Firebase" />
              <SkillBadge icon={FaGitAlt} title="Git" />
              <SkillBadge icon={SiMongoose} title="Mongoose" />
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
