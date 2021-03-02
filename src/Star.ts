interface StarOptions {
  count: number;
  radius: {
    min: number;
    max: number;
  };
  colors: Array<string>;
}

class Star {
  width: number;
  height: number;
  parant: Element | null;
  options: StarOptions = {
    count: 0,
    radius: {
      min: 0,
      max: 0
    },
    colors: ['#ffffff']
  };

  constructor(parentSelector: string, options: StarOptions) {
    this.parant = document.querySelector(parentSelector);
    this.width = parent.innerWidth;
    this.height = parent.innerHeight;
    this.options = { ...this.options, ...options };
    this.options.count = Math.floor(this.options.count);

    this.parant?.setAttribute('style', 'overflow:hidden');

    //generate stars
    for (let i = 0; i < this.options.count; i++) {
      let star = document.createElement('div');
      const posX = this.range(-50, this.width + 50);
      const posY = this.range(-50, this.height + 50);
      const size = this.range(this.options.radius.min, this.options.radius.max);
      const color = this.options.colors[Math.floor(this.range(0, this.options.colors.length))];
      star.style.position = 'absolute';
      star.style.top = posY + 'px';
      star.style.left = posX + 'px';
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.backgroundColor = color;
      star.style.borderRadius = '50%';
      star.style.opacity = (size / this.options.radius.max).toString();
      star.style.boxShadow = '0 0 ' + this.range(0, size) + 'px' + color;

      star.classList.add('star');
      star.setAttribute('data-parallax-speed', this.range(0, 0.2).toString());

      this.parant?.appendChild(star);
    }
  }

  range(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
}
