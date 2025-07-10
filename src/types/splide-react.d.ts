declare module "@splidejs/react-splide" {
  import * as React from "react";
  import type { Options, Splide as CoreSplide } from "@splidejs/splide";

  export interface SplideProps extends React.HTMLAttributes<HTMLDivElement> {
    options?: Options;
    extensions?: Record<string, unknown>;
    hasSliderWrapper?: boolean;
    children?: React.ReactNode;
  }

  export interface SplideSlideProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
  }

  export class Splide extends React.Component<SplideProps> {
    splide: CoreSplide;
  }

  export class SplideSlide extends React.Component<SplideSlideProps> {}
}
