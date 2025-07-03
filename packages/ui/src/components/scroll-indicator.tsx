import React from "react";

interface ScrollIndicatorProps {
  position?: "left" | "right";
  text?: string;
}

export function ScrollIndicator({
  position = "left",
  text = "Scroll",
}: ScrollIndicatorProps) {
  return (
    <div
      className={`fixed ${
        position === "left" ? "left-8" : "right-8"
      } bottom-8 z-50`}
    >
      <div className="flex items-center gap-2 text-gray-400 font-dm-sans">
        <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-sm">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 14l5-5 5 5z" />
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
        <span className="text-sm font-medium">{text}</span>
      </div>
    </div>
  );
}
