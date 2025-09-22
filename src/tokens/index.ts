// Design tokens derived from the CSS custom properties
export const tokens = {
  colors: {
    veiraCoral: {
      base: 'var(--ds-color-veira-coral-base-default)',
      surface: 'var(--ds-color-veira-coral-surface-default)',
      text: 'var(--ds-color-veira-coral-text-default)',
    },
    veiraBlue: {
      base: 'var(--ds-color-veira-blue-base-default)',
      surface: 'var(--ds-color-veira-blue-surface-default)',
      text: 'var(--ds-color-veira-blue-text-default)',
    },
    veiraGreen: {
      base: 'var(--ds-color-veira-green-base-default)',
      surface: 'var(--ds-color-veira-green-surface-default)',
      text: 'var(--ds-color-veira-green-text-default)',
    },
    veiraYellow: {
      base: 'var(--ds-color-veira-yellow-base-default)',
      surface: 'var(--ds-color-veira-yellow-surface-default)',
      text: 'var(--ds-color-veira-yellow-text-default)',
    },
  },
  spacing: {
    xs: 'var(--ds-size-1)',
    sm: 'var(--ds-size-2)',
    md: 'var(--ds-size-4)',
    lg: 'var(--ds-size-6)',
    xl: 'var(--ds-size-8)',
    '2xl': 'var(--ds-size-12)',
  },
  borderRadius: {
    sm: 'var(--ds-border-radius-sm)',
    md: 'var(--ds-border-radius-md)',
    lg: 'var(--ds-border-radius-lg)',
    xl: 'var(--ds-border-radius-xl)',
    full: 'var(--ds-border-radius-full)',
  },
} as const;

export type VeiraTokens = typeof tokens;
