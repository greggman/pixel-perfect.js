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

## License

MIT
