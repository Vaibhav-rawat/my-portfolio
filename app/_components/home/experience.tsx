import React from "react";
import Window from "../common/window";
import ExperienceCard, { ExperienceTypes } from "@/app/_ui/experience-card";
const experienceData: ExperienceTypes = {
  role: "Product Engineer",
  company: {
    name: "Fitbots OKRs",
    website: "https://www.fitbots.com/",
  },
  responsibilities: [
    "Worked on Generative AI and AI prompt engineering to boost product adoption rate.",
    "Enabled streaming of API responses to support streaming in the form of a custom scalable hook.",
    "Implemented a solution to render Markdown API responses in a legible format, utilizing the Markdown library to ensure compliance with React security measures.",
    "Led the seamless migration of the backend system from an older Node.js version (v10) to the latest one (v18), ensuring better performance and long-term sustainability.",
  ],
};
const experienceData1: ExperienceTypes = {
  role: "Full Stack Developer",
  company: {
    name: "Specscart",
    website: "https://specscart.co.uk/",
  },
  responsibilities: [
    "Built and designed several libraries, to reduce dependence on third-party solutions, resulting in more efficient page load times.",
    "Designed an internal system to track each stage of a product for efficient time management within the warehouse.",
    "Integrated PayPal, Stripe, and Square payment gateways, expanding payment options for customers.",
    "Integrated logistics & shipping software such as ShipStation for a better hassle-free delivery system.",
    "Migrated Excel-based tasks to system and implemented chart libraries for enhanced data visualization.",
  ],
};
function Experience() {
  return (
    <section className="container mx-auto my-10">
      <div className="flex flex-col md:flex-row flex-wrap">
        <div className="md:w-1/2 xl:w-1/3">
          <Window title="past.org">
            <ExperienceCard experience={experienceData} />
          </Window>
        </div>
        <div className="md:w-1/2 xl:w-1/3">
          <Window title="past.org">
            <ExperienceCard experience={experienceData1} />
          </Window>
        </div>
        <div className="md:w-1/2 xl:w-1/3">
          <Window title="past.org">
            <ExperienceCard experience={experienceData} />
          </Window>
        </div>
      </div>
    </section>
  );
}

export default Experience;
