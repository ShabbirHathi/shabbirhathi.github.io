
// Design System Configuration
export const designSystem = {
  // Typography Scale
  typography: {
    headings: {
      h1: "text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight",
      h2: "text-4xl md:text-5xl font-bold tracking-tight", 
      h3: "text-2xl md:text-3xl font-bold",
      h4: "text-xl md:text-2xl font-semibold"
    },
    body: {
      large: "text-lg md:text-xl leading-relaxed",
      normal: "text-base leading-relaxed",
      small: "text-sm leading-relaxed"
    }
  },

  // Color Palette
  colors: {
    gradients: {
      primary: "from-slate-700 to-slate-800",
      primaryHover: "from-slate-800 to-slate-900",
      secondary: "from-slate-600 to-slate-700",
      accent: "from-slate-500 to-slate-600",
      warning: "from-orange-500 to-red-600"
    },
    backgrounds: {
      light: "bg-gray-50",
      lightCard: "bg-white",
      dark: "bg-slate-800",
      darkCard: "bg-slate-700/50"
    }
  },

  // Spacing System
  spacing: {
    section: "py-20 md:py-24",
    container: "px-4 sm:px-6",
    cardPadding: "p-6 md:p-8",
    elementGap: "space-y-6 md:space-y-8"
  },

  // Component Patterns
  components: {
    card: "rounded-lg shadow-sm hover:shadow-md transition-all duration-200",
    button: "px-6 py-2.5 rounded-md font-medium transition-all duration-200",
    iconContainer: "p-3 rounded-lg shadow-sm",
    sectionHeader: "text-center mb-12 md:mb-16",
    cardPadding: "p-6 md:p-8"
  },

  // Animation Settings
  animations: {
    hover: "hover:translate-y-[-2px] transition-all duration-200",
    fadeIn: "opacity-0 animate-fade-in",
    reduced: "motion-reduce:animate-none motion-reduce:transition-none"
  }
};

// Helper function to create consistent section headers
export const createSectionHeader = (
  icon: React.ComponentType<any>,
  title: string,
  subtitle: string,
  gradient: string = designSystem.colors.gradients.primary
) => ({
  icon,
  title,
  subtitle,
  gradient
});
