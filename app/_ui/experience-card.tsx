"use client";
import { useEffect } from "react";
import { FaCode } from "react-icons/fa";
import InfoDetail from "./info-detail";
import { CiAt } from "react-icons/ci";
import { useAnimate, useInView, stagger } from "motion/react";
export type ExperienceTypes = {
  title: string;
  role: string;
  duration: string;
  company: {
    name: string;
    website: string;
  };
  responsibilities: string[];
};

type ExperienceCardProps = {
  experience: ExperienceTypes;
};
function ExperienceCard({ experience }: Readonly<ExperienceCardProps>) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, amount: 0.7 });
  useEffect(() => {
    if (isInView) {
      animate("li", { opacity: 1 }, { delay: stagger(0.3) });
    }
  }, [isInView, animate]);
  return (
    <div className="inner-container">
      <InfoDetail
        role={experience.role}
        website={experience.company.website}
        name={experience.company.name}
        duration={experience.duration}
        icon={CiAt}
        iconTitle="At"
      />
      <ul ref={scope} className="text-tBaseSecondary text-sm">
        {experience.responsibilities.map(
          (responsibility: string, index: number) => (
            <li key={index} className="mb-2 opacity-0">
              <FaCode
                title="responsibility"
                size={13}
                className="mx-1 inline-block"
              />
              {responsibility}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
export default ExperienceCard;
