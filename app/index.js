// KOA
const Koa = new (require('koa'));
// KOA ROUTER
const Router = require('koa-router');
// KOA ROUTER
const KoaBody = require('koa-body');
// CUSTOM ROUTES OBJECTS
const Routes = require(ROUTES.ROOT);
// TEMPLATE ENGINE
const Templates = require(_LIB_ + 'jtml')({html_dir: VIEWS, cache: (process.env.NODE_ENV == 'production')});
// CONTROLLERS
const Controllers = require(CONTROLLERS);
// SITE SETTINGS
const siteSettings = require(MODELS + 'config');

// SETTING UP VARS
Koa.context.controllers = Controllers;
Koa.context.views = Templates;
Koa.context.siteSettings = siteSettings;

// SETTING UP MIDDLEWARES
Koa.use(async function(app, next) {
    app.error400 = function (title = 'Página no encontrada - Inquirem!', error = 'Página no encontrada') {
        app.status = 404;
        app.body = app.views.error({title: title, error: error, Config: app.siteSettings});
    }
    if (app.siteSettings.offline.status)
        app.error400('Mantenimiento', app.siteSettings.offline.message);
    else
        await next();
});
Koa.use(KoaBody());
Koa.use(Routes.routes());
Koa.use(async function(app) {
	app.error400();
});

//
module.exports = Koa;