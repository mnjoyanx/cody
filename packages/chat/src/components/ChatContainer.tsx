import React, { useRef, useEffect, useState } from "react";
// import { Send } from 'lucide-react';
import {
  ChatHeader,
  ChatLayout,
  ChatFooter,
  ChatInput,
  ChatTabs,
  defaultTabs,
  ScrollIndicator,
} from "@repo/ui";

export interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}

export interface ChatContainerProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  showTabs?: boolean;
  showScrollIndicator?: boolean;
  showSuggestions?: boolean;
  onLogin?: () => void;
  onEnhance?: (message: string) => void;
}

export const ChatContainer: React.FC<ChatContainerProps> = ({
  messages,
  onSendMessage,
  title = "Enter Your Project Requirements",
  subtitle = "Describe the user stories as clear as you can. This will help AI to generate more correct table's schemas for you.",
  showHeader = true,
  showFooter = true,
  showTabs = false,
  showScrollIndicator = true,
  showSuggestions = true,
  onLogin,
  onEnhance,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("chats");

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleLogin = () => {
    if (onLogin) {
      onLogin();
    } else {
      console.log("Login clicked");
    }
  };

  const messagesComponent =
    messages.length > 0 ? (
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 max-h-96 overflow-y-auto ">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`rounded-2xl px-5 py-4 max-w-[70%] text-base font-dm-sans shadow-lg border-2 ${
                    msg.isUser
                      ? "bg-[hsl(var(--chat-primary))] text-white border-[hsl(var(--chat-primary))]/20 shadow-[hsl(var(--chat-primary))]/20"
                      : "bg-white text-gray-900 border-gray-300 shadow-gray-200/50"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>
    ) : null;

  return (
    <>
      {showScrollIndicator && <ScrollIndicator />}
      <ChatLayout
        title={title}
        subtitle={subtitle}
        messages={messagesComponent}
        // header={showHeader ? <ChatHeader onLogin={handleLogin} /> : undefined}
        footer={showFooter ? <ChatFooter /> : undefined}
      >
        {/* Main Input Area - matches Figma design */}
        <ChatInput
          onSend={onSendMessage}
          showSuggestions={showSuggestions}
          onEnhance={onEnhance}
        />

        {/* Tabs - only show if enabled */}
        {showTabs && (
          <div className="w-full max-w-4xl mx-auto mt-8">
            <ChatTabs
              tabs={defaultTabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
        )}
      </ChatLayout>
    </>
  );
};
