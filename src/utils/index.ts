import { tokens } from '../tokens';

// Utility functions for working with design tokens
export const getVeiraColor = (color: keyof typeof tokens.colors) => {
  return tokens.colors[color];
};

export const getSpacing = (size: keyof typeof tokens.spacing) => {
  return tokens.spacing[size];
};

export const getBorderRadius = (size: keyof typeof tokens.borderRadius) => {
  return tokens.borderRadius[size];
};

// CSS-in-JS style helpers
export const createVeiraStyles = (styles: Record<string, any>) => styles;

// Theme utilities
export const applyVeiraTheme = (element: HTMLElement, theme: 'light' | 'dark' = 'light') => {
  element.setAttribute('data-color-scheme', theme);
};

export const applyVeiraColorScheme = (element: HTMLElement, color: string) => {
  element.setAttribute('data-color', color);
};
