import React from "react";
import Window from "../common/window";
import ExperienceCard, { ExperienceTypes } from "@/app/_ui/experience-card";
import ExperiencesData from "@/data/experiencesData.json";
function Experience() {
  return (
    <section className="section">
      <div className="flex flex-col md:flex-row flex-wrap justify-center">
        {ExperiencesData.map((experience: ExperienceTypes, index: number) => (
          <div
            key={index}
            className={`md:w-1/2 xl:w-1/3 ${index !== 0 ? "sub-section" : ""}`}
          >
            <Window title={experience.title}>
              <ExperienceCard experience={experience} />
            </Window>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
