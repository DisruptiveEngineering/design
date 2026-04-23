export * from '@digdir/designsystemet-react';

declare const tokens: {
    readonly colors: {
        readonly veiraTeal: {
            readonly base: "var(--ds-color-veira-teal-base-default)";
            readonly surface: "var(--ds-color-veira-teal-surface-default)";
            readonly text: "var(--ds-color-veira-teal-text-default)";
        };
        readonly neutral: {
            readonly base: "var(--ds-color-neutral-base-default)";
            readonly surface: "var(--ds-color-neutral-surface-default)";
            readonly text: "var(--ds-color-neutral-text-default)";
        };
        readonly veiraYellow100: {
            readonly base: "var(--ds-color-veira-yellow-100-base-default)";
            readonly surface: "var(--ds-color-veira-yellow-100-surface-default)";
            readonly text: "var(--ds-color-veira-yellow-100-text-default)";
        };
        readonly veiraYellow50: {
            readonly base: "var(--ds-color-veira-yellow-50-base-default)";
            readonly surface: "var(--ds-color-veira-yellow-50-surface-default)";
            readonly text: "var(--ds-color-veira-yellow-50-text-default)";
        };
        readonly veiraYellow25: {
            readonly base: "var(--ds-color-veira-yellow-25-base-default)";
            readonly surface: "var(--ds-color-veira-yellow-25-surface-default)";
            readonly text: "var(--ds-color-veira-yellow-25-text-default)";
        };
        readonly veiraYellow10: {
            readonly base: "var(--ds-color-veira-yellow-10-base-default)";
            readonly surface: "var(--ds-color-veira-yellow-10-surface-default)";
            readonly text: "var(--ds-color-veira-yellow-10-text-default)";
        };
        readonly veiraCoral100: {
            readonly base: "var(--ds-color-veira-coral-100-base-default)";
            readonly surface: "var(--ds-color-veira-coral-100-surface-default)";
            readonly text: "var(--ds-color-veira-coral-100-text-default)";
        };
        readonly veiraCoral50: {
            readonly base: "var(--ds-color-veira-coral-50-base-default)";
            readonly surface: "var(--ds-color-veira-coral-50-surface-default)";
            readonly text: "var(--ds-color-veira-coral-50-text-default)";
        };
        readonly veiraCoral25: {
            readonly base: "var(--ds-color-veira-coral-25-base-default)";
            readonly surface: "var(--ds-color-veira-coral-25-surface-default)";
            readonly text: "var(--ds-color-veira-coral-25-text-default)";
        };
        readonly veiraCoral10: {
            readonly base: "var(--ds-color-veira-coral-10-base-default)";
            readonly surface: "var(--ds-color-veira-coral-10-surface-default)";
            readonly text: "var(--ds-color-veira-coral-10-text-default)";
        };
        readonly veiraBlue100: {
            readonly base: "var(--ds-color-veira-blue-100-base-default)";
            readonly surface: "var(--ds-color-veira-blue-100-surface-default)";
            readonly text: "var(--ds-color-veira-blue-100-text-default)";
        };
        readonly veiraBlue50: {
            readonly base: "var(--ds-color-veira-blue-50-base-default)";
            readonly surface: "var(--ds-color-veira-blue-50-surface-default)";
            readonly text: "var(--ds-color-veira-blue-50-text-default)";
        };
        readonly veiraBlue25: {
            readonly base: "var(--ds-color-veira-blue-25-base-default)";
            readonly surface: "var(--ds-color-veira-blue-25-surface-default)";
            readonly text: "var(--ds-color-veira-blue-25-text-default)";
        };
        readonly veiraBlue10: {
            readonly base: "var(--ds-color-veira-blue-10-base-default)";
            readonly surface: "var(--ds-color-veira-blue-10-surface-default)";
            readonly text: "var(--ds-color-veira-blue-10-text-default)";
        };
        readonly veiraGreen100: {
            readonly base: "var(--ds-color-veira-green-100-base-default)";
            readonly surface: "var(--ds-color-veira-green-100-surface-default)";
            readonly text: "var(--ds-color-veira-green-100-text-default)";
        };
        readonly veiraGreen50: {
            readonly base: "var(--ds-color-veira-green-50-base-default)";
            readonly surface: "var(--ds-color-veira-green-50-surface-default)";
            readonly text: "var(--ds-color-veira-green-50-text-default)";
        };
        readonly veiraGreen25: {
            readonly base: "var(--ds-color-veira-green-25-base-default)";
            readonly surface: "var(--ds-color-veira-green-25-surface-default)";
            readonly text: "var(--ds-color-veira-green-25-text-default)";
        };
        readonly veiraGreen10: {
            readonly base: "var(--ds-color-veira-green-10-base-default)";
            readonly surface: "var(--ds-color-veira-green-10-surface-default)";
            readonly text: "var(--ds-color-veira-green-10-text-default)";
        };
    };
    readonly spacing: {
        readonly xs: "var(--ds-size-1)";
        readonly sm: "var(--ds-size-2)";
        readonly md: "var(--ds-size-4)";
        readonly lg: "var(--ds-size-6)";
        readonly xl: "var(--ds-size-8)";
        readonly '2xl': "var(--ds-size-12)";
    };
    readonly borderRadius: {
        readonly sm: "var(--ds-border-radius-sm)";
        readonly md: "var(--ds-border-radius-md)";
        readonly lg: "var(--ds-border-radius-lg)";
        readonly xl: "var(--ds-border-radius-xl)";
        readonly full: "var(--ds-border-radius-full)";
    };
};
type VeiraTokens = typeof tokens;

declare const getVeiraColor: (color: keyof typeof tokens.colors) => {
    readonly base: "var(--ds-color-veira-teal-base-default)";
    readonly surface: "var(--ds-color-veira-teal-surface-default)";
    readonly text: "var(--ds-color-veira-teal-text-default)";
} | {
    readonly base: "var(--ds-color-neutral-base-default)";
    readonly surface: "var(--ds-color-neutral-surface-default)";
    readonly text: "var(--ds-color-neutral-text-default)";
} | {
    readonly base: "var(--ds-color-veira-yellow-100-base-default)";
    readonly surface: "var(--ds-color-veira-yellow-100-surface-default)";
    readonly text: "var(--ds-color-veira-yellow-100-text-default)";
} | {
    readonly base: "var(--ds-color-veira-yellow-50-base-default)";
    readonly surface: "var(--ds-color-veira-yellow-50-surface-default)";
    readonly text: "var(--ds-color-veira-yellow-50-text-default)";
} | {
    readonly base: "var(--ds-color-veira-yellow-25-base-default)";
    readonly surface: "var(--ds-color-veira-yellow-25-surface-default)";
    readonly text: "var(--ds-color-veira-yellow-25-text-default)";
} | {
    readonly base: "var(--ds-color-veira-yellow-10-base-default)";
    readonly surface: "var(--ds-color-veira-yellow-10-surface-default)";
    readonly text: "var(--ds-color-veira-yellow-10-text-default)";
} | {
    readonly base: "var(--ds-color-veira-coral-100-base-default)";
    readonly surface: "var(--ds-color-veira-coral-100-surface-default)";
    readonly text: "var(--ds-color-veira-coral-100-text-default)";
} | {
    readonly base: "var(--ds-color-veira-coral-50-base-default)";
    readonly surface: "var(--ds-color-veira-coral-50-surface-default)";
    readonly text: "var(--ds-color-veira-coral-50-text-default)";
} | {
    readonly base: "var(--ds-color-veira-coral-25-base-default)";
    readonly surface: "var(--ds-color-veira-coral-25-surface-default)";
    readonly text: "var(--ds-color-veira-coral-25-text-default)";
} | {
    readonly base: "var(--ds-color-veira-coral-10-base-default)";
    readonly surface: "var(--ds-color-veira-coral-10-surface-default)";
    readonly text: "var(--ds-color-veira-coral-10-text-default)";
} | {
    readonly base: "var(--ds-color-veira-blue-100-base-default)";
    readonly surface: "var(--ds-color-veira-blue-100-surface-default)";
    readonly text: "var(--ds-color-veira-blue-100-text-default)";
} | {
    readonly base: "var(--ds-color-veira-blue-50-base-default)";
    readonly surface: "var(--ds-color-veira-blue-50-surface-default)";
    readonly text: "var(--ds-color-veira-blue-50-text-default)";
} | {
    readonly base: "var(--ds-color-veira-blue-25-base-default)";
    readonly surface: "var(--ds-color-veira-blue-25-surface-default)";
    readonly text: "var(--ds-color-veira-blue-25-text-default)";
} | {
    readonly base: "var(--ds-color-veira-blue-10-base-default)";
    readonly surface: "var(--ds-color-veira-blue-10-surface-default)";
    readonly text: "var(--ds-color-veira-blue-10-text-default)";
} | {
    readonly base: "var(--ds-color-veira-green-100-base-default)";
    readonly surface: "var(--ds-color-veira-green-100-surface-default)";
    readonly text: "var(--ds-color-veira-green-100-text-default)";
} | {
    readonly base: "var(--ds-color-veira-green-50-base-default)";
    readonly surface: "var(--ds-color-veira-green-50-surface-default)";
    readonly text: "var(--ds-color-veira-green-50-text-default)";
} | {
    readonly base: "var(--ds-color-veira-green-25-base-default)";
    readonly surface: "var(--ds-color-veira-green-25-surface-default)";
    readonly text: "var(--ds-color-veira-green-25-text-default)";
} | {
    readonly base: "var(--ds-color-veira-green-10-base-default)";
    readonly surface: "var(--ds-color-veira-green-10-surface-default)";
    readonly text: "var(--ds-color-veira-green-10-text-default)";
};
declare const getSpacing: (size: keyof typeof tokens.spacing) => "var(--ds-size-1)" | "var(--ds-size-2)" | "var(--ds-size-4)" | "var(--ds-size-6)" | "var(--ds-size-8)" | "var(--ds-size-12)";
declare const getBorderRadius: (size: keyof typeof tokens.borderRadius) => "var(--ds-border-radius-sm)" | "var(--ds-border-radius-md)" | "var(--ds-border-radius-lg)" | "var(--ds-border-radius-xl)" | "var(--ds-border-radius-full)";
declare const createVeiraStyles: (styles: Record<string, any>) => Record<string, any>;
declare const applyVeiraTheme: (element: HTMLElement, theme?: "light" | "dark") => void;
declare const applyVeiraColorScheme: (element: HTMLElement, color: string) => void;

export { applyVeiraColorScheme, applyVeiraTheme, createVeiraStyles, getBorderRadius, getSpacing, getVeiraColor, tokens };
export type { VeiraTokens };
