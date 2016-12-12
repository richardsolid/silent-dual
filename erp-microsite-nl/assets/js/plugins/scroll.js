+function($){

  $('.navigation a').click(function(){
    var obj = $($(this).attr('href'));
    $('html, body').animate({scrollTop: obj.offset().top},'slow');
  });

}(jQuery);