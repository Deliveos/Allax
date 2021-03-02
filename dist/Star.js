'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var Star = /** @class */ (function () {
  function Star(parentSelector, options) {
    var _a, _b;
    this.options = {
      count: 0,
      radius: {
        min: 0,
        max: 0
      },
      colors: ['#ffffff']
    };
    this.parant = document.querySelector(parentSelector);
    this.width = parent.innerWidth;
    this.height = parent.innerHeight;
    this.options = __assign(__assign({}, this.options), options);
    this.options.count = Math.floor(this.options.count);
    (_a = this.parant) === null || _a === void 0 ? void 0 : _a.setAttribute('style', 'overflow:hidden');
    //generate stars
    for (var i = 0; i < this.options.count; i++) {
      var star = document.createElement('div');
      var posX = this.range(-50, this.width + 50);
      var posY = this.range(-50, this.height + 50);
      var size = this.range(this.options.radius.min, this.options.radius.max);
      var color = this.options.colors[Math.floor(this.range(0, this.options.colors.length))];
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
      star.setAttribute('data-allax-speed', this.range(0, 0.2).toString());
      (_b = this.parant) === null || _b === void 0 ? void 0 : _b.appendChild(star);
    }
  }
  Star.prototype.range = function (min, max) {
    return Math.random() * (max - min) + min;
  };
  return Star;
})();
//# sourceMappingURL=Star.js.map
