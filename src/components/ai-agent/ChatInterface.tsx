
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Bot, X, Send } from "lucide-react";
import { Message } from './types';

interface ChatInterfaceProps {
  isOpen: boolean;
  messages: Message[];
  input: string;
  onClose: () => void;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  isOpen,
  messages,
  input,
  onClose,
  onInputChange,
  onSendMessage
}) => {
  if (!isOpen) return null;

  return (
    <Card className="w-96 h-[500px] shadow-2xl border-2 border-blue-200">
      <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Canvas camera={{ position: [0, 0, 2] }}>
              <ambientLight intensity={0.8} />
              <pointLight position={[5, 5, 5]} />
              <Sphere args={[0.5]} rotation={[0, 0, 0]}>
                <MeshDistortMaterial color="#FFFFFF" distort={0.2} speed={2} />
              </Sphere>
            </Canvas>
          </div>
          <div>
            <h3 className="font-semibold">AI Assistant</h3>
            <p className="text-xs opacity-90">Ask about this developer</p>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onClose}
          className="text-white hover:bg-white/20"
        >
          <X size={18} />
        </Button>
      </div>

      <CardContent className="p-0 h-[360px] flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] p-3 rounded-lg ${
                message.type === 'user' 
                  ? 'bg-blue-600 text-white ml-auto' 
                  : 'bg-gray-100 text-gray-900'
              }`}>
                {message.type === 'bot' && (
                  <div className="flex items-center space-x-2 mb-1">
                    <Bot size={16} className="text-blue-600" />
                    <span className="text-xs font-semibold text-blue-600">AI Assistant</span>
                  </div>
                )}
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => onInputChange(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && onSendMessage()}
              placeholder="Ask about skills, projects, or experience..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <Button 
              onClick={onSendMessage}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              size="sm"
            >
              <Send size={16} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatInterface;
