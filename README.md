# pixel-perfect.js

Display images pixel-perfect

[See example](https://greggman.github.io/pixel-perfect.js)

## How to use

In your image tags that you want to be pixel perfect give them
the class `pixel-perfect` and optionally set a scale by adding
`data-pixel-perfect="scale=2"` (or `=3`, `=16` etc).

Example:

```html
<img src="someImage.png" class="pixel-perfect" data-pixel-perfect="scale=4">
```

Scales must be an integer value by definition. You can't make
something pixel perfect if it's scaled to a fractional value.

Defined your `pixel-perfect` class as follows

```css
.pixel-perfect {
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
```

Include this script on your page

```html
<script type="module">
import * as pp from './pixel-perfect.js';

function makeAllPixelPerfect() {
  document.querySelectorAll(".pixel-perfect").forEach(pp.makePixelPerfect);
}
window.addEventListener('resize', makeAllPixelPerfect);
makeAllPixelPerfect();
</script>
```

## License

MIT
