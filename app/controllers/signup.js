const dbManager = require(MODELS + 'dbConnect');
const _signup = require(MODELS + 'signup');
const Signup = new _signup(dbManager);
module.exports = {
	register: async function (data) {
		if (!Signup.checkData(data)) {
			return Promise.resolve(Signup.information);
		}

		if (!Signup.checkUserName(data.login)) {
			return Promise.resolve(Signup.information);
		}
		if (!Signup.checkEmail(data.email)) {
			return Promise.resolve(Signup.information);
		}
		if ( !( await Signup.isUserNameAvailable(data.login) ) ) {
			return Promise.resolve(Signup.information);
		}
		else if ( !( await Signup.isEmailAvailable(data.email) ) ) {
			return Promise.resolve(Signup.information);
		}

		//return Signup.save(data);*/
		return Promise.resolve({
			error: "Te has registrado con exito xD"
		});
	},
	suggest: async function(data) {
		var lastUserName = '';
		//res.send('{"suggestions":["juliocsar7","juliocsar6","juliocsar5","juliocsar4","juliocsar3","juliocsar2","juliocsar1","cesarlp96171","juliocsar9","juliocsar8"]}');
		user = data || null;
		//console.log(user);
		if (!!user.login && user.login != lastUserName) {
			lastUserName = user.login;
			if (!Signup.checkUserName(data.login)) {
				return Promise.resolve(Signup.information);
			}
			if ( !( await Signup.isUserNameAvailable(data.login) ) ) {
				return Promise.resolve(Signup.information);
			}
			else {
				return Promise.resolve({"suggestions":[user.login, user.login + 'LOGIN']});
			}
		}
		if ( (!!user.name || !! user.email) && (user.login == lastUserName) ) {
			if (!Signup.checkEmail(data.email)) {
				return Promise.resolve(Signup.information);
			}
			if ( !( await Signup.isEmailAvailable(data.email) ) ) {
				return Promise.resolve(Signup.information);
			}
			else {
				return Promise.resolve({"suggestions":["juliocsar7","juliocsar6","juliocsar5","juliocsar4","juliocsar3","juliocsar2","juliocsar1","cesarlp96171","juliocsar9","juliocsar8"]});
			}
		}
	}
}