//
const Router = require('koa-router');
//
const account = new Router();
const settings = new Router({prefix: '/settings'});
const notifications = new Router({prefix: '/notifications'});
//

// |----------------------------- /account URL --------------------------------|

// Preguntas / Questions : /account/inbox
account.get('/inbox', async function(app) {
	app.body = 'Probando la ruta: /account/inbox';
});

// Amigos / Friends : /account/friends
account.get('/friends', async function(app) {
	app.body = 'Probando la ruta: /account/friends';
});

// Wall / Muro : /account/wall
account.get('/wall', async function(app) {
	app.body = app.views.wall({title: 'Inquirem!'});
});

// Discover : /account/discover
account.get('/discover', async function(app) {
	app.body = 'Probando la ruta: /account/discover';
});

// |----------------------------- /account/settings URL --------------------------------|

// Perfil / Profile : /account/settings/profile
settings.get('/profile', async function(app) {
	app.body = 'Probando la ruta: /account/settings/profile';
});

// Notificaciones / Notifications : /account/settings/notifications
settings.get('/notifications', async function(app) {
	app.body = 'Probando la ruta: /account/settings/notifications';
});

// Redes Sociales / Social Networks : /account/settings/services
settings.get('/services', async function(app) {
	app.body = 'Probando la ruta: /account/settings/services';
});

// Cuenta / Account : /account/settings/account
settings.get('/account', async function(app) {
	app.body = 'Probando la ruta: /account/settings/account';
});

// |----------------------------- /account/notifications URL --------------------------------|

// Raiz /account/notifications
notifications.get('/', async function(app) {
	app.body = 'Probando la ruta: /account/notifications';
});

// Preguntas / Questions : /account/notifications/questions
notifications.get('/questions', async function(app) {
	app.body = 'Probando la ruta: /account/notifications/questions';
});

// Me gusta / Likes : /account/notifications/likes
notifications.get('/likes', async function(app) {
	app.body = 'Probando la ruta: /account/notifications/likes';
});

// Respuestas / Answers : /account/notifications/answers
notifications.get('/answers', async function(app) {
	app.body = 'Probando la ruta: /account/notifications/answers';
});

// /account
account.use('/account', account.routes(), settings.routes(), notifications.routes());
//console.log(account);

module.exports = account;