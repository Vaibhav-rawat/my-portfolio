import React from "react";
import Window from "../common/window";
import Link from "next/link";
import { IoIosLink } from "react-icons/io";
import { MdOutlineSwipe } from "react-icons/md";
import CertificatesDeck from "../common/certificates-deck";
import InfoDetail from "@/app/_ui/info-detail";

function Education() {
  return (
    <section className="section">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Window title="my.certificates">
            <div className="px-2 py-4 md:py-6 lg:py-10 2xl:py-16 bg-secondary custom-height">
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
                  className="ml-1 inline-block"
                />
              </Link>
            </div>
          </Window>
        </div>
        <div className="md:w-1/2 sub-section">
          <Window title="my.education">
            <div className="px-2 py-4 md:py-6 lg:py-10 2xl:py-16 bg-secondary">
              <InfoDetail
                role="Master of Computer Application"
                name="Graphic Era Deemed To Be University, Dehradun"
                duration="(2019 - 2021)"
              />
              <InfoDetail
                role="Bachelor in Computer Application"
                name="Graphic Era Deemed To Be University, Dehradun"
                duration="(2016 - 2019)"
              />
              <InfoDetail
                role="Higher Secondary Education"
                name="R.P Public School, Kotdwara"
                duration="(2015 - 2016)"
              />
              <InfoDetail
                role="Secondary School Education"
                name="Krist Jayanti School, Najibabad"
                duration="(2013 - 2014)"
              />
            </div>
          </Window>
        </div>
      </div>
    </section>
  );
}

export default Education;
