
import React from 'react';
import { Button } from "@/components/ui/button";

interface QuickActionsProps {
  isOpen: boolean;
  onActionClick: (query: string) => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ isOpen, onActionClick }) => {
  if (!isOpen) return null;

  const actions = [
    { label: "Skills", query: "What are the key skills?" },
    { label: "Projects", query: "Tell me about the projects" },
    { label: "Experience", query: "What's the experience level?" }
  ];

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {actions.map((action) => (
        <Button
          key={action.label}
          variant="outline"
          size="sm"
          onClick={() => onActionClick(action.query)}
          className="text-xs border-blue-200 hover:bg-blue-50"
        >
          {action.label}
        </Button>
      ))}
    </div>
  );
};

export default QuickActions;
