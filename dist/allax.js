"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Parallax = /** @class */ (function () {
    function Parallax(selector, options) {
        var _this = this;
        //default options
        this.options =
            {
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
        this.options = __assign(__assign({}, this.options), options);
        this.options.speed = this.options.speed / 100;
        this.options.speedRange.min = this.options.speedRange.min / 100;
        this.options.speedRange.max = this.options.speedRange.max / 100;
        // get layers
        this.layers = document.querySelectorAll(selector);
        this.body = document.querySelector("body");
        for (var i = 0; i < this.layers.length; i++) {
            this.layers[i].style.transformOrigin = "-50% -50%";
        }
        document.addEventListener("mousemove", function (ev) {
            var _a = _this.options.speedRange, min = _a.min, max = _a.max;
            var _b = _this.options, speed = _b.speed, behindMouse = _b.behindMouse, translateX = _b.translateX, translateY = _b.translateY;
            var factor = (max - min) / _this.layers.length;
            var currentSpeed = 0;
            // get current speed
            if (speed && speed !== 0) {
                if (behindMouse) {
                    currentSpeed = speed;
                }
                else {
                    currentSpeed = -speed;
                }
            }
            else if (factor && factor !== 0) {
                if (behindMouse) {
                    currentSpeed = min;
                }
                else {
                    currentSpeed = -min;
                    factor = -factor;
                }
            }
            else {
                currentSpeed = 0;
            }
            // move layers logic
            if (translateX && translateY) {
                _this.moveLayers(ev, currentSpeed, factor, true, true);
            }
            else if (translateX && !translateY) {
                _this.moveLayers(ev, currentSpeed, factor, true, false);
            }
            else if (!translateX && translateY) {
                _this.moveLayers(ev, currentSpeed, factor, false, true);
            }
        });
    }
    Parallax.prototype.moveLayers = function (ev, currentSpeed, factor, moveX, moveY) {
        for (var i = 0; i < this.layers.length; i++) {
            var dataSpeed = -Number(this.layers[i].getAttribute("data-allax-speed"));
            this.layers[i].style.transform = "translate(" + (moveX ? (dataSpeed ? this.position(ev).x * dataSpeed : this.position(ev).x * currentSpeed) : 0) + "px, " + (moveY ? (dataSpeed ? -this.position(ev).y * dataSpeed : -this.position(ev).y * currentSpeed) : 0) + "px)";
            currentSpeed += factor;
        }
    };
    Parallax.prototype.position = function (ev) {
        var width = Math.max(document.documentElement.clientWidth, window.innerWidth);
        var height = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return {
            x: -((width / 2) - ev.clientX),
            y: ((height / 2) - ev.clientY)
        };
    };
    return Parallax;
}());
//# sourceMappingURL=allax.js.map