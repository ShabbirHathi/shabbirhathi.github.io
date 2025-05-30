
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Text, Float, MeshDistortMaterial } from '@react-three/drei';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, MessageCircle, X, Send } from "lucide-react";
import * as THREE from 'three';

// 3D AI Brain Component
const AIBrain = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.scale.setScalar(hovered ? 1.1 : 1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere
        ref={meshRef}
        args={[1, 64, 64]}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color="#3B82F6"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
      <Text
        position={[0, -2, 0]}
        fontSize={0.3}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
      >
        AI Agent
      </Text>
    </Float>
  );
};

// Simplified Floating Particles
const Particles = () => {
  const particlesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.005;
    }
  });

  // Pre-generate positions to avoid recalculation
  const particlePositions = React.useMemo(() => {
    return Array.from({ length: 30 }, () => [
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8
    ] as [number, number, number]);
  }, []);

  return (
    <group ref={particlesRef}>
      {particlePositions.map((position, i) => (
        <mesh key={i} position={position}>
          <sphereGeometry args={[0.02, 8, 6]} />
          <meshStandardMaterial 
            color="#8B5CF6" 
            opacity={0.6} 
            transparent 
          />
        </mesh>
      ))}
    </group>
  );
};

const AIAgent3D = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hi! I\'m your AI assistant. Ask me about this developer\'s skills, projects, or experience!' }
  ]);
  const [input, setInput] = useState('');

  const predefinedResponses = {
    skills: "This developer specializes in AI/ML engineering, backend development with Python, and building intelligent systems using OpenAI, LangChain, and various ML frameworks.",
    projects: "Key projects include an AI-powered LMS with auto-generated exams, smart event planning agents, document embedding systems, and payment integrations.",
    experience: "With 5+ years of experience, they've delivered 50+ projects with expertise in Django, FastAPI, vector databases, and cloud deployment.",
    contact: "You can reach out through the contact form below or connect via LinkedIn and GitHub links in the hero section."
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { type: 'user', content: input }]);
    
    // Simple AI response logic
    setTimeout(() => {
      let response = "That's an interesting question! This developer has extensive experience in AI/ML development.";
      
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('skill') || lowerInput.includes('technology')) {
        response = predefinedResponses.skills;
      } else if (lowerInput.includes('project') || lowerInput.includes('work')) {
        response = predefinedResponses.projects;
      } else if (lowerInput.includes('experience') || lowerInput.includes('background')) {
        response = predefinedResponses.experience;
      } else if (lowerInput.includes('contact') || lowerInput.includes('hire')) {
        response = predefinedResponses.contact;
      }
      
      setMessages(prev => [...prev, { type: 'bot', content: response }]);
    }, 1000);

    setInput('');
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
      {isOpen && (
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
              onClick={() => setIsOpen(false)}
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
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about skills, projects, or experience..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <Button 
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  size="sm"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Action Buttons */}
      {isOpen && (
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            { label: "Skills", query: "What are the key skills?" },
            { label: "Projects", query: "Tell me about the projects" },
            { label: "Experience", query: "What's the experience level?" }
          ].map((action) => (
            <Button
              key={action.label}
              variant="outline"
              size="sm"
              onClick={() => {
                setInput(action.query);
                setTimeout(() => handleSendMessage(), 100);
              }}
              className="text-xs border-blue-200 hover:bg-blue-50"
            >
              {action.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AIAgent3D;
