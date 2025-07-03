import React, { useState } from "react";
import { Input } from "../input";
import { Button } from "./button";
import { SparkleIcon } from "./sparkle-icon";

interface ChatInputProps {
  placeholder?: string;
  onSend: (message: string) => void;
  disabled?: boolean;
  showSuggestions?: boolean;
  onEnhance?: (message: string) => void;
}

export function ChatInput({
  placeholder = "What's in your mind?...",
  onSend,
  disabled = false,
  showSuggestions = true,
  onEnhance,
}: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim() || disabled) return;
    onSend(input.trim());
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
  };

  const handleEnhance = () => {
    if (!input.trim() || disabled || !onEnhance) return;
    onEnhance(input.trim());
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Main Input */}
      <div className="relative mb-6">
        {/* Enhancement Icon - Left side */}
        {/* {onEnhance && ( */}
        <Button
          onClick={handleEnhance}
          disabled={disabled || !input.trim()}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full p-0 flex items-center justify-center z-10 transition-all duration-300 bg-transparent hover:bg-gray-50 border-0 shadow-none cursor-pointer"
          title={
            input.trim()
              ? "Enhance prompt with AI"
              : "Type something to enhance"
          }
        >
          <SparkleIcon
            size={16}
            enabled={!!input.trim() && !disabled}
            className="transition-colors duration-300"
          />
        </Button>
        {/* )} */}

        <Input
          className="w-full h-16 rounded-full chat-border border pl-12 pr-16 py-4 text-lg font-dm-sans placeholder:text-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--chat-ring))] focus:border-transparent bg-white shadow-sm"
          placeholder={placeholder}
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          onKeyDown={handleKeyDown}
          disabled={disabled}
        />
        <Button
          onClick={handleSend}
          disabled={disabled || !input.trim()}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full chat-primary hover:chat-primary-hover font-semibold shadow disabled:opacity-50 disabled:cursor-not-allowed p-0 flex items-center justify-center"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </Button>
      </div>
      {/* Suggestion Buttons */}
      {showSuggestions && (
        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={() => handleSuggestionClick("Generate SQL schema for ")}
            className="px-6 py-3 rounded-full bg-white border-2 border-gray-300 text-gray-700 font-dm-sans font-medium hover:bg-gray-50 hover:border-gray-400 shadow-md flex items-center gap-2 transition-all"
          >
            <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-gray-600">SQL</span>
            </div>
            SQL
          </Button>
          <Button
            onClick={() => handleSuggestionClick("Generate UML diagram for ")}
            className="px-6 py-3 rounded-full bg-white border-2 border-gray-300 text-gray-700 font-dm-sans font-medium hover:bg-gray-50 hover:border-gray-400 shadow-md flex items-center gap-2 transition-all"
          >
            <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-gray-600">UML</span>
            </div>
            UML
          </Button>
        </div>
      )}
    </div>
  );
}
