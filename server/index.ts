import 'zone.js/dist/zone-node';
import * as functions from 'firebase-functions';
import * as fs from 'fs';
import { renderModuleFactory } from '@angular/platform-server';

const document = fs.readFileSync(__dirname + '/dist-server/index.html', 'utf8');
const AppServerModuleNgFactory = require(__dirname + '/dist-server/main.bundle.js').AppServerModuleNgFactory;

export let ssrapp = functions.https.onRequest((req, res) => {
  const url = req.path;
  renderModuleFactory(AppServerModuleNgFactory, { document, url })
    .then(html => {
      res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
      res.status(200).send(html);
    });
});
