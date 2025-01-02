import React from "react";
import Window from "../common/window";
import Link from "next/link";
import CertificatesDeck from "../common/certificates-deck";
import InfoDetail from "@/app/_ui/info-detail";
import { IoIosLink } from "react-icons/io";
import { MdOutlineSwipe } from "react-icons/md";
import { PiGraduationCap } from "react-icons/pi";
import { BsBook } from "react-icons/bs";

function Education() {
  return (
    <section className="section" id="education-section">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Window title="my.certificates">
            <div className="inner-container flex flex-col justify-center">
              <p className="text-xs text-tBaseSecondary w-full block text-center mb-5">
                swipe
                <MdOutlineSwipe
                  title="Swipe to shuffle deck"
                  size={13}
                  className="ml-1 inline-block"
                />
              </p>
              <CertificatesDeck />
              <Link
                title="View My Certificates"
                rel="noreferrer"
                className="text-xs text-tBaseSecondary w-full block text-center mt-5"
                href="https://drive.google.com/drive/folders/1poZdcZMuFF3SBaP_EkoetCnbvfGYl-4p?usp=sharing"
                target="_blank"
              >
                or view certificates
                <IoIosLink
                  title="Checkout my old portfolio"
                  size={13}
                  className="inline-block"
                />
              </Link>
            </div>
          </Window>
        </div>
        <div className="md:w-1/2 sub-section">
          <Window title="my.education">
            <div className="inner-container">
              <InfoDetail
                role="Master of Computer Application"
                name="Graphic Era Deemed To Be University, Dehradun"
                duration="(2019 - 2021)"
                icon={PiGraduationCap}
                iconTitle="Post Graduation"
              />
              <InfoDetail
                role="Bachelor in Computer Application"
                name="Graphic Era Deemed To Be University, Dehradun"
                duration="(2016 - 2019)"
                icon={PiGraduationCap}
                iconTitle="Graduation"
              />
              <InfoDetail
                role="Higher Secondary Education"
                name="R.P Public School, Kotdwara"
                duration="(2015 - 2016)"
                icon={BsBook}
                iconTitle="Schooling"
              />
              <InfoDetail
                role="Secondary School Education"
                name="Krist Jayanti School, Najibabad"
                duration="(2013 - 2014)"
                icon={BsBook}
                iconTitle="Schooling"
              />
            </div>
          </Window>
        </div>
      </div>
    </section>
  );
}

export default Education;
