"use client";
import React, { useEffect, useRef } from "react";
import {
  PiStudentThin,
  PiBuildingOfficeThin,
  PiScanSmileyThin,
  PiSlidersThin,
  PiSmileyXEyesThin,
  PiCompassToolThin,
  PiCompassThin,
} from "react-icons/pi";
import AssistiveAction from "@/app/_ui/assistive-action";

type AssistiveTouchModalProps = {
  showAssistiveTouch: boolean;
  setShowAssistiveTouch: (show: boolean) => void;
};

function AssistiveTouchModal({
  showAssistiveTouch,
  setShowAssistiveTouch,
}: Readonly<AssistiveTouchModalProps>) {
  const assistiveRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (showAssistiveTouch) {
        setShowAssistiveTouch(false);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartRef.current = new Date().getTime();

      if (
        assistiveRef.current &&
        !assistiveRef.current.contains(e.target as Node)
      ) {
        setShowAssistiveTouch(false);
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchDuration = new Date().getTime() - touchStartRef.current;

      // If touch duration is more than 200ms, consider it as a scroll/swipe
      // and don't close the assistive touch if it was a scroll
      if (touchDuration > 200) {
        return;
      }

      if (
        assistiveRef.current &&
        !assistiveRef.current.contains(e.target as Node)
      ) {
        setShowAssistiveTouch(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [showAssistiveTouch]);

  return (
    <>
      <button
        title="Toggle Assistive Touch"
        className="text-tBase fixed bg-glass bottom-4 right-4 rounded-md z-50"
        onClick={() => setShowAssistiveTouch(!showAssistiveTouch)}
      >
        <PiCompassThin size={40} />
      </button>
      {showAssistiveTouch && (
        <div
          ref={assistiveRef}
          className="fixed inset-1/2 translate-y-[-50%] translate-x-[-50%] w-72 h-72 rounded-md text-tBase p-8 flex justify-center flex-col bg-glass z-10"
        >
          <div className="mt-4">
            <AssistiveAction
              icon={PiScanSmileyThin}
              title="HOME"
              href="#home-section"
            />
          </div>
          <div className="flex justify-between mb-8">
            <AssistiveAction
              icon={PiSlidersThin}
              title="SKILL"
              href="#skill-section"
            />
            <AssistiveAction
              icon={PiCompassToolThin}
              title="PROJECT"
              href="#project-section"
            />
          </div>
          <div className="flex justify-between">
            <AssistiveAction
              icon={PiBuildingOfficeThin}
              title="EXPERIENCE"
              href="#experience-section"
            />
            <AssistiveAction
              icon={PiStudentThin}
              title="EDUCATION"
              href="#education-section"
            />
          </div>
          <div className="mb-8">
            <AssistiveAction
              icon={PiSmileyXEyesThin}
              title="CLOSE"
              onClick={() => setShowAssistiveTouch(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default AssistiveTouchModal;
