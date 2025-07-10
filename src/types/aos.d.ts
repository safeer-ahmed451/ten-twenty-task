declare module 'aos' {
  interface AosOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    disable?: boolean | 'mobile';
    startEvent?: string;
    throttleDelay?: number;
    debounceDelay?: number;
  }

  export function init(options?: AosOptions): void;
  export function refresh(): void;
  export function refreshHard(): void;
  const AOS: { init: typeof init; refresh: typeof refresh; refreshHard: typeof refreshHard };
  export default AOS;
}
