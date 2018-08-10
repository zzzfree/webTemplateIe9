var user = {
	roles: [],
	login: function(){
		// TODO: set roles after login
		this.roles = [
			'/mpage/#edit'
		];
	},

	lock: function (id) {
		alert( 'lock : ' + id );
	},

	unlock: function () {
		
	}, 

	enable: function () {
		
	},

	disable: function () {
		
	},
}// user