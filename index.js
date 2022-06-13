function showSizes() {
  document.querySelectorAll('.show-size').forEach(elem => {
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
    elem.nextElementSibling.textContent = `displaySize: ${width}x${height}\neffectiveScale: ${toFixed(width / elem.naturalWidth)}`;
  });
}

function toFixed(v) {
  return v.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
}


window.addEventListener('resize', showSizes);
showSizes();