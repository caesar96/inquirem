class MyUtil {
	constructor() {

	}
	static getPromisedVal () {
		return promise = new Promise(function (resolve, reject) {

		});
	}

	static strftime(string, date) {
		const strftime = require(_LIB_ + 'strftime');
		var strftimeEsMX = strftime.localizeByIdentifier('es_MX');
		return strftimeEsMX(string, date);
	}

	static dateAgo(date) {
		//
		date = (new Date(date)).getTime();
		//
		let now = (new Date()).getTime();
		let time = (now / 1000) - (date / 1000);
		let ago = '';
		let amount = 0;
		let word = '';
		let months = 0;
		let years = 0;
		//
		let days = Math.round(time / 86400);
		// HOY
		if(days <= 0) {
			// HACE MENOS DE 1 HORA
			if(Math.round(time / 3600) <= 0){
				// HACE MENOS DE 1 MINUTO
				if(Math.round(time / 60) <= 0) {
					if(time <= 60) { ago = "Hace unos segundos"; }
				// HACE X MINUTOS
				} else  {
					amount = Math.round(time / 60);
					if(amount <= 1) {    word = "minuto"; } else { word = "minutos"; }
					ago = 'Hace ' + amount + ' ' + word;
				}
			// HACE X HORAS
			} else {
				amount = Math.round(time / 3600);
				if(amount <= 1) {    word = "hora."; } else {    word = "horas"; }
				ago = 'Hace ' + amount + ' ' + word;
			}
		}
		// MENOS DE 7 DIAS
		else if(days <= 30){
			// AYER
			if(days < 2){
				ago = 'Ayer';
			// HACE MENOS DE 5 DIAS
			} else {
				ago = 'Hace ' + days + ' d&iacute;as';
			}
		// HACE MAS DE UNA SEMANA
		} else{
			months = Math.round(time / 2592000);
			if(months == 1) ago = 'M&aacute;s de 1 mes';
			else if(months < 12) {
				ago = 'Hace m&aacute;s de ' + months + ' meses';
			} else {
				years = Math.round(time / 31536000);
				if(years == 1) ago = 'Hace m&aacute;s de un a&ntilde;o.';
				else ago = 'Hace m&aacute;s de ' + years + ' a&ntilde;os';
			}
		}
		//
		return ago;
	}

	static get months() {
		return ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
	}

	static rand(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	static	getControllers (_DIR_CONTROLLERS) {
		const fs = require('fs');
		const controllers = fs.readdirSync(_DIR_CONTROLLERS);
		let controllerList = {};
		controllers.forEach((controller) => {
			controller = controller.replace(/(\.\w+$)/gi, "");
			if (controller != 'index') {
				controllerList[controller] = require(_DIR_CONTROLLERS + controller);
			}
		})
		return controllerList;
	}

	static getRoutes(_DIR_ROUTES_ = '') {
		const fs = require('fs');
		const routers = fs.readdirSync(_DIR_ROUTES_);
		let routersList = {};
		routers.forEach((router) => {
			let _router_ = require(_DIR_ROUTES_ + router);
			if (!!_router_.routes) {
				routersList[router.replace(/(\.\w+$)/gi, "")] = _router_;
			}
		})
		return routersList;
	}

	/* UTILITIES FUNCTIONS */
	static isValidEmail(email) {
		email = email || '';
		return /(\w+)@(\w+)\.\w\w\w?/.test(email);
	}
	static isArray(arr) {
	    return Object.prototype.toString.apply(arr) === '[object Array]';
	}
	static isObject(obj) {
	    return obj instanceof Object;
	}
	static isFunction(func) {
	    return typeof func === 'function';
	}
	static _escape_(string) {
		var regex = new RegExp(/[\0\x08\x09\x1a\n\r"'\\\%]/g)
		var escaper = function escaper(char){
		    var m = ['\\0', '\\x08', '\\x09', '\\x1a', '\\n', '\\r', "'", '"', "\\", '\\\\', "%"];
		    var r = ['\\\\0', '\\\\b', '\\\\t', '\\\\z', '\\\\n', '\\\\r', "''", '""', '\\\\', '\\\\\\\\', '\\%'];
		    return r[m.indexOf(char)];
		};
		string = string.replace(regex, escaper);
	    return string
				.replace(/&/g, '&amp;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				.replace(/"/g, '&quot;');
	}
	static empty (mixedVar) {
		//  discuss at: http://locutus.io/php/empty/
		// original by: Philippe Baumann
		//    input by: Onno Marsman (https://twitter.com/onnomarsman)
		//    input by: LH
		//    input by: Stoyan Kyosev (http://www.svest.org/)
		// bugfixed by: Kevin van Zonneveld (http://kvz.io)
		// improved by: Onno Marsman (https://twitter.com/onnomarsman)
		// improved by: Francesco
		// improved by: Marc Jansen
		// improved by: Rafał Kukawski (http://blog.kukawski.pl)
		//   example 1: empty(null)
		//   returns 1: true
		//   example 2: empty(undefined)
		//   returns 2: true
		//   example 3: empty([])
		//   returns 3: true
		//   example 4: empty({})
		//   returns 4: true
		//   example 5: empty({'aFunc' : function () { alert('humpty'); } })
		//   returns 5: false
		var undef, key, i, len
		var emptyValues = [undef, null, false, 0, '', '0']
		//
		for (i = 0, len = emptyValues.length; i < len; i++) if (mixedVar === emptyValues[i]) return true;
		//
		if (typeof mixedVar === 'object') {
			for (key in mixedVar) if (mixedVar.hasOwnProperty(key)) return false;
			return true;
		}
		return false;
	}
}

module.exports = MyUtil;