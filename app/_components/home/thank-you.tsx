import React from "react";
import Window from "../common/window";
import ScrollToTop from "@/app/_ui/scroll-to-top";
import { FaRegMessage } from "react-icons/fa6";

function ThankYou() {
  return (
    <section className="section">
      <div className="flex flex-col md:flex-row flex-wrap justify-center">
        <div className="md:w-1/2">
          <Window title="thank.you">
            <div className="inner-container text-center">
              <p className="text-tBase text-sm border-b border-dashed border-gray-500 mb-2 pb-2">
                <FaRegMessage
                  size={15}
                  title="Scroll to top"
                  className="inline-block mr-1"
                />
                I&apos;m deeply humbled that you spent your valuable time
                exploring my portfolio. Your attention to detail and eye for
                great talent are commendable. Any form of feedback is welcomed.
                <br />
                My contact details are at the top of the page.
              </p>
              <ScrollToTop />
            </div>
          </Window>
        </div>
      </div>
    </section>
  );
}

export default ThankYou;
