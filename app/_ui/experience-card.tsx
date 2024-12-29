import Link from "next/link";
import { CiAt } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";
import { FaCode } from "react-icons/fa";
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
      <h3 className="text-tBase border-b border-dashed border-gray-500 mb-1 pb-1">
        <span className="font-bold text-lg">{experience.role}</span>
        <br />
        <CiAt title="At" size={15} className="inline-block" />
        <Link
          title="visit org website"
          rel="noreferrer"
          href={experience.company.website}
        >
          <span className="text-sm mx-1">{experience.company.name}</span>
          <IoIosLink title="visit" size={13} className="inline-block" />
        </Link>
      </h3>
      <p className="text-tBaseSecondary text-xs mb-2">{experience.duration}</p>
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
