"use client";
import React, { useState } from "react";
import { PiCompassThin } from "react-icons/pi";
import dynamic from "next/dynamic";

const DynamicAssistiveTouchModal = dynamic(
  () => import("../_components/common/assistive-touch-modal")
);

function AssistiveTouch() {
  const [showAssistiveTouch, setShowAssistiveTouch] = useState(false);

  return (
    <>
      <button
        title="Toggle Assistive Touch"
        className="text-tBase fixed bg-glass bottom-4 right-4 rounded-md z-50"
        onClick={() => setShowAssistiveTouch(!showAssistiveTouch)}
      >
        <PiCompassThin size={40} className="icon-animate" />
      </button>
      {showAssistiveTouch && (
        <DynamicAssistiveTouchModal
          showAssistiveTouch={showAssistiveTouch}
          setShowAssistiveTouch={setShowAssistiveTouch}
        />
      )}
    </>
  );
}

export default AssistiveTouch;
