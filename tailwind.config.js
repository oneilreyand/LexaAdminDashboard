// tailwind.config.js
import defaultTheme from'tailwindcss/defaultTheme';

// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
  colors: {
    primary: '#7183e8',
    'sidebar-text': '#6f6b7d',
    'sidebar-bg': '#f7f7f9',
    'sub-menu-active': '#7183e8', // Warna ungu untuk sub-menu
    'custom-blue-500': '#7183e8',
    'custom-blue-600': '#6470c4',
    'dark-bg': '#1e1e2e',
    'dark-sidebar': '#252836',
    'dark-text': '#e0e0e0',
    // Snackbar colors
    'snackbar-success': '#71DD37',
    'snackbar-info': '#7183e8',
    'snackbar-warning': '#F59E0B',
    'snackbar-error': '#ff3e1d',
    'snackbar-question': '#8B5CF6',
  },

      boxShadow: {
        'custom-1': '0 0.125rem 0.25rem rgba(161, 171, 185, 0.075)',
      },
      fontFamily: {
        sans: ['Public Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  safelist: [
    // Button component dynamic classes
    'bg-primary', 'bg-primary/50', 'text-primary', 'border-primary', 'focus:ring-primary',
    'bg-blue-600', 'bg-blue-700', 'bg-blue-100', 'text-blue-600', 'border-blue-600', 'focus:ring-blue-600',
    'bg-gray-600', 'bg-gray-700', 'bg-gray-100', 'text-gray-600', 'border-gray-600', 'focus:ring-gray-600',
    'bg-green-600', 'bg-green-700', 'bg-green-100', 'text-green-600', 'border-green-600', 'focus:ring-green-600',
    'bg-red-600', 'bg-red-700', 'bg-red-100', 'text-red-600', 'border-red-600', 'focus:ring-red-600',
    'bg-yellow-500', 'bg-yellow-600', 'bg-yellow-100', 'text-yellow-600', 'border-yellow-500', 'focus:ring-yellow-500',
    'bg-cyan-500', 'bg-cyan-600', 'bg-cyan-100', 'text-cyan-600', 'border-cyan-500', 'focus:ring-cyan-500',
    'bg-gray-900', 'bg-black', 'bg-gray-200', 'text-gray-900', 'border-gray-900', 'focus:ring-gray-900',
    // Disabled states
    'bg-blue-600/50', 'text-white/70', 'bg-gray-600/50', 'text-gray-600/50', 'border-blue-600/50', 'border-gray-600/50',
    'bg-green-600/50', 'border-green-600/50', 'bg-red-600/50', 'border-red-600/50',
    'bg-yellow-500/50', 'border-yellow-500/50', 'bg-cyan-500/50', 'border-cyan-500/50',
    'bg-gray-900/50', 'border-gray-900/50',
    // Overlay classes
    'after:bg-blue-700', 'after:bg-gray-700', 'after:bg-green-700', 'after:bg-red-700',
    'after:bg-yellow-600', 'after:bg-cyan-600', 'after:bg-black',
  ],
}
