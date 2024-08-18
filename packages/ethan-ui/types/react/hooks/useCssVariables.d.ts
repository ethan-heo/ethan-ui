declare function useCssVariables(el?: HTMLElement): CssVariablesMap;
export default useCssVariables;
type CssVariablesMap = Map<keyof Theme, string>;
type Theme = {
    "--grid-mobile-portrait-columns": string;
    "--grid-mobile-portrait-gutter": string;
    "--grid-mobile-portrait-margin": string;
    "--grid-mobile-landscape-columns": string;
    "--grid-mobile-landscape-gutter": string;
    "--grid-mobile-landscape-margin": string;
    "--grid-tablet-portrait-columns": string;
    "--grid-tablet-portrait-gutter": string;
    "--grid-tablet-portrait-margin": string;
    "--grid-tablet-landscape-columns": string;
    "--grid-tablet-landscape-gutter": string;
    "--grid-tablet-landscape-margin": string;
    "--grid-desktop-columns": string;
    "--grid-desktop-gutter": string;
    "--grid-desktop-margin": string;
    "--responsive-mobile-portrait-max": string;
    "--responsive-mobile-landscape-min": string;
    "--responsive-mobile-landscape-max": string;
    "--responsive-tablet-portrait-min": string;
    "--responsive-tablet-portrait-max": string;
    "--responsive-tablet-landscape-min": string;
    "--responsive-tablet-landscape-max": string;
    "--responsive-desktop-min": string;
    "--font-size-extra-large": string;
    "--font-size-large": string;
    "--font-size-medium": string;
    "--font-size-small": string;
    "--font-size-extra-small": string;
    "--font-weight-thin": string;
    "--font-weight-extra-light": string;
    "--font-weight-light": string;
    "--font-weight-normal": string;
    "--font-weight-medium": string;
    "--font-weight-semi-bold": string;
    "--font-weight-bold": string;
    "--font-weight-extra-bold": string;
    "--font-weight-black": string;
    "--line-height-extra-large": string;
    "--line-height-large": string;
    "--line-height-medium": string;
    "--line-height-small": string;
    "--line-height-extra-small": string;
    "--color-primary": string;
    "--color-secondary": string;
    "--color-accent": string;
    "--color-success": string;
    "--color-warning": string;
    "--color-error": string;
    "--color-text": string;
    "--color-background": string;
    "--border-hidden-thin": string;
    "--border-hidden-medium": string;
    "--border-hidden-bold": string;
    "--border-hidden-black": string;
    "--border-dotted-thin": string;
    "--border-dotted-medium": string;
    "--border-dotted-bold": string;
    "--border-dotted-black": string;
    "--border-dashed-thin": string;
    "--border-dashed-medium": string;
    "--border-dashed-bold": string;
    "--border-dashed-black": string;
    "--border-double-thin": string;
    "--border-double-medium": string;
    "--border-double-bold": string;
    "--border-double-black": string;
    "--border-groove-thin": string;
    "--border-groove-medium": string;
    "--border-groove-bold": string;
    "--border-groove-black": string;
    "--border-ridge-thin": string;
    "--border-ridge-medium": string;
    "--border-ridge-bold": string;
    "--border-ridge-black": string;
    "--border-inset-thin": string;
    "--border-inset-medium": string;
    "--border-inset-bold": string;
    "--border-inset-black": string;
    "--border-outset-thin": string;
    "--border-outset-medium": string;
    "--border-outset-bold": string;
    "--border-outset-black": string;
    "--border-solid-thin": string;
    "--border-solid-medium": string;
    "--border-solid-bold": string;
    "--border-solid-black": string;
    "--border-radius-extra-large": string;
    "--border-radius-large": string;
    "--border-radius-medium": string;
    "--border-radius-small": string;
    "--border-radius-extra-small": string;
    "--border-radius-full": string;
    "--spacing-extra-large": string;
    "--spacing-large": string;
    "--spacing-medium": string;
    "--spacing-small": string;
    "--spacing-extra-small": string;
    "--shadow-top-left-large": string;
    "--shadow-top-left-medium": string;
    "--shadow-top-left-small": string;
    "--shadow-top-right-large": string;
    "--shadow-top-right-medium": string;
    "--shadow-top-right-small": string;
    "--shadow-bottom-left-large": string;
    "--shadow-bottom-left-medium": string;
    "--shadow-bottom-left-small": string;
    "--shadow-bottom-right-large": string;
    "--shadow-bottom-right-medium": string;
    "--shadow-bottom-right-small": string;
    "--font-family": string;
};