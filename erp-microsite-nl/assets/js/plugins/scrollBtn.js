+function($){
    
    var pagePositon = 0,
        sectionsSeclector = '.section-scroll',
        $scrollItems = $(sectionsSeclector),
        offsetTolorence = 30,
        pageMaxPosition = $scrollItems.length;
    
    //Map the sections:
    $scrollItems.each(function(index,ele) { $(ele).attr("debog",index).data("pos",index); });

    // Bind to scroll
    $(window).bind('scroll',upPos);
    
    //Move on click:
    $('.scrolldown-btn').click(function(e){
        if ($(this).hasClass('next') && pagePositon <= pageMaxPosition) {
            pagePositon++;
            $('html, body').stop().animate({ 
                  scrollTop: $scrollItems.eq(pagePositon).offset().top
            }, 300);

            if (pagePositon == pageMaxPosition){
	        	$('.scrolldown-btn').removeClass('next').addClass('previous');
	        }
        }
        if (pagePositon+1 == pageMaxPosition) {
            $('.scrolldown-btn').removeClass('next').addClass('previous');
        }

        if($(window).scrollTop() + $(window).height() == $(document).height()) {
	       $('html, body').stop().animate({ 
                  scrollTop: 0
              }, 300);

            $('.scrolldown-btn').removeClass('previous').addClass('next');
            return false;
	   }
        
    });
    
    //Update position func:
    function upPos(){
       var fromTop = $(this).scrollTop();
       var $cur = null;
        $scrollItems.each(function(index,ele){
            if ($(ele).offset().top < fromTop + offsetTolorence) $cur = $(ele);
        });
       if ($cur != null && pagePositon != $cur.data('pos')) {
           pagePositon = $cur.data('pos');
       }               
    } 
    

}(jQuery);