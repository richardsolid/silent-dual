+(function($){

	"use strict";

	$(document).ready(function() {
	    $(".link-row").click(function() {
	        window.open($(this).data("url"),'_blank');
	    });
	});

}(jQuery));