
import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  data: any[] | null;
  isDataLoaded: boolean;
}

export function ChatInterface({ data, isDataLoaded }: ChatInterfaceProps) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDataLoaded && data && !messages.length) {
      // Add a welcome message when data is first loaded
      setMessages([
        {
          role: "assistant",
          content: "I've analyzed your business data. What would you like to know?",
          timestamp: new Date()
        }
      ]);
    }
  }, [isDataLoaded, data, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    if (!isDataLoaded || !data) {
      toast.error("Please upload data first before asking questions");
      return;
    }
    
    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    try {
      // In a real application, you would call the Claude API here
      // For now, we'll simulate a response
      const response = await simulateAIResponse(input, data);
      
      const assistantMessage: Message = {
        role: "assistant",
        content: response,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      toast.error("Failed to get a response. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // This function simulates an AI response - in a real app, you'd call the Claude API
  const simulateAIResponse = async (question: string, data: any[]): Promise<string> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const lowercaseQuestion = question.toLowerCase();
    
    if (lowercaseQuestion.includes("improve")) {
      return "Based on your data, you could improve your business by focusing on customer retention. Your repeat customer rate is only 22%, which is below industry average. Consider implementing a loyalty program or follow-up communications.";
    }
    
    if (lowercaseQuestion.includes("best sales") && lowercaseQuestion.includes("december")) {
      return "Your best sales in December were in the 'Dinner Specials' category, totaling $18,450. This was 32% higher than November, likely due to holiday promotions.";
    }
    
    if (lowercaseQuestion.includes("sales person") && lowercaseQuestion.includes("best") && lowercaseQuestion.includes("last year")) {
      return "Maria Johnson was your top salesperson last year with $145,700 in total sales, representing 28% of your annual revenue. She excelled particularly in corporate event bookings.";
    }
    
    return "I've analyzed your data and found that your overall business performance shows a positive trend with a 12% growth in revenue compared to the previous period. Would you like more specific insights about a particular aspect of your business?";
  };

  return (
    <div className="flex flex-col h-[500px] border rounded-lg">
      <div className="flex items-center justify-between p-3 border-b bg-muted/30">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-purple-500" />
          <h3 className="font-medium">Business Data Assistant</h3>
        </div>
        {isDataLoaded ? (
          <div className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
            Data Loaded
          </div>
        ) : (
          <div className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
            No Data Loaded
          </div>
        )}
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-60 text-muted-foreground">
              <Bot className="w-12 h-12 mb-2" />
              <p>Upload your data to start asking questions</p>
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex gap-3 max-w-[80%] ${
                    message.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-shrink-0">
                    {message.role === "user" ? (
                      <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full">
                        <User className="w-4 h-4 text-purple-600" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                        <Bot className="w-4 h-4 text-blue-600" />
                      </div>
                    )}
                  </div>
                  <div
                    className={`p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-purple-500 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <p className="mt-1 text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                  <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                </div>
              </div>
              <div className="p-3 bg-gray-100 rounded-lg">
                <p className="text-sm">Thinking...</p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>
      
      <form onSubmit={handleSubmit} className="flex gap-2 p-3 border-t">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about your business data..."
          disabled={isLoading || !isDataLoaded}
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading || !isDataLoaded || !input.trim()}>
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        </Button>
      </form>
    </div>
  );
}
