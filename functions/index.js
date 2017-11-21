"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/zone-node");
const functions = require("firebase-functions");
const fs = require("fs");
const platform_server_1 = require("@angular/platform-server");
const document = fs.readFileSync(__dirname + '/dist-server/index.html', 'utf8');
const AppServerModuleNgFactory = require(__dirname + '/dist-server/main.bundle.js').AppServerModuleNgFactory;
exports.ssrapp = functions.https.onRequest((req, res) => {
    const url = req.path;
    platform_server_1.renderModuleFactory(AppServerModuleNgFactory, { document, url })
        .then(html => {
        res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
        res.status(200).send(html);
    });
});
