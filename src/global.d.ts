export {};

declare global {
  interface Window {
    loadGA?: () => void;
    gtag?: (...args: unknown[]) => void;
  }
}
