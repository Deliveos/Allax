interface ParallaxOptions {
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
    options: ParallaxOptions;
    layers: HTMLCollectionOf<HTMLElement>;
    body: HTMLBodyElement | null;
    constructor(selector: string, options: ParallaxOptions);
    moveLayers(ev: MouseEvent, currentSpeed: number, factor: number, moveX: boolean, moveY: boolean): void;
    position(ev: MouseEvent): {
        x: number;
        y: number;
    };
}
