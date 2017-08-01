const Router = require('koa-router');
const profile = new Router({
    prefix: '/:username'
});
//
profile.get('/', _profile_);
profile.get('/answers/(more)?(poll)?', async  function(app) {
    app.status = 403;
    //console.log(app);
});
profile.get('/answers/:answerid', _profile_);
//
async function _profile_(app, next) {
    try {
        let username = app.params.username;
        let answerid = parseInt(app.params.answerid) || 0;
        let title = '';
        let userMatch = await app.controllers.welcome.getFace(username.toLowerCase());
        let userAnswers = {};
        //
        if (!!userMatch) {
            //
            userAnswers = await app.controllers.welcome.getAnswers(userMatch.id, answerid);
            //
            if (!userAnswers && typeof app.params.answerid != 'undefined') {
                app.error400('Respuesta no encontrada', 'Esta respuesta no existe o fue eliminada.');
                return;
            }
            //
            userMatch.t_answers = await app.controllers.welcome.getTotalQuestAnswer(userMatch.id, true);
            //
            title = !!userMatch.fullname ? userMatch.fullname : username;
            title += ' (@' + userMatch.nick + ') — ' + userMatch.t_answers + ' respuestas | Inquirem';
            title = answerid > 0 ? userAnswers.question + ' | ' + app.request.header.host.replace('www.', '') + '/' + userMatch.nick : title;
            //
            app.body = app.views.profile({
                title: title,
                userData: userMatch,
                Answers: userAnswers,
                AnswerId: answerid,
                Config: app.siteSettings
            });
            //console.log(answerid);
        }
        else
            app.error400('Usuario no encontrado', 'El usuario no existe o fue desactivado.');
    }
    catch (e) {
        app.error400('Error - Inquirem!', 'Error interno. ' + e);
        app.status = 500;
        console.log(e);
    }
}
module.exports = profile;