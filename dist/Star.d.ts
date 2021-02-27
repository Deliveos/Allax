interface IStarOptions {
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
    options: IStarOptions;
    constructor(parentSelector: string, options: IStarOptions);
    range(min: number, max: number): number;
}
