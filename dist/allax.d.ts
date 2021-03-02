interface IParallaxOptions {
  speed: number;
  speedRange: {
    min: number;
    max: number;
  };
  behindMouse: boolean;
  translateX: boolean;
  translateY: boolean;
}
declare class Parallax {
  options: IParallaxOptions;
  layers: HTMLCollectionOf<HTMLElement>;
  body: HTMLBodyElement | null;
  constructor(selector: string, options: IParallaxOptions);
  moveLayers(ev: MouseEvent, currentSpeed: number, factor: number, moveX: boolean, moveY: boolean): void;
  position(
    ev: MouseEvent
  ): {
    x: number;
    y: number;
  };
}
