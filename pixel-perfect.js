export function makePixelPerfect(elem) {
  if (elem instanceof HTMLImageElement && !elem.complete) {
    elem.decode().then(() => makePixelPerfect(elem));
  }
  const origWidth = elem.naturalWidth; // TODO, handle canvas, video, 
  const origHeight = elem.naturalHeight;
  const options = {
    scale: 1,
    ...Object.fromEntries(new URLSearchParams(elem.dataset.pixelPerfect || '').entries()),
  };

  const scale = options.scale
  if (scale % 1 !== 0) {
    throw new Error('scale must be an integer value');
  }

  const px = v => `${v}px`;

  const desiredWidth = origWidth * scale;
  const targetWidth = desiredWidth * devicePixelRatio;
  const mult = Math.max(1, Math.round(targetWidth / origWidth));
  elem.style.width = px(origWidth * mult / devicePixelRatio);
  elem.style.height = px(origHeight * mult / devicePixelRatio);
  return {mult};
}
// NOTE: ResizeObserver will not work as
// from the POV of HTML the elements are not changing
// size when the user zooms.
