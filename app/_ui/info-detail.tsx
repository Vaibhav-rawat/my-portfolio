import Link from "next/link";
import React from "react";
import { IoIosLink } from "react-icons/io";
import { IconType } from "react-icons";

type InfoDetailProps = {
  role: string;
  website?: string;
  name: string;
  duration: string;
  icon: IconType;
  iconTitle: string;
};

function InfoDetail({
  role,
  website,
  name,
  duration,
  icon: Icon,
  iconTitle,
}: Readonly<InfoDetailProps>) {
  return (
    <>
      <h3 className="text-tBase border-b border-dashed border-gray-500 mb-1 pb-1">
        <span className="font-bold text-lg">{role}</span>
        <br />
        <Icon title={iconTitle} size={15} className="inline-block mr-1" />
        {website ? (
          <Link
            target="_blank"
            title="visit org website"
            rel="noreferrer"
            href={website}
          >
            <span className="text-sm">{name}</span>
            <IoIosLink title="visit" size={13} className="inline-block" />
          </Link>
        ) : (
          <span className="text-sm">{name}</span>
        )}
      </h3>
      <p className="text-tBaseSecondary text-xs mb-2">{duration}</p>
    </>
  );
}

export default InfoDetail;
