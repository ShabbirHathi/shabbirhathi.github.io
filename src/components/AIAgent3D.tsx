
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AIBrain from './ai-agent/AIBrain';
import Particles from './ai-agent/Particles';
import ChatInterface from './ai-agent/ChatInterface';
import QuickActions from './ai-agent/QuickActions';
import { generateAIResponse } from './ai-agent/utils';
import { Message } from './ai-agent/types';

const AIAgent3D = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', content: 'Hi! I\'m your AI assistant. Ask me about this developer\'s skills, projects, or experience!' }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { type: 'user', content: input }]);
    
    // Simple AI response logic
    setTimeout(() => {
      const response = generateAIResponse(input);
      setMessages(prev => [...prev, { type: 'bot', content: response }]);
    }, 1000);

    setInput('');
  };

  const handleQuickAction = (query: string) => {
    setInput(query);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* 3D AI Agent Button */}
      {!isOpen && (
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden shadow-2xl cursor-pointer" onClick={() => setIsOpen(true)}>
            <Canvas camera={{ position: [0, 0, 3] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <AIBrain />
              <Particles />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
            </Canvas>
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse border-2 border-white" />
        </div>
      )}

      {/* Chat Interface */}
      <ChatInterface
        isOpen={isOpen}
        messages={messages}
        input={input}
        onClose={() => setIsOpen(false)}
        onInputChange={setInput}
        onSendMessage={handleSendMessage}
      />

      {/* Quick Action Buttons */}
      <QuickActions
        isOpen={isOpen}
        onActionClick={handleQuickAction}
      />
    </div>
  );
};

export default AIAgent3D;
