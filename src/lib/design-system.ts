
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
      primary: "from-blue-600 to-purple-600",
      primaryHover: "from-blue-700 to-purple-700",
      secondary: "from-blue-500 to-purple-500",
      accent: "from-emerald-500 to-emerald-600",
      warning: "from-orange-500 to-red-600"
    },
    backgrounds: {
      light: "bg-gray-50",
      lightCard: "bg-white",
      dark: "bg-slate-900",
      darkCard: "bg-slate-800/60"
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
    card: "rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300",
    button: "px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105",
    iconContainer: "p-4 rounded-2xl shadow-lg",
    sectionHeader: "text-center mb-16 md:mb-20",
    cardPadding: "p-6 md:p-8"
  },

  // Animation Settings
  animations: {
    hover: "hover:scale-105 transition-all duration-300",
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
