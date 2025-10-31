import React, { PropsWithChildren } from "react";
import ThemeButton from "@/app/_ui/theme-button";
type WindowProps = {
  title: string;
};
function Window({ children, title }: PropsWithChildren<WindowProps>) {
  return (
    <div className="relative mx-3 rounded-md h-full border border-gray-500 bg-glass">
      <div className="overflow-hidden rounded-[5px] h-full">
        <div className="flex px-1 py-1 2xl:px-3 2xl:py-3 items-center bg-primary ">
          <div className="flex gap-1">
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
          <div className="flex-1 text-center">
            <h2 className="text-xs text-tBase mr-11 xl:mr-16">{title}</h2>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Window;
