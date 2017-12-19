"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/zone-node");
const functions = require("firebase-functions");
const fs = require("fs");
const platform_server_1 = require("@angular/platform-server");
const nodemailer = require("nodemailer");
const cors = require("cors");
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
const contactEmailFn = (req, res) => {
    if (!req.body.email || !req.body.name || !req.body.message) {
        console.log('400: Campos obrigatórios inválidos');
        res.status(400);
        res.send();
        return;
    }
    const mailTransport = nodemailer.createTransport({
        host: 'smtp.mailgun.org',
        port: 587,
        secure: false,
        auth: {
            user: 'postmaster@mg.marina.com',
            pass: '8034ffee5c348b41db0883544fa72739',
            api_key: 'key-32261bd9b02dcab4991f71c5445d0ddd',
            domain: 'https://api.mailgun.net/v3/mg.marina.com'
        }
    });
    const email = req.body.email;
    const name = req.body.name;
    const cel = (req.body.cel ? req.body.cel : '');
    const tel = (req.body.tel ? req.body.tel : '');
    const message = req.body.message;
    const mailOptions = {
        from: email,
        to: 'cesarsalesgomes@gmail.com',
        subject: 'MARINA: Contato',
        text: `${name}\n
              Celular: ${cel}\n
              Telefone: ${tel}\n
              Mensagem: ${message}`
    };
    mailTransport.sendMail(mailOptions).then(() => {
        console.log('200: Email enviado com sucesso');
        res.send();
    }).catch(err => {
        console.log('404: Erro ao enviar email');
        console.log(err);
        res.status(404);
        res.send();
    });
};
exports.contactEmail = functions.https.onRequest((req, res) => {
    const corsOptions = {
        origin: '*',
        allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
        methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
        optionsSuccessStatus: 200
    };
    const corsFn = cors(corsOptions);
    corsFn(req, res, function () {
        contactEmailFn(req, res);
    });
});
