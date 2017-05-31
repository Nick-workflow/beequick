
define(['jquery'],function ($) {
	var obj = {};
	
	obj.clear = function(){
		
		var $clearHistory = $(".removeHistory");
	    var $history = $(".history");
	    
	    $clearHistory.click(function(){
	    	$history.html("");
	    	$(this).html("");
	    });

	}
	
    return obj;
});