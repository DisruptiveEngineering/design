export * from '@digdir/designsystemet-react';

// Design tokens derived from the CSS custom properties
const tokens = {
    colors: {
        // Base Veira colors
        veiraTeal: {
            base: 'var(--ds-color-veira-teal-base-default)',
            surface: 'var(--ds-color-veira-teal-surface-default)',
            text: 'var(--ds-color-veira-teal-text-default)',
        },
        neutral: {
            base: 'var(--ds-color-neutral-base-default)',
            surface: 'var(--ds-color-neutral-surface-default)',
            text: 'var(--ds-color-neutral-text-default)',
        },
        // Veira brand colors with intensity variants
        veiraYellow100: {
            base: 'var(--ds-color-veira-yellow-100-base-default)',
            surface: 'var(--ds-color-veira-yellow-100-surface-default)',
            text: 'var(--ds-color-veira-yellow-100-text-default)',
        },
        veiraYellow50: {
            base: 'var(--ds-color-veira-yellow-50-base-default)',
            surface: 'var(--ds-color-veira-yellow-50-surface-default)',
            text: 'var(--ds-color-veira-yellow-50-text-default)',
        },
        veiraYellow25: {
            base: 'var(--ds-color-veira-yellow-25-base-default)',
            surface: 'var(--ds-color-veira-yellow-25-surface-default)',
            text: 'var(--ds-color-veira-yellow-25-text-default)',
        },
        veiraYellow10: {
            base: 'var(--ds-color-veira-yellow-10-base-default)',
            surface: 'var(--ds-color-veira-yellow-10-surface-default)',
            text: 'var(--ds-color-veira-yellow-10-text-default)',
        },
        veiraCoral100: {
            base: 'var(--ds-color-veira-coral-100-base-default)',
            surface: 'var(--ds-color-veira-coral-100-surface-default)',
            text: 'var(--ds-color-veira-coral-100-text-default)',
        },
        veiraCoral50: {
            base: 'var(--ds-color-veira-coral-50-base-default)',
            surface: 'var(--ds-color-veira-coral-50-surface-default)',
            text: 'var(--ds-color-veira-coral-50-text-default)',
        },
        veiraCoral25: {
            base: 'var(--ds-color-veira-coral-25-base-default)',
            surface: 'var(--ds-color-veira-coral-25-surface-default)',
            text: 'var(--ds-color-veira-coral-25-text-default)',
        },
        veiraCoral10: {
            base: 'var(--ds-color-veira-coral-10-base-default)',
            surface: 'var(--ds-color-veira-coral-10-surface-default)',
            text: 'var(--ds-color-veira-coral-10-text-default)',
        },
        veiraBlue100: {
            base: 'var(--ds-color-veira-blue-100-base-default)',
            surface: 'var(--ds-color-veira-blue-100-surface-default)',
            text: 'var(--ds-color-veira-blue-100-text-default)',
        },
        veiraBlue50: {
            base: 'var(--ds-color-veira-blue-50-base-default)',
            surface: 'var(--ds-color-veira-blue-50-surface-default)',
            text: 'var(--ds-color-veira-blue-50-text-default)',
        },
        veiraBlue25: {
            base: 'var(--ds-color-veira-blue-25-base-default)',
            surface: 'var(--ds-color-veira-blue-25-surface-default)',
            text: 'var(--ds-color-veira-blue-25-text-default)',
        },
        veiraBlue10: {
            base: 'var(--ds-color-veira-blue-10-base-default)',
            surface: 'var(--ds-color-veira-blue-10-surface-default)',
            text: 'var(--ds-color-veira-blue-10-text-default)',
        },
        veiraGreen100: {
            base: 'var(--ds-color-veira-green-100-base-default)',
            surface: 'var(--ds-color-veira-green-100-surface-default)',
            text: 'var(--ds-color-veira-green-100-text-default)',
        },
        veiraGreen50: {
            base: 'var(--ds-color-veira-green-50-base-default)',
            surface: 'var(--ds-color-veira-green-50-surface-default)',
            text: 'var(--ds-color-veira-green-50-text-default)',
        },
        veiraGreen25: {
            base: 'var(--ds-color-veira-green-25-base-default)',
            surface: 'var(--ds-color-veira-green-25-surface-default)',
            text: 'var(--ds-color-veira-green-25-text-default)',
        },
        veiraGreen10: {
            base: 'var(--ds-color-veira-green-10-base-default)',
            surface: 'var(--ds-color-veira-green-10-surface-default)',
            text: 'var(--ds-color-veira-green-10-text-default)',
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
};

// Utility functions for working with design tokens
const getVeiraColor = (color) => {
    return tokens.colors[color];
};
const getSpacing = (size) => {
    return tokens.spacing[size];
};
const getBorderRadius = (size) => {
    return tokens.borderRadius[size];
};
// CSS-in-JS style helpers
const createVeiraStyles = (styles) => styles;
// Theme utilities
const applyVeiraTheme = (element, theme = 'light') => {
    element.setAttribute('data-color-scheme', theme);
};
const applyVeiraColorScheme = (element, color) => {
    element.setAttribute('data-color', color);
};

export { applyVeiraColorScheme, applyVeiraTheme, createVeiraStyles, getBorderRadius, getSpacing, getVeiraColor, tokens };
//# sourceMappingURL=index.esm.js.map
