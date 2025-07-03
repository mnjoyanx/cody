import React from "react";

interface ChatLayoutProps {
  title?: string;
  subtitle?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  messages?: React.ReactNode;
}

export function ChatLayout({
  title = "Enter Your Project Requirements",
  subtitle = "Describe the user stories as clear as you can. This will help AI to generate more correct table's schemas for you.",
  header,
  footer,
  children,
  messages,
}: ChatLayoutProps) {
  return (
    <div className="flex flex-col h-full w-full chat-bg font-dm-sans">
      {/* Header */}
      {header}

      {/* Main content */}
      <main className="flex-1 flex flex-col px-4 py-12">
        {/* Title and Subtitle */}
        <div className="text-center mb-12 max-w-4xl mx-auto mt-24">
          <h1 className="text-5xl font-bold text-[hsl(var(--chat-primary))] mb-6 font-dm-sans leading-tight">
            {title}
          </h1>
          <p className="text-gray-500 text-lg font-dm-sans leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Messages Area - appears above input when messages exist */}
        {messages && (
          <div className="flex-1 flex flex-col justify-end mb-8">
            {messages}
          </div>
        )}

        {/* Chat Input Area - always at bottom */}
        <div className="w-full flex flex-col items-center">{children}</div>
      </main>

      {/* Footer */}
      {footer}
    </div>
  );
}

interface ChatFooterProps {
  text?: string;
}

export function ChatFooter({
  text = "© 2025 Codifyer. All Rights Reserved.",
}: ChatFooterProps) {
  return (
    <footer className="text-center text-[hsl(var(--chat-muted-foreground))] py-4 text-sm font-dm-sans">
      {text}
    </footer>
  );
}
