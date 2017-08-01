jQuery(function($) {
	var Form = $("#signupForm");
	var Signup = SIGNUP.mk(Form, $);
	Signup.submit();
});

var SIGNUP = {
	form: null,
	jQuery: null,
	mk: function (formElementjQ, jQuery) {
		this.form = formElementjQ;
		this.jQuery = jQuery;
		return this;
	},
	submit: function() {
		var self = this;
		this.form.on('submit', function(e) {
			e.preventDefault();
			Ajax.post(self.form.serialize(), function(data) {
				console.log(data);
				self.dataHandler();
			});
		});		
	},
	dataHandler: function(data) {
		ShowMessages();
	}
};

var ShowMessages = function(message, type) {
	type = type || 'error';
	message = message || 'Unknown';
	var htmlElement = $(".flash-message");
	htmlElement.show().fadeOut(1000*10);
}

var Ajax = {
	options: {},
	post: function(data, callback) {
		this.ajax('POST', callback, data);
	},
	get: function(data, callback) {
		this.ajax('GET', callback, data);
	},
	ajax: function(method, callback, data) {
		this._ajax_(window.location.href, data, method, callback);		
	},
	_ajax_: function(url, dataSerialized, method, callback) {
		var options = {
			url: url,
			type: method,
			dataType: "json",
			data: dataSerialized
		};
		$.ajax(options)
								.done(callback)
								.fail(function(xhr, status, errorThrown) {
								    console.log( "Sorry, there was a problem!" );
								    console.log( "Error: " + errorThrown );
								    console.log( "Status: " + status );
								    console.dir( xhr );
								})
								.always(function(xhr, status) {
									console.log( "The request is complete!" );
								});		
	}
};