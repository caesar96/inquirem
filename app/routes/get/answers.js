const router = require('koa-router')();

router.get('/:', async function(app, next) {

});

router.get('/', async function(app, next) {

});

router.use('/', router.routes(), router.allowedMethods());

//console.log(router);

module.exports = {}