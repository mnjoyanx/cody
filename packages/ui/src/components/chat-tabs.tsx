import React from "react";

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface ChatTabsProps {
  tabs?: Tab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

const defaultTabs: Tab[] = [
  { id: "chats", label: "Chats" },
  { id: "archived", label: "Archived" },
  { id: "images", label: "Images" },
  { id: "exports", label: "Exports" },
];

export function ChatTabs({
  tabs = defaultTabs,
  activeTab = "chats",
  onTabChange,
}: ChatTabsProps) {
  return (
    <nav className="flex items-center justify-center gap-8 px-8 py-4 chat-card chat-border border-t">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange?.(tab.id)}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
            activeTab === tab.id
              ? "text-[hsl(var(--chat-primary))] bg-[hsl(var(--chat-accent))]"
              : "text-[hsl(var(--chat-muted-foreground))] hover:text-[hsl(var(--chat-card-foreground))] hover:bg-[hsl(var(--chat-accent))]"
          }`}
        >
          <div className="flex items-center gap-2">
            {tab.icon}
            <span>{tab.label}</span>
          </div>
        </button>
      ))}
    </nav>
  );
}

export { defaultTabs };
