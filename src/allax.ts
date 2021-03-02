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

class Parallax {
  options: ParallaxOptions;
  layers: HTMLCollectionOf<HTMLElement>;
  body: HTMLBodyElement | null;

  constructor(selector: string, options: ParallaxOptions) {
    //default options
    this.options = {
      speed: 0,
      speedRange: {
        min: 0,
        max: 0
      },
      behindMouse: false,
      translateX: true,
      translateY: true
    };
    // full options with user changes
    this.options = { ...this.options, ...options };
    this.options.speed = this.options.speed / 100;
    this.options.speedRange.min = this.options.speedRange.min / 100;
    this.options.speedRange.max = this.options.speedRange.max / 100;

    // get layers
    this.layers = (document.querySelectorAll(selector) as unknown) as HTMLCollectionOf<HTMLElement>;
    this.body = document.querySelector('body');

    for (let i = 0; i < this.layers.length; i++) {
      this.layers[i].style.transformOrigin = '-50% -50%';
    }

    document.addEventListener('mousemove', (ev: MouseEvent) => {
      const { min, max } = this.options.speedRange;
      const { speed, behindMouse, translateX, translateY } = this.options;
      let factor = (max - min) / this.layers.length;
      let currentSpeed: number = 0;

      // get current speed
      if (speed && speed !== 0) {
        if (behindMouse) {
          currentSpeed = speed;
        } else {
          currentSpeed = -speed;
        }
      } else if (factor && factor !== 0) {
        if (behindMouse) {
          currentSpeed = min;
        } else {
          currentSpeed = -min;
          factor = -factor;
        }
      } else {
        currentSpeed = 0;
      }

      // move layers logic
      if (translateX && translateY) {
        this.moveLayers(ev, currentSpeed, factor, true, true);
      } else if (translateX && !translateY) {
        this.moveLayers(ev, currentSpeed, factor, true, false);
      } else if (!translateX && translateY) {
        this.moveLayers(ev, currentSpeed, factor, false, true);
      }
    });
  }

  moveLayers(ev: MouseEvent, currentSpeed: number, factor: number, moveX: boolean, moveY: boolean) {
    for (let i = 0; i < this.layers.length; i++) {
      const dataSpeed: number | null = -Number(this.layers[i].getAttribute('data-parallax-speed'));
      this.layers[i].style.transform = `translate(${
        moveX ? (dataSpeed ? this.position(ev).x * dataSpeed : this.position(ev).x * currentSpeed) : 0
      }px, ${moveY ? (dataSpeed ? -this.position(ev).y * dataSpeed : -this.position(ev).y * currentSpeed) : 0}px)`;
      currentSpeed += factor;
    }
  }

  position(ev: MouseEvent) {
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth);
    const height = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return {
      x: -(width / 2 - ev.clientX),
      y: height / 2 - ev.clientY
    };
  }
}
