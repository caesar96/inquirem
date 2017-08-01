//
const myUtil = require(_LIB_ + 'utils');
//
class Signup {
	constructor (dbManager) {
		this.dbManager = dbManager || {};
		this.information = {};
		this._fieldsMessage_ = require (MODELS + '_signup/fieldsMessage');
		this.information.fields = [];
		this.information.error = '';
		this.errorMessages = require (MODELS + '_signup/errorMessages');
	}
	// Insert user data into DB
	save (data) {

	}
	//
	checkData (data) {
		if (!myUtil.isObject(data)) {
			console.log('data no es un objeto');
			this.information.error = 'Error desconocido';
			return false;
		}
		//
		let user = {};
		this.information.fields.length = 0;
		this.information.error = '';
		//
		for (let key in data) {
			user[key] = myUtil._escape_(data[key]);
			if (myUtil.empty(user[key])) {
				if (myUtil.empty(this.information.error)) this.information.error = this._fieldsMessage_[key];
				this.information.fields.push('user[' + key + ']');
			}
		}
		//
		if (!myUtil.empty(this.information.fields) && !myUtil.empty(this.information.error)) {
			return false;
		}
		//
		console.log('Todos los campos han sido ingresados');
		//
		return true;
	}

	checkUserName (userName = '') {
		if (userName.length < 3) {
			this.information.fields.length = 0;
			this.information.suggestions = [];
			this.information.error = this.errorMessages['userNameLength'];
			return false;
		}
		return true;
	}

	checkEmail (email) {
		if (!myUtil.isValidEmail(email)) {
			this.information.fields.length = 0;
			this.information.suggestions = [];
			this.information.error = this.errorMessages['notValidEmail'];
			return false;
		}
		return true;
	}

	isUserNameAvailable (userName = 'guess_user') {
		let row = null;
		return this.dbManager.query(`SELECT nick FROM users WHERE LOWER(nick) = LOWER('${userName}')`).then((result) => {
			row = result.rows[0] || {};
			if (!!row.nick && row.nick.toLowerCase() == userName.toLowerCase()) {
				this.information.fields.length = 0;
				this.information.error = this.errorMessages['userNameAvailable'];
			}
			return (!row.nick);
		});
	}

	isEmailAvailable (email = '') {
		return this.dbManager.query(`SELECT email FROM users WHERE LOWER(email) = LOWER('${email}')`).then((result) => {
			let rows = result.rows[0] || {};
			if (!!rows.u_email && rows.u_email.toLowerCase() == email.toLowerCase()) {
				this.information.fields.length = 0;
				this.information.error = this.errorMessages['emailAvailable'];
			}
			return (!rows.u_email);
		});

	}
}

/*function SIGNUP (dbManager) {
	this.dbManager = dbManager || {};//throw new Error('Must pass an dbManager object');
}
SIGNUP.prototype.suggest = function(UserOrEmail, type, callback) {
		isFunction(type) && (callback = type) && (type = 0);
		!!UserOrEmail && (UserOrEmail.length <  3) && callback ({suggestions:[], error:'Inicio de sesión no válido'});
		( (!!UserOrEmail && UserOrEmail.length >= 3) && type == 0) && this.userNameAvailable(UserOrEmail, function(isAvailable, error) {
			//console.log(isAvailable);
				if (!!error) {
					callback ({error: 'Hubo un error al recuperar información'});
				}
				else if (!isAvailable) {
					SIGNUP.prototype.isUserNameAvailable = false;
					callback ({suggestions: [], error: 'Este nombre de usuario ya se está usando. ¡Elige otro!'});
				}
				else {
					SIGNUP.prototype.isUserNameAvailable = true;
					callback({suggestions:[UserOrEmail]});
				}
		});

		(!!UserOrEmail && type == 1 && !this.isValidEmail(UserOrEmail)) && callback ({suggestions:[], error:'¡Correo electrónico no valido!'});
		(!!UserOrEmail && type == 1 && this.isValidEmail(UserOrEmail)) && this.userEmailAvailable(UserOrEmail);
}*/
module.exports = Signup;