#!/bin/bash
set -euo pipefail

# convert JPGs into temporary GIFs using sharp
mkdir -p chat/tmp_gifs
node <<'NODE'
import sharp from 'sharp';
const files = [
  'chat/1dz4a43hgv.jpg',
  'chat/3n9b04kcho.jpg',
  'chat/kbloqocg6n.jpg',
  'chat/t7lj6pklmu.jpg',
  'chat/xbpf35m9ng.jpg'
];
for (const [index, file] of files.entries()) {
  const output = `chat/tmp_gifs/frame-${index}.gif`;
  await sharp(file).gif().toFile(output);
  console.log('Converted', file, 'to', output);
}
NODE

node node_modules/gifsicle/cli.js --loopcount=0 --delay=80 chat/tmp_gifs/frame-*.gif -o chat/gallery.gif
rm -rf chat/tmp_gifs

echo "GIF created at chat/gallery.gif"
