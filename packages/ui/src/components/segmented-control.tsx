import React from "react";
import { cn } from "../lib/utils";

export interface SegmentedControlOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

export interface SegmentedControlProps {
  options: SegmentedControlOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function SegmentedControl({
  options,
  value,
  onChange,
  className,
}: SegmentedControlProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center bg-gray-800/90 backdrop-blur-sm rounded-lg p-1 gap-1",
        className
      )}
    >
      {options.map((option, index) => {
        const isActive = value === option.id;
        const isFirst = index === 0;
        const isLast = index === options.length - 1;

        return (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 text-sm font-medium transition-all duration-200 relative",
              isFirst && "rounded-l-md",
              isLast && "rounded-r-md",
              isActive
                ? "bg-blue-600 text-white shadow-sm"
                : "text-gray-400 hover:text-gray-200"
            )}
          >
            {option.icon && (
              <span className="w-4 h-4 flex items-center justify-center">
                {option.icon}
              </span>
            )}
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
