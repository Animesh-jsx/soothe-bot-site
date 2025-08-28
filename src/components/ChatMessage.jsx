import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

export const ChatMessage = ({ message, isBot, timestamp }) => {
  return (
    <div
      className={cn(
        "flex gap-3 p-4 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md",
        isBot
          ? "bg-gradient-to-br from-card to-accent/20 ml-4"
          : "bg-primary/5 mr-4 flex-row-reverse"
      )}
    >
      <div
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
          isBot
            ? "bg-gradient-to-br from-primary to-primary-light text-white"
            : "bg-muted text-muted-foreground"
        )}
      >
        {isBot ? <Bot size={16} /> : <User size={16} />}
      </div>
      <div className="flex-1 space-y-1">
        <p className="text-sm text-foreground leading-relaxed">{message}</p>
        {timestamp && (
          <p className="text-xs text-muted-foreground">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        )}
      </div>
    </div>
  );
};