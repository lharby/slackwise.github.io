$(document).ready(function(){

	// make console logging not break
	if(typeof console === "undefined"){
    	console = { 
			log: function(){} 
		};
  	}
	console.log("js available");

});