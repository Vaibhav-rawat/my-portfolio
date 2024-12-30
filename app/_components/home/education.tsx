import React from "react";
import Window from "../common/window";
import Link from "next/link";
import { IoIosLink } from "react-icons/io";
import CertificatesDeck from "../common/certificates-deck";

function Education() {
  return (
    <section className="container mx-auto my-10">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Window title="my.certificates">
            <div className="px-2 py-4 md:py-6 lg:py-10 2xl:py-16 bg-secondary">
              <CertificatesDeck />
              <Link
                title="View My Certificates"
                className="text-xs text-tBaseSecondary w-full block text-center mt-5"
                href="https://drive.google.com/drive/folders/1poZdcZMuFF3SBaP_EkoetCnbvfGYl-4p?usp=sharing"
                target="_blank"
              >
                swipe or click here
                <IoIosLink
                  title="Checkout my old portfolio"
                  size={13}
                  className="ml-1 inline-block"
                />
              </Link>
            </div>
          </Window>
        </div>
        <div className="md:w-1/2">
          <Window title="my.education">
            <div className="px-2 py-4 md:py-6 lg:py-10 2xl:py-16 bg-secondary">
              <p className=" text-tBase mb-1  text-base">Welcome</p>
              <p className=" text-tBaseSecondary  text-sm">
                I designed and developed this portfolio using Next.js and
                Tailwind CSS to leverage modern web development capabilities and
                create a more sophisticated user experience. Previously, I built
                a{" "}
                <Link
                  href="https://vaibhavrawat.dev/"
                  target="_blank"
                  title="Checkout my old portfolio"
                >
                  portfolio
                  <IoIosLink
                    title="Checkout my old portfolio"
                    size={13}
                    className="inline-block"
                  />
                </Link>{" "}
                using vanilla React without external libraries, demonstrating my
                ability to work with both fundamental and advanced development
                approaches.
              </p>
              <p className="text-base text-tBase  mb-1 mt-4">
                I also have hands-on experience with:
              </p>
              <p className=" text-tBaseSecondary text-sm">
                MySQL, Styled Components, JWT, ApexCharts.js, Formik, Chakra UI,
                React Hook Form, Yep, Owl Carousel, Flickity, etc.
              </p>
            </div>
          </Window>
        </div>
      </div>
    </section>
  );
}

export default Education;
