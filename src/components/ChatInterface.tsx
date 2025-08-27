import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Sparkles, Bot } from "lucide-react";
import { ChatMessage } from "./ChatMessage";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    text: "Hello! I'm here to help you learn more about our mental health services. How can I assist you today?",
    isBot: true,
    timestamp: new Date()
  }
];

const QUICK_RESPONSES = [
  "I'm looking for therapy options",
  "What conditions do you treat?",
  "How do I schedule an appointment?",
  "What are your treatment approaches?"
];

const BOT_RESPONSES: Record<string, string> = {
  "therapy": "We offer various therapy approaches including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and mindfulness-based interventions. Would you like to know more about any specific approach?",
  "conditions": "We provide comprehensive treatment for anxiety, depression, PTSD, bipolar disorder, ADHD, eating disorders, and relationship issues. Our team specializes in evidence-based treatments tailored to your individual needs.",
  "appointment": "To schedule an appointment, you can call us at (555) 123-4567 or use our online booking system. We typically have availability within 1-2 weeks and offer both in-person and virtual sessions.",
  "treatment": "Our treatment approaches are evidence-based and personalized. We use CBT, DBT, EMDR, mindfulness techniques, and family therapy. Each treatment plan is carefully designed to meet your specific goals and needs.",
  "default": "I understand you're looking for support. Our compassionate team is here to help. Would you like to speak with someone directly or learn more about our services? You can also call us at (555) 123-4567."
};

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("therapy") || lowerMessage.includes("treatment")) {
      return BOT_RESPONSES.therapy;
    } else if (lowerMessage.includes("condition") || lowerMessage.includes("disorder") || lowerMessage.includes("treat")) {
      return BOT_RESPONSES.conditions;
    } else if (lowerMessage.includes("appointment") || lowerMessage.includes("schedule") || lowerMessage.includes("book")) {
      return BOT_RESPONSES.appointment;
    } else if (lowerMessage.includes("approach") || lowerMessage.includes("method")) {
      return BOT_RESPONSES.treatment;
    } else {
      return BOT_RESPONSES.default;
    }
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(text),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickResponse = (response: string) => {
    handleSendMessage(response);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-card to-accent/10 rounded-3xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-primary-light p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="text-white" size={24} />
          <h3 className="text-xl font-semibold text-white">Mental Health Support</h3>
        </div>
        <p className="text-primary-foreground/90 text-sm">
          Get personalized information about our psychiatric services
        </p>
      </div>

      <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-transparent to-muted/20">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message.text}
            isBot={message.isBot}
            timestamp={message.timestamp}
          />
        ))}
        
        {isTyping && (
          <div className="flex gap-3 p-4 rounded-2xl bg-gradient-to-br from-card to-accent/20 ml-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
              <Bot size={16} className="text-white" />
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {messages.length === 1 && (
        <div className="px-6 pb-4">
          <p className="text-sm text-muted-foreground mb-3">Quick questions:</p>
          <div className="flex flex-wrap gap-2">
            {QUICK_RESPONSES.map((response, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => handleQuickResponse(response)}
                className="text-xs hover:bg-primary hover:text-white transition-colors"
              >
                {response}
              </Button>
            ))}
          </div>
        </div>
      )}

      <div className="p-6 pt-0">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about our services..."
            className="flex-1 border-2 focus:border-primary/50 transition-colors"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage(inputValue);
              }
            }}
            disabled={isTyping}
          />
          <Button
            onClick={() => handleSendMessage(inputValue)}
            disabled={!inputValue.trim() || isTyping}
            className="bg-gradient-to-r from-primary to-primary-light hover:shadow-lg transition-all duration-300"
          >
            <Send size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};