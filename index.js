function setSize(elem) {
  if (!elem.nextElementSibling) {
    const sizeElem = document.createElement('div');
    sizeElem.className = 'show-size-info';
    elem.parentElement.insertBefore(sizeElem, elem.nextElementSibling);
  }
  const rect = elem.getBoundingClientRect();
  // Warning: These values may be incorrect. 
  // See: https://webglfundamentals.org/webgl/lessons/webgl-resizing-the-canvas.html
  const width = Math.round(rect.width * devicePixelRatio);
  const height = Math.round(rect.height * devicePixelRatio);
  const effectiveScale = width / elem.naturalWidth;
  elem.nextElementSibling.textContent = elem.dataset.small
      ? `${width}x${height} (${toFixed(effectiveScale)}x)`
      : `displaySize: ${width}x${height}\neffectiveScale: ${toFixed(effectiveScale)}x ${effectiveScale % 1 ? '👎' : '👍'}`;
}

function showSizes() {
  let stillLoading = false;
  document.querySelectorAll('.show-size').forEach(elem => {
    if (!elem.complete) {
      stillLoading = true;
      elem.decode().then(() => setSize(elem));
    } else {
      setSize(elem);
    }
  });
  document.querySelector('#dpr').textContent = devicePixelRatio;
}

function toFixed(v) {
  return v.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
}

{
  const ctx = document.querySelector('canvas').getContext('2d');
  const {width, height} = ctx.canvas;
  ctx.fillStyle = 'yellow';
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = 'red';
  for (let y = 0; y < height / 2; y += 2) {
    ctx.fillRect(0, y, width / 2, 1);
  }
  for (let x = 0; x < width / 2; x += 2) {
    ctx.fillRect(x + width / 2, 0, 1, height / 2);
  }
  for (let y = 0; y < height / 2; ++y) {
    for (let x = 0; x < width; x += 2) {
      ctx.fillRect(x + y % 2, y + height / 2, 1, 1);
    }
  }
  {
    let x = 0;
    let then = 0;
    function draw(now) {
      if (now - then >= 16) {
        then = now;
        ctx.globalCompositeOperation = 'difference';
        ctx.fillStyle = '#FFF';
        ctx.fillRect(x, 0, 1, height);
        x = (x + 1) % width;
      }
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  }
}

window.addEventListener('resize', showSizes);
showSizes();