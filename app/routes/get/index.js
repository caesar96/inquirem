const myUtil = require(_LIB_ + 'utils');
const Router = require('koa-router');
const root = new Router();

// ROOT ROUT
root.get('/', async function(app) {
    try {
        let faces = await app.controllers.welcome.getFaces();
        title = app.siteSettings.slogan + ' - ' + app.siteSettings.title;
        //app.controllers.welcome.getUserFace('caesar96');
        app.body = app.views.welcome({
            title: title,
            welcome: myUtil.rand(0, 3),
            welcomeFaces: faces,
            Config: app.siteSettings
        });
        //console.log(faces);
    }
    catch (e) {
        app.error400('Error - Inquirem!', 'Error interno ' + e);
        app.status = 500;
        console.log(e);
    }

});

root.get('/:page', async function (app, next) {
	var page = app.params.page;
	if (page in app.views) {
		app.body = app.views[page]( { title: 'Inquirem!', months: myUtil.months, Config: app.siteSettings } );
		return;
	}
	await next();
});
root.get('/home/menu', async function(app) {
	app.body = app.views.menu();
});

root.get('/login/recover', async function(app) {
	app.body = app.views.login_recover({title: 'Inquirem!', Config: app.siteSettings});
});

module.exports = root;