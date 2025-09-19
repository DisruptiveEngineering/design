import { tokens } from '../tokens';
export declare const getVeiraColor: (color: keyof typeof tokens.colors) => {
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
    readonly base: "var(--ds-color-veria-yellow-base-default)";
    readonly surface: "var(--ds-color-veria-yellow-surface-default)";
    readonly text: "var(--ds-color-veria-yellow-text-default)";
};
export declare const getSpacing: (size: keyof typeof tokens.spacing) => "var(--ds-size-1)" | "var(--ds-size-2)" | "var(--ds-size-4)" | "var(--ds-size-6)" | "var(--ds-size-8)" | "var(--ds-size-12)";
export declare const getBorderRadius: (size: keyof typeof tokens.borderRadius) => "var(--ds-border-radius-sm)" | "var(--ds-border-radius-md)" | "var(--ds-border-radius-lg)" | "var(--ds-border-radius-xl)" | "var(--ds-border-radius-full)";
export declare const createVeiraStyles: (styles: Record<string, any>) => Record<string, any>;
export declare const applyVeiraTheme: (element: HTMLElement, theme?: "light" | "dark") => void;
export declare const applyVeiraColorScheme: (element: HTMLElement, color: string) => void;
//# sourceMappingURL=index.d.ts.map