import React from "react";
import { IconType } from "react-icons";

type SkillBadgeProps = {
  icon: IconType;
  title: string;
};

function SkillBadge({ icon: Icon, title }: Readonly<SkillBadgeProps>) {
  return (
    <Icon
      className="flex justify-center items-center w-11 h-11 lg:w-16 lg:h-16 p-2 border border-dashed border-gray-500 rounded-lg  text-tBase"
      title={title}
    />
  );
}

export default SkillBadge;
