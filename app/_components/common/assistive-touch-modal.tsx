"use client";
import React, { useEffect } from "react";
import {
  PiStudentDuotone,
  PiBuildingOfficeDuotone,
  PiScanSmileyDuotone,
  PiSlidersHorizontalDuotone,
  PiSmileyXEyesDuotone,
  PiCompassToolDuotone,
} from "react-icons/pi";
import AssistiveAction from "@/app/_ui/assistive-action";
import { motion, spring } from "motion/react";
type AssistiveTouchModalProps = {
  showAssistiveTouch: boolean;
  setShowAssistiveTouch: (show: boolean) => void;
};

function AssistiveTouchModal({
  showAssistiveTouch,
  setShowAssistiveTouch,
}: Readonly<AssistiveTouchModalProps>) {
  useEffect(() => {
    const handleScroll = () => {
      if (showAssistiveTouch) {
        setShowAssistiveTouch(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showAssistiveTouch, setShowAssistiveTouch]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute z-10 h-full w-full top-0 left-0 glass-backdrop"
        onClick={() => setShowAssistiveTouch(false)}
        aria-hidden="true"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, translate: "-50% -20%" }}
        animate={{ opacity: 1, translate: "-50% -50%" }}
        exit={{ opacity: 0, translate: "-50% -20%" }}
        transition={{ duration: 0.6, type: spring }}
        className="fixed inset-1/2 w-72 h-72 rounded-md text-tBase p-8 flex justify-center flex-col bg-glass z-10"
      >
        <div className="mt-4">
          <AssistiveAction
            icon={PiScanSmileyDuotone}
            title="HOME"
            href="#home-section"
          />
        </div>
        <div className="flex justify-between mb-8">
          <AssistiveAction
            icon={PiSlidersHorizontalDuotone}
            title="SKILL"
            href="#skill-section"
          />
          <AssistiveAction
            icon={PiCompassToolDuotone}
            title="PROJECT"
            href="#project-section"
          />
        </div>
        <div className="flex justify-between">
          <AssistiveAction
            icon={PiBuildingOfficeDuotone}
            title="EXPERIENCE"
            href="#experience-section"
          />
          <AssistiveAction
            icon={PiStudentDuotone}
            title="EDUCATION"
            href="#education-section"
          />
        </div>
        <div className="mb-8">
          <AssistiveAction
            icon={PiSmileyXEyesDuotone}
            title="CLOSE"
            onClick={() => setShowAssistiveTouch(false)}
          />
        </div>
      </motion.div>
    </>
  );
}

export default AssistiveTouchModal;
