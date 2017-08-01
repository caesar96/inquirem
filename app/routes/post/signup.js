const Router = require('koa-router');
const signup = new Router();

signup.post('/signup', async function(app) {
	try {
		const result = await app.controllers.signup.register(app.request.body.user);
		app.set('Content-Type', 'application/json');
		app.body = result;
		//console.log(result);
	}
	catch (e) {
		console.log("error: " + e);
	}
});
signup.post('/signup/suggest', async function(app) {
	try {
		const result = await app.controllers.signup.suggest(app.request.body.user);
		//
		app.set('Content-Type', 'application/json');
		app.body = result;
		//
		//console.log(result);
	}
	catch (e) {
		console.log("error: " + e);
	}
});

module.exports = signup;
