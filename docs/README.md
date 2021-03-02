# What is Allax?

This is a simple library for creating parallax effect on mouse movement.

# How to get Allax?
You can download `allax.js` file on the [site](https://deliveos.github.io/Allax/).

You can download the repository and use the library by connecting `dist/allax.js`

You can connect the library using HTML tag `script`:
```
<script src="https://rawcdn.githack.com/Deliveos/Allax/5113a4642325532cb4fd550db58fc856507de287/dist/allax.js"></script>
```

# How to use Allax?

In order to use the library, you need to create an instance of the `Parallax` class, pass the selector and options to the constructor
```
new Parallax(".layer", {
  speed: nuber,
  speedRange: {
    min: number,
    max: number,
  };
  behindMouse: boolean,
  translateX: boolean,
  translateY: boolean
})
```
# Options
### speed
The `speed` option sets the overall speed for all elements with the `selector` passed to the constructor. The `speed` option takes a value of `number` type from `0` to `100`. The `speed` value is equal to 100 equal to the mouse movement speed.
```
new Parallax(".layer", { speed: 10 })
```

### speedRange
The `speedRange` option is an object and consists of the minimum and maximum speed values. The resulting range of speeds will be split and each element on the page, obtained using the selector, will receive its own speed from the range. 
The minimum and maximum value takes on a value of the `number` type from `0` to `100`. 

*Important!* If you want to use the speedRange option, then you do not need to specify the speed option.
```
new Parallax(".layer", {
  speedRange: {
    min: 0,
    max: 10
})
```
#### Example
For example I have this HTML markdown:
```
<div class="scene">
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
</div>
```
How create pallax effect? Very simple!
```
<div class="scene">
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
</div>

<script src="https://rawcdn.githack.com/Deliveos/Allax/5113a4642325532cb4fd550db58fc856507de287/dist/allax.js"><script>
<>
  new Parallax(".layer", speedRange: {
    min: 0,
    max: 10
})
</>
```
Done! In this case, the first element will have a speed 0, and second element will have a speed 5, and last element will have a speed 10.

### behindMouse
The `behindMouse` option will determine in which direction the elements will move in relation to mouse. Accepts value of `boolean` type. Default value `false`

### translateX & translateY
These options are needed to set the axis of movement of elements on the page. Options accept value of `boolean` type. By default, both options value are `true`

# Data attribute
You can use data attribute `data-parallax-speed` to set an individual speed for an element. `data-parallax-speed`  has the highest priority over the speed and speedRange options.
This data attribute cannot be equal to 0, otherwise this attribute will not be counted. `data-parallax-speed` value of 1 equal to mouse movement speed.
#### Example
```
<div class="scene">
  <div data-parallax-speed="0.000001" class="layer"></div>
  <div data-parallax-speed="0.1" class="layer"></div>
  <div data-parallax-speed="0.2" class="layer"></div>
</div>

<script src="https://rawcdn.githack.com/Deliveos/Allax/5113a4642325532cb4fd550db58fc856507de287/dist/allax.js"><script>
```
In this case, the first element will have a speed 0.000001 in order for the element to move to a minimum.
