
import { PredefinedResponses } from './types';

export const predefinedResponses: PredefinedResponses = {
  skills: "This developer specializes in AI/ML engineering, backend development with Python, and building intelligent systems using OpenAI, LangChain, and various ML frameworks.",
  projects: "Key projects include an AI-powered LMS with auto-generated exams, smart event planning agents, document embedding systems, and payment integrations.",
  experience: "With 5+ years of experience, they've delivered 50+ projects with expertise in Django, FastAPI, vector databases, and cloud deployment.",
  contact: "You can reach out through the contact form below or connect via LinkedIn and GitHub links in the hero section."
};

export const generateAIResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes('skill') || lowerInput.includes('technology')) {
    return predefinedResponses.skills;
  } else if (lowerInput.includes('project') || lowerInput.includes('work')) {
    return predefinedResponses.projects;
  } else if (lowerInput.includes('experience') || lowerInput.includes('background')) {
    return predefinedResponses.experience;
  } else if (lowerInput.includes('contact') || lowerInput.includes('hire')) {
    return predefinedResponses.contact;
  }
  
  return "That's an interesting question! This developer has extensive experience in AI/ML development.";
};
