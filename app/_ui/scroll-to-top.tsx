"use client";
import React from "react";
import { TbHandFinger } from "react-icons/tb";

function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo(0, 0)}
      className="text-xs text-tBaseSecondary"
    >
      Scroll to top{" "}
      <TbHandFinger size={13} title="Scroll to top" className="inline-block" />
    </button>
  );
}

export default ScrollToTop;
