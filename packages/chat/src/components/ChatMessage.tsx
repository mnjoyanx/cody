import React from 'react';
import { User, Bot } from 'lucide-react';

export interface ChatMessageProps {
  content: string;
  isUser: boolean;
  timestamp?: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  content,
  isUser,
  timestamp,
}) => {
  return (
    <div 
      className={`w-full border-b border-white/10 text-gray-100 ${isUser ? 'bg-[#343541]' : 'bg-[#444654]'}`}
    >
      <div className="max-w-3xl mx-auto p-4 flex gap-4 md:gap-6 md:py-6 lg:px-0">
        <div className={`w-[30px] h-[30px] flex items-center justify-center mr-4 flex-shrink-0 ${isUser ? 'bg-blue-500 rounded-full' : 'bg-[#10a37f] rounded-sm'}`}>
          {isUser ? (
            <User className="h-4 w-4 text-white" />
          ) : (
            <Bot className="h-4 w-4 text-white" />
          )}
        </div>
        <div className="flex-1 flex flex-col gap-1 md:gap-3">
          <div className="text-sm whitespace-pre-wrap break-words">
            {content}
          </div>
          {timestamp && (
            <div className="mt-2 text-xs text-gray-400">
              {timestamp}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
