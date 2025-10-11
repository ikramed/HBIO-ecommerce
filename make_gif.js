import fs from 'fs';
import { GifWriter } from 'omggif';
import jpeg from 'jpeg-js';
import quantize from 'quantize';

const files = [
  'chat/1dz4a43hgv.jpg',
  'chat/3n9b04kcho.jpg',
  'chat/kbloqocg6n.jpg',
  'chat/t7lj6pklmu.jpg',
  'chat/xbpf35m9ng.jpg'
];

const images = files.map((file) => {
  const data = fs.readFileSync(file);
  return jpeg.decode(data, true);
});

const width = Math.min(...images.map((img) => img.width));
const height = Math.min(...images.map((img) => img.height));

const paletteSize = 256;
const frameDelay = 80;

const estimatedSize = width * height * files.length * 4 + 4096;
const outputBuffer = Buffer.alloc(estimatedSize);
const gif = new GifWriter(outputBuffer, width, height, { loop: 0 });

let offset = 0;
for (const img of images) {
  const { data, width: w, height: h } = img;
  const pixels = [];

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const srcX = Math.floor((x / width) * w);
      const srcY = Math.floor((y / height) * h);
      const srcIdx = (srcY * w + srcX) * 4;
      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];
      pixels.push([r, g, b]);
    }
  }

  const palette = quantize(pixels, Math.min(paletteSize, pixels.length)).palette();
  let paletteLength = palette.length;
  if (paletteLength < 2) paletteLength = 2;
  paletteLength = Math.pow(2, Math.ceil(Math.log2(paletteLength)));
  if (paletteLength > 256) paletteLength = 256;
  const paletteArray = new Uint8Array(paletteLength * 3);

  for (let i = 0; i < paletteLength; i++) {
    if (i < palette.length) {
      const [r, g, b] = palette[i];
      paletteArray[i * 3] = r;
      paletteArray[i * 3 + 1] = g;
      paletteArray[i * 3 + 2] = b;
    } else {
      paletteArray[i * 3] = 0;
      paletteArray[i * 3 + 1] = 0;
      paletteArray[i * 3 + 2] = 0;
    }
  }

  const indexedPixels = new Uint8Array(width * height);
  for (let i = 0; i < pixels.length; i++) {
    indexedPixels[i] = closestColorIndex(palette, pixels[i]);
  }

  offset = gif.addFrame(0, 0, width, height, indexedPixels, { palette: paletteArray, delay: frameDelay });
}

gif.finish();
fs.writeFileSync('chat/gallery.gif', outputBuffer.subarray(0, offset));
console.log('GIF created at chat/gallery.gif');

function closestColorIndex(palette, color) {
  let minDistance = Infinity;
  let index = 0;
  for (let i = 0; i < palette.length; i++) {
    const [r, g, b] = palette[i];
    const dr = r - color[0];
    const dg = g - color[1];
    const db = b - color[2];
    const dist = dr * dr + dg * dg + db * db;
    if (dist < minDistance) {
      minDistance = dist;
      index = i;
    }
  }
  return index;
}
