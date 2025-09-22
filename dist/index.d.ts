export * from '@digdir/designsystemet-react';

declare const tokens: {
    readonly colors: {
        readonly veiraCoral: {
            readonly base: "var(--ds-color-veira-coral-base-default)";
            readonly surface: "var(--ds-color-veira-coral-surface-default)";
            readonly text: "var(--ds-color-veira-coral-text-default)";
        };
        readonly veiraBlue: {
            readonly base: "var(--ds-color-veira-blue-base-default)";
            readonly surface: "var(--ds-color-veira-blue-surface-default)";
            readonly text: "var(--ds-color-veira-blue-text-default)";
        };
        readonly veiraGreen: {
            readonly base: "var(--ds-color-veira-green-base-default)";
            readonly surface: "var(--ds-color-veira-green-surface-default)";
            readonly text: "var(--ds-color-veira-green-text-default)";
        };
        readonly veriaYellow: {
            readonly base: "var(--ds-color-veira-yellow-base-default)";
            readonly surface: "var(--ds-color-veira-yellow-surface-default)";
            readonly text: "var(--ds-color-veira-yellow-text-default)";
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
    readonly base: "var(--ds-color-veira-coral-base-default)";
    readonly surface: "var(--ds-color-veira-coral-surface-default)";
    readonly text: "var(--ds-color-veira-coral-text-default)";
} | {
    readonly base: "var(--ds-color-veira-blue-base-default)";
    readonly surface: "var(--ds-color-veira-blue-surface-default)";
    readonly text: "var(--ds-color-veira-blue-text-default)";
} | {
    readonly base: "var(--ds-color-veira-green-base-default)";
    readonly surface: "var(--ds-color-veira-green-surface-default)";
    readonly text: "var(--ds-color-veira-green-text-default)";
} | {
    readonly base: "var(--ds-color-veira-yellow-base-default)";
    readonly surface: "var(--ds-color-veira-yellow-surface-default)";
    readonly text: "var(--ds-color-veira-yellow-text-default)";
};
declare const getSpacing: (size: keyof typeof tokens.spacing) => "var(--ds-size-1)" | "var(--ds-size-2)" | "var(--ds-size-4)" | "var(--ds-size-6)" | "var(--ds-size-8)" | "var(--ds-size-12)";
declare const getBorderRadius: (size: keyof typeof tokens.borderRadius) => "var(--ds-border-radius-sm)" | "var(--ds-border-radius-md)" | "var(--ds-border-radius-lg)" | "var(--ds-border-radius-xl)" | "var(--ds-border-radius-full)";
declare const createVeiraStyles: (styles: Record<string, any>) => Record<string, any>;
declare const applyVeiraTheme: (element: HTMLElement, theme?: "light" | "dark") => void;
declare const applyVeiraColorScheme: (element: HTMLElement, color: string) => void;

export { applyVeiraColorScheme, applyVeiraTheme, createVeiraStyles, getBorderRadius, getSpacing, getVeiraColor, tokens };
export type { VeiraTokens };
