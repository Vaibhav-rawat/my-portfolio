"use client";
import React, { useState } from "react";
import { PiCompassDuotone } from "react-icons/pi";
import { AnimatePresence } from "motion/react";
import AssistiveTouchModal from "@/app/_components/common/assistive-touch-modal";

function AssistiveTouch() {
  const [showAssistiveTouch, setShowAssistiveTouch] = useState(false);

  return (
    <>
      <button
        title="Toggle Assistive Touch"
        className="text-tBase fixed glass-backdrop bottom-4 right-4 rounded-full z-50"
        onClick={() =>
          setShowAssistiveTouch((showAssistiveTouch) => !showAssistiveTouch)
        }
      >
        <PiCompassDuotone size={50} className="icon-animate" />
      </button>
      <AnimatePresence>
        {showAssistiveTouch && (
          <AssistiveTouchModal
            showAssistiveTouch={showAssistiveTouch}
            setShowAssistiveTouch={setShowAssistiveTouch}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default AssistiveTouch;
