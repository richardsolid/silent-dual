+(function($){

	"use strict";

    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

    if( !MutationObserver ){
    	// browser does not support MutationObserver, bind Edge reproduction to $(document).ready()
    	$(document).ready(function(){
    		AdobeEdge.bootstrapCallback(function(compId) {
	          AdobeEdge.getComposition(compId).getStage().play();
	          //console.log(AdobeEdge.getComposition(compId).getStage().play());
	        });
    	});
    }

    // create new attrchange function based on MutationObserver
    $.fn.attrchange = function(callback) {
        if (MutationObserver) {
            var options = {
                subtree: false,
                attributes: true
            };

            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(e) {
                    callback.call(e.target, e.attributeName);
                });
            });

            return this.each(function() {
                observer.observe(this, options);
            });

        }
    }

    function reloadAnimation( compId ){

    	var comp = AdobeEdge.getComposition(compId);

		if( typeof comp != 'undefined'){
			if( typeof comp.getStage() != 'undefined' ){
				comp.getStage().play();
  				console.log(comp.getStage().play());
			} else {
				setTimeout( function(){ reloadAnimation(compId); }, 500 );
			}
		} else {
			setTimeout( function(){ reloadAnimation(compId); }, 500 );
		}

    }

    // Bind it to .wow
    $('.wow').attrchange(function(attrName){

    	if( attrName == 'class' ){

			var className = $(this).attr('class');

			// If it is an Edge animation
	    	if(className.indexOf('EDGE-') == 0){

		    	if( $(this).hasClass('animated') ){

		    		className = className.split(' ');
		    		var compId = className[0];
		    		var comp = AdobeEdge.getComposition(compId);

		    		if( typeof comp != 'undefined'){
		    			if( typeof comp.getStage() != 'undefined' ){
		    				comp.getStage().play();
	          				//console.log(comp.getStage().play());
		    			} else {
		    				setTimeout( function(){ reloadAnimation(compId) }, 500 );
		    			}
		    		} else {
		    			setTimeout( function(){ reloadAnimation(compId) }, 500 );
		    		}

		    	}

	    	}   

    	}

    });


}(jQuery));