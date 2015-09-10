/* 
* What would be the OUTPUT of the below code.
*/

(function(){

    var MyNameSpace = {
        name : "Your Name",
        myName : this.name,
        display : function(){
            console.log(this.myName);
        }
    }
    // Return display method and test It wooww man
    return MyNameSpace.display();

}).call();

/*
* What below code is doing ?
*/

function library(module){

	$(function(){
		if(module.init){
			module.init();
		}
	})

	return module;
}

var myLibrary = library(function(){
	return {
		init : function(){
			// Your code goes here
		}
	}
}());
