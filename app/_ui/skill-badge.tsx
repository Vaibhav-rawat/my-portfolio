import React from "react";
import { IconType } from "react-icons";

type SkillBadgeProps = {
  icon: IconType;
  title: string;
  className: string;
};

function SkillBadge({
  icon: Icon,
  title,
  className,
}: Readonly<SkillBadgeProps>) {
  return (
    <div className="flex flex-col items-center gap-1">
      <Icon className={className} title={title} />
      <p className="text-tBaseSecondary text-xs font-bold">{title}</p>
    </div>
  );
}

export default SkillBadge;
