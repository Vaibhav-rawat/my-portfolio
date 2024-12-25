import ThemeButton from "@/app/_ui/theme-button";
import React from "react";
function HeroSection() {
  return (
    <section className="container mx-auto border border-gray-500 m-4 h-screen rounded-md">
      <div className="flex gap-1 border-b p-1">
        <ThemeButton
          value="light"
          ariaLabel="Toggle White Theme"
          title="Toggle White Theme"
        />
        <ThemeButton
          value="dark"
          ariaLabel="Toggle Dark Theme"
          title="Toggle Dark Theme"
        />
        <ThemeButton
          value="retro"
          ariaLabel="Toggle Retro Theme"
          title="Toggle Retro Theme"
        />
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold">Vaibhav Rawat</h1>
        <p className="text-2xl">Full Stack Developer</p>
      </div>
    </section>
  );
}

export default HeroSection;
