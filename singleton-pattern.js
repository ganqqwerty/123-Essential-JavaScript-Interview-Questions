var emailClient = (function(){
	'use strict';

	// Instance Variable
	var _instance;

	function init(){
		
	}

    // return single instance
	return {
		getInstance : function(){
			if(!_instance){
				_instance = init();
			}
			return _instance;
		}
	}
})