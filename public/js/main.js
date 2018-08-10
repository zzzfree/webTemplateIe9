var msb = {
	check_roles: function (m) {
		$('.role', $(m) ).each( function(i, v){ 
			var r = $(v).attr('role'); 
			if( _.contains( user.roles, r) ){ 
				$(v).show();
			}
			else if( r.indexOf('disable') >=0 ){
				$(v).show().attr('disabled', true);
			}
			$(v).removeAttr('role');
		});
	}, 

	loadModule: function (t, m) { 
		var self = this;
		$(t).load( 'modules/'+ m + '.html', function(){
			self.check_roles(m);
			$(this).append($('<style/>').load('modules/'+ m + '.css')) ;
			$.getScript('modules/'+ m + '.js'); 
		} );
	} 
}; // msb