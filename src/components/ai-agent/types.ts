
export interface Message {
  type: 'user' | 'bot';
  content: string;
}

export interface PredefinedResponses {
  skills: string;
  projects: string;
  experience: string;
  contact: string;
}
