interface StarOptions {
    count: number;
    radius: {
        min: number;
        max: number;
    };
    colors: Array<string>;
}
declare class Star {
    width: number;
    height: number;
    parant: Element | null;
    options: StarOptions;
    constructor(parentSelector: string, options: StarOptions);
    range(min: number, max: number): number;
}
