var emailClient = (function(){
	'use strict';

	// Instance Variable
	var _instance;
	
	function init(){

		// Validate email address
		function isEmailValid (emailAdd){
			if(emailAdd){
				return true
			}else{
				return false;
			}
		}

		// Validate email configuration
		function isValidConfig(objEmailConfi){
			if(objEmailConfi){
				return true;
			}else{
				return false;
			}
		}

		return {
			// Expose method which we want to use through well defined known point of access
			sendEmail : function(objConfig){
				if(isValidConfig(objConfig)){
					console.log("Email has been sent to recipient successfully at : " + objConfig.toEmail);
				}else{
					console.log("Invalid email configuration");
				}
				
			},

			validateEmail : function(email){
				if(isEmailValid(email)){
					console.log("Provided email address is valid");
				}else{
					console.log("Provided email address is not valid");
				}
			}
		}
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
})();


// emailClient instance for sending email
var googleEmailClient = emailClient.getInstance();
    googleEmailClient.sendEmail({toEmail:'nihantanu2010@gmail.com', 
								 fromEmail: 'callmefool@outlook.com',
								 subject: 'greeting'
								});

// emailClient instance for validating email
var validate = emailClient.getInstance();
	validate.validateEmail('nihantanu2010@gmail.com');

// check is both instance are similar or not 
console.log(googleEmailClient === validate); // output true



