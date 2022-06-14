# pixel-perfect.js

Display images pixel-perfect

[See example](https://greggman.github.io/pixel-perfect.js)

## How to use

In your image tags that you want to be pixel perfect give them
the class `pixel-perfect` and set a CSS size that is some
integer multiple of your image.

Example:

```html
<img src="100x150.png" class="pixel-perfect" style="width: 400px; height 600px">
```

Here we want the image displayed 3x the size. The reason to do it this way
is so if the user has JavaScript disabled they'll still a size that matches
your design.

Define your `pixel-perfect` class as follows

```css
.pixel-perfect {
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
```

Include this script on your page

```html
<script type="module" src="pixel-perfect.js"></script>;
```

Done!

## Canvas

For `<canvas>` set both a width and height and a CSS 
width and height. Example:

```html
<canvas width="200" height="100" class="pixel-perfect" style="width: 400px; height: 200px;"></canvas>
```

Note: as it says on [the main page](https://greggman.github.io/pixel-perfect.js), this solution only works for designs that allow the canvas to change size relative to other elements. For example the canvas above is 200x100 pixels. To stay pixel perfect
and can not go smaller, and going larger it must
change to integer multiples like 400x200, 600x300, 800x400, etc...

If you have a canvas that fits a container or the entire
page or that's required to have a fixed size then 
[you need a different solution](https://webglfundamentals.org/webgl/lessons/webgl-resizing-the-canvas.html).

## Special use cases

You can also import pixel-perfect.js as an es6 module.

```js
import {makePixelPerfect} from './pixel-perfect.js';
```

You can then call `makePixelPerfect` on any `<img>` element. For example

```js
import {makePixelPerfect} from './pixel-perfect.js';

function makeAllPixelPerfect() {
  document.querySelectorAll(".pixel-perfect").forEach(pp.makePixelPerfect);
}
window.addEventListener('resize', makeAllPixelPerfect);
makeAllPixelPerfect();
```

## What about Canvas?

This solution doesn't *generally* fit canvases.

## License

MIT
