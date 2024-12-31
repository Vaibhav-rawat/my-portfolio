import Link from "next/link";
import React from "react";
import { CiAt } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";

type InfoDetailProps = {
  role: string;
  website?: string;
  name: string;
  duration: string;
};

function InfoDetail({
  role,
  website,
  name,
  duration,
}: Readonly<InfoDetailProps>) {
  return (
    <>
      <h3 className="text-tBase border-b border-dashed border-gray-500 mb-1 pb-1">
        <span className="font-bold text-lg">{role}</span>
        <br />
        <CiAt title="At" size={15} className="inline-block" />
        {website ? (
          <Link
            target="_blank"
            title="visit org website"
            rel="noreferrer"
            href={website}
          >
            <span className="text-sm mx-1">{name}</span>
            <IoIosLink title="visit" size={13} className="inline-block" />
          </Link>
        ) : (
          <span className="text-sm mx-1">{name}</span>
        )}
      </h3>
      <p className="text-tBaseSecondary text-xs mb-2">{duration}</p>
    </>
  );
}

export default InfoDetail;
