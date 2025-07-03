import { useState } from "react";
import { Home, FileText, Layers, Settings } from "lucide-react";

export const Sidebar: React.FC = () => {
  const [activeNav, setActiveNav] = useState("templates");

  return (
    <div className="fixed top-0 left-0 w-5 h-screen z-[1000] pointer-events-none group">
      {/* Hover trigger area */}
      <div className="absolute top-0 left-0 w-5 h-full z-[4] pointer-events-auto" />

      {/* Sidebar panel */}
      <div className="flex flex-col w-80 h-[calc(100vh-32px)] bg-white dark:bg-slate-800 text-gray-700 dark:text-white transition-all duration-300 ease-in-out overflow-y-auto overflow-x-hidden absolute top-4 -left-2.5 z-[5] transform -translate-x-full group-hover:translate-x-4 rounded-2xl border border-gray-200 dark:border-gray-600 pointer-events-auto font-['DM_Sans'] shadow-lg">
        {/* Header with Codifyer Logo */}
        <div className="flex items-center p-6 border-b border-gray-200 dark:border-gray-600 rounded-t-2xl transition-colors duration-300">
          <div className="flex items-center gap-3 font-semibold text-2xl text-[#1A9497]">
            <div className="flex items-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M8 8L16 4L24 8L20 12L16 8L12 12L8 8Z" fill="#1A9497" />
                <path
                  d="M8 24L16 28L24 24L20 20L16 24L12 20L8 24Z"
                  fill="#1A9497"
                />
                <path
                  d="M4 16L8 8L12 12L8 16L12 20L8 24L4 16Z"
                  fill="#1A9497"
                />
                <path
                  d="M28 16L24 8L20 12L24 16L20 20L24 24L28 16Z"
                  fill="#1A9497"
                />
              </svg>
            </div>
            <span>odifyer</span>
          </div>
        </div>

        {/* Templates Section */}
        <div className="p-4 px-6">
          <div className="flex items-center gap-3 p-3 px-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl mb-2 transition-colors duration-200 cursor-pointer">
            <div className="flex items-center text-gray-600 dark:text-white min-w-[20px] transition-colors duration-300">
              <Home size={20} />
            </div>
            <div className="flex items-center justify-between flex-1">
              <span className="text-sm font-medium text-gray-700 dark:text-white transition-colors duration-300">
                Templates
              </span>
              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md text-xs font-semibold">
                FREE
              </span>
            </div>
          </div>
        </div>

        {/* Basic Projects */}
        <div className="p-4 px-6">
          <h3 className="text-base font-semibold text-gray-700 dark:text-white mb-4 transition-colors duration-300">
            Basic Projects
          </h3>

          <div className="flex items-center gap-3 p-3 px-4 cursor-pointer rounded-lg transition-colors duration-200 mb-1 hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="flex items-center text-gray-600 dark:text-white min-w-[20px] transition-colors duration-300">
              <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                <div className="w-1.5 h-1.5 bg-gray-600 dark:bg-white rounded-sm transition-colors duration-300"></div>
                <div className="w-1.5 h-1.5 bg-gray-600 dark:bg-white rounded-sm transition-colors duration-300"></div>
                <div className="w-1.5 h-1.5 bg-gray-600 dark:bg-white rounded-sm transition-colors duration-300"></div>
                <div className="w-1.5 h-1.5 bg-gray-600 dark:bg-white rounded-sm transition-colors duration-300"></div>
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-white transition-colors duration-300">
              ToDo App
            </span>
          </div>

          <div className="flex items-center gap-3 p-3 px-4 cursor-pointer rounded-lg transition-colors duration-200 mb-1 hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="flex items-center text-gray-600 dark:text-white min-w-[20px] transition-colors duration-300">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-white transition-colors duration-300">
              Telegram Bot
            </span>
          </div>
        </div>

        {/* Open source Projects */}
        <div className="p-4 px-6">
          <h3 className="text-base font-semibold text-gray-700 dark:text-white mb-4 transition-colors duration-300">
            Open source Projects
          </h3>

          <div className="flex items-center gap-3 p-3 px-4 cursor-pointer rounded-lg transition-colors duration-200 mb-1 hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="flex items-center text-gray-600 dark:text-white min-w-[20px] transition-colors duration-300">
              <Layers size={20} />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-white transition-colors duration-300">
              Project 1
            </span>
          </div>

          <div className="flex items-center gap-3 p-3 px-4 cursor-pointer rounded-lg transition-colors duration-200 mb-1 hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="flex items-center text-gray-600 dark:text-white min-w-[20px] transition-colors duration-300">
              <Layers size={20} />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-white transition-colors duration-300">
              Project 2
            </span>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* PRO Section */}
        <div className="p-6 mt-auto pb-8">
          <div
            className="bg-gradient-to-r from-[#F7C364] via-[#F7C364] to-[#FFF9EE] rounded-2xl p-5 text-center text-gray-700"
            style={{
              background:
                "linear-gradient(15deg, #F7C364 26.3%, #FFF9EE 86.4%)",
            }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="#1A9497" />
                  <circle cx="15" cy="16" r="2" fill="white" />
                  <circle cx="25" cy="16" r="2" fill="white" />
                  <path
                    d="M14 24h12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <h4 className="text-lg font-bold mb-2 text-gray-700">
              Go unlimited with PRO
            </h4>
            <p className="text-sm leading-relaxed mb-5 text-gray-700">
              Get your AI Project to another level and start doing more with
              Codifyer PRO!
            </p>
            <button className="bg-[#1A9497] text-white border-none py-3 px-5 rounded-xl text-sm font-semibold cursor-pointer transition-colors duration-200 w-full hover:bg-[#157a7d]">
              Get Started With PRO →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
