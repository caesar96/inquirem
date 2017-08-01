// Filesystem
const myUtil = require(_LIB_ + 'utils');
// Koa Router
const Router = require('koa-router');
const routes = Router();
let _routes_ = {};

//
_routes_.get = myUtil.getRoutes(ROUTES.GET);
_routes_.post = myUtil.getRoutes(ROUTES.POST);

//
for (router in _routes_.get) {
	routes.use('', _routes_.get[router].routes());
}
for (router in _routes_.post) {
	routes.use('', _routes_.post[router].routes());
}

//
//console.log(routes);

//
module.exports = routes;



