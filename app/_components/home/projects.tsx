import React from "react";
import Window from "../common/window";
import VideoInDetail from "@/app/_ui/video-in-detail";

function Projects() {
  return (
    <section className="section" id="project-section">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Window title="my.project">
            <VideoInDetail
              href="https://specscart.co.uk/"
              desc="Developed the landing page for the organization from scratch to
                improve SEO ranking and reduce page load time resulting in a
                reduction of bounce rate."
              poster="/images/home-page-poster.png"
              video="/video/home-page-video.mp4"
            />
          </Window>
        </div>
        <div className="md:w-1/2 sub-section">
          <Window title="my.project">
            <VideoInDetail
              href="https://specscart.co.uk/glasses-collections/luxury-glasses"
              desc="Took on the challenge of developing a webpage for the
                organization that exudes a sense of luxury, contributing to the
                increase in sales of high-end products."
              poster="/images/luxury-page-poster.png"
              video="/video/luxury-page-video.mp4"
            />
          </Window>
        </div>
      </div>
    </section>
  );
}

export default Projects;
