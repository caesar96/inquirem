const myUtil = require(_LIB_ + 'utils');
const dbManager = require(MODELS + 'dbConnect');
const fs = require('fs');
const siteSettings = require(MODELS + 'config');

module.exports = {
    getUserFace: function(username = 'guest') {
        //
        let image = {};
        let dirList = [];
        //
        image.avatar = '';
        image.background = '';
        //
        try {
            dirList = fs.readdirSync(IMG_UPLOADS + username);
            if (!!dirList) {
                for (let fileName of dirList) {
                    if (/^avatar_/.test(fileName)) {
                        image.avatar = fileName.replace('avatar_', '');
                    }
                    if (/^background_/.test(fileName)) {
                        image.background = fileName.replace('background_', '');
                    }
                }

                //console.log(image);
                return image;
            }
        }
        catch (e) {
            return null;
        }

    },
    getAnswers: function(userid, answerid = false) {
        let rows = null;
        let row = null;
        const sql = 'SELECT q.question, q.userId, q.anonQuest, a.id  as answerId, a.answer, a.date FROM questions q, answers a WHERE ';
        let where = `q.toUserId = '${userid}' AND a.userId = q.toUserId AND q.id = a.questionId AND q.activated = '1' ORDER BY a.id DESC`;
        where = answerid ? `q.toUserId = '${userid}' AND a.userId = q.toUserId AND q.id = a.questionId AND a.id = '${answerid}' AND q.activated = '1' ORDER BY a.id DESC LIMIT 1` : where;
        //console.log(sql + where);
        return dbManager.query(sql + where).then((result) => {
            rows = result.rows;
            if (rows.length > 0) {
                if (answerid) {
                    row = rows[0];
                    row.date_full = myUtil.strftime("%d de %B del %Y  a las %I:%M %p", row.date);
                    row.date = myUtil.dateAgo(row.date);
                    return row;
                }
                for (let row in rows) {
                    rows[row].date_full = myUtil.strftime("%d de %B del %Y  a las %I:%M %p", rows[row].date);
                    rows[row].date = myUtil.dateAgo(rows[row].date);

                }
                return rows;
            }
            //
            return null;
        });
    },
    getTotalQuestAnswer: function(id, answer = false) {
        let item = {};
        let sql = '';
        id = parseInt(id);
        item['table'] = answer ? 'answers' : 'questions';
        item['where'] = answer ? `userId = '${id}' ` : `toUserId = '${id}' AND activated = '0' `;
        sql = `SELECT COUNT('id') AS total FROM ${item['table']} WHERE ${item['where']} `;
        return dbManager.query(sql).then((result) => {
            return result.rows[0].total;
        });
    },
    getFace: function(value) {
        let self = this;
        let userImg = {};
        let row = null;
        let where = `LOWER(nick) = LOWER('${value}') AND activated = '1' `;
        return dbManager.query('SELECT id, nick, fullname, bio, location, webSites, signupDate, birthDate FROM users WHERE ' + where + ' LIMIT 1').then((result) => {
            row = result.rows[0] || {};
            if (!!row.nick && row.nick.toLowerCase() == value.toLowerCase()) {
                userImg = self.getUserFace(row.nick.toLowerCase());
                if (!!userImg) {
                    userImg.avatar && ( row.avatar = siteSettings.staticFilesUrl + '/u/' + row.nick.toLowerCase() + '/avatar/' + userImg.avatar);
                    userImg.background && ( row.background = siteSettings.staticFilesUrl + '/u/' + row.nick.toLowerCase() + '/background/' + userImg.background );
                    userImg.avatar && (row.thumb_avatar = siteSettings.staticFilesUrl + '/u/' + row.nick.toLowerCase() + '/avatar/thumb/' + userImg.avatar);
                    userImg.background && ( row.thumb_background = siteSettings.staticFilesUrl + '/u/' + row.nick.toLowerCase() + '/background/thumb' + userImg.background );
                }
                row.fechaRegistro = myUtil.strftime("%d de %B del %Y  a las %I:%M %p", row.signupdate);
               //console.log (row);
                return row;
            }
            return null;
        });
    },
    getFaces: function() {
        let self = this;
        let rows = null;
        let userImg = {};
        return dbManager.query('SELECT nick FROM users WHERE activated = true ORDER BY random() LIMIT 13').then((result) => {
            rows = result.rows;
            for (let row in rows )
            {
                userImg = self.getUserFace(rows[row].nick.toLowerCase());
                if (!!userImg) {
                    userImg.avatar && ( rows[row].avatar = siteSettings.staticFilesUrl + '/u/' + rows[row].nick.toLowerCase() + '/avatar/' + userImg.avatar);
                    userImg.background && ( rows[row].background = siteSettings.staticFilesUrl + '/u/' + rows[row].nick.toLowerCase() + '/background/' + userImg.background );
                    userImg.avatar && (rows[row].thumb_avatar = siteSettings.staticFilesUrl + '/u/' + rows[row].nick.toLowerCase() + '/avatar/thumb/' + userImg.avatar);
                    userImg.background && ( rows[row].thumb_background = siteSettings.staticFilesUrl + '/u/' + rows[row].nick.toLowerCase() + '/background/thumb' + userImg.background );
                }
            }
            return rows;
        });
    }
}