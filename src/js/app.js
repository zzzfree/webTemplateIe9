import css from '../scss/app.css';
var service = require('./services/index'); 

window.msb = {
	check_roles: function (t) {
		$('.role', $(t) ).each( function(i, v){ 
			var r = $(v).attr('role'); 
			if( _.contains( service.user.roles, r) ){ 
				$(v).show();
			}
			else if( r.indexOf('disable') >=0 ){
				$(v).show().attr('disabled', true);
			}
			$(v).removeAttr('role') ;
		});
	},  

	loadModule: function (t,  m) {  
		var self = this;
		$(t).load( 'modules/'+ m + '.html', function(){
			self.check_roles(t);
			$(this).append($('<style/>').load('modules/'+ m + '.css')) ;
			$.getScript('modules/'+ m + '.js'); 
		} );
	} ,

	component: function (id, cmp, data, cb) { 
		$.get('modules/components/' + cmp + '.html',  function (rsp) { 
			data = {
				html: rsp,
				data: data
			};
			$.getScript('modules/components/' + cmp + '.js', function (rsp) {   
				o = new __component__();
				o.init(id, data, cb);
				cb && cb(o);
			});
		});
	},

	grid: function (target, data, columns, options) {
		return new Slick.Grid(target, data, columns, options);
	}, 

	/*
		load template from script template
	*/
	template: function (id, obj) {
		var tpl = $.trim( document.getElementById(id).innerHTML );
		Mustache.parse(tpl);
		return Mustache.render(tpl, obj);
	},

	/*
		load template from remote
	*/
	templates: function (url, obj, cb) {
		$.get( 'templates/' + url + '.html' , function (rsp) {  
			Mustache.parse(rsp);
			cb && cb( Mustache.render(rsp, obj) );
		});
	}
}; // msb


(function ($) {   
    $.urlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
})(jQuery);