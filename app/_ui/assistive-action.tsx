import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

type AssistiveActionProps = {
  icon: IconType;
  title: string;
  href?: string;
  onClick?: () => void;
};

function AssistiveAction({
  icon: Icon,
  title,
  href,
  onClick,
}: Readonly<AssistiveActionProps>) {
  const sharedContent = (
    <span className="flex flex-col justify-center items-center relative text-white">
      <Icon size={45} title={title} />
      <p className="text-xs absolute top-[110%]">{title}</p>
    </span>
  );
  if (href) {
    return <Link href={href}>{sharedContent}</Link>;
  }
  return (
    <button className="w-full" type="button" onClick={onClick}>
      {sharedContent}
    </button>
  );
}

export default AssistiveAction;
