import { FaCode } from "react-icons/fa";
import InfoDetail from "./info-detail";
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
  return (
    <div className="px-2 py-4 md:py-6 lg:py-10 2xl:py-16 bg-secondary custom-height">
      <InfoDetail
        role={experience.role}
        website={experience.company.website}
        name={experience.company.name}
        duration={experience.duration}
      />
      <ul className="text-tBaseSecondary text-sm">
        {experience.responsibilities.map(
          (responsibility: string, index: number) => (
            <li key={index} className="mb-2">
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
