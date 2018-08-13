__component__ = function(){
 
 	function init(el, params, cb) { 
 		var self = this;
 		self.el = el;

 		var tpl = params.html;
 		Mustache.parse(tpl);

 		var id = 'dlg-confirm-' + _.uniqueId();
 		self.id = id;
 		params.data.id = id; 

 		$(el).append( $('<div/>').html(  Mustache.render(tpl, params.data ) ) ); 

 		$('#'+ id + ' .btn-primary').click(function () {  
	  		self.confirm && self.confirm();
	  	}); 
	  	cb && cb(this);
 	} 

 	function hide() {
 		$( '#' + this.id ).modal('hide');	
 	} 

 	 function show() {
 		$( '#' + this.id ).modal('show');	
 	}

 	return {
 		init: init,
 		show: show,
 		hide: hide
 	}

}; // END __component__