#!/usr/bin/env nodemon
global.ROOT = __dirname + '/';
global._APP_ = ROOT + 'app/';
global._LIB_ =  _APP_ +  'lib/';
global.MODELS = _APP_ + 'models/';
global.CONTROLLERS = _APP_ + 'controllers/';
global.ROUTES = {};
global.ROUTES.ROOT = _APP_ + 'routes/';
global.ROUTES.GET = _APP_ + 'routes/get/';
global.ROUTES.POST = _APP_ + 'routes/post/';
global.VIEWS = _APP_ + 'views/';
global._DATABASE_ = MODELS + '_database/';
global.IMG_UPLOADS = ROOT + 'assets/uploads/images/users/';

// Include App Controller ((Koa))
const app = require(_APP_);

// Starting the HTTP server
app.listen(process.env.PORT || 5000, () => {
    !(process.env.NODE_ENV == 'production') && console.log("Running on port ", process.env.PORT || 5000);
});