'use strict';

const { readFile, writeFile } = require('fs');
const { join } = require('path');

readFile(join(__dirname, './dist-server/main.bundle.js'), 'utf-8', (err, data) => {
  if (err) { return console.log('Error reading file:', err); }

  const ssrPageScrollBundle = 'ng2-page-scroll/bundles/ng2-page-scroll.umd.js'
  const newCode = data.replace('ng2-page-scroll', ssrPageScrollBundle)
    .replace('ng2-page-scroll/src/ng2-page-scroll.module', ssrPageScrollBundle)
    .replace('ng2-page-scroll/src/ng2-page-scroll.service', ssrPageScrollBundle)
    .replace('ng2-page-scroll/src/ng2-page-scroll.directive', ssrPageScrollBundle);

  writeFile('./dist-server/main.bundle.js', newCode, 'utf-8', err => {
    if (err) { return console.log('Error writing file:', err); }
    console.log('Done editing main.bundle.js to use amd bundles for external libraries');
  });
});