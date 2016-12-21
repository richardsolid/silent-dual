(function($){

  $('#form').validator().on('submit', function (e) {
	if (!e.isDefaultPrevented()) { // if e has not been prevented, form data is valid
	  e.preventDefault();
	  var data = {
	  	"status": "subscribed",
	  	"email_address": $('#inputEmail').val(),
	  	"merge_fields": {
	  		"FNAME": $('#inputName').val(),
	  		"LNAME": $('#inputSurname').val(),
	  		"MMERGE4": $('#inputCompany').val(),
	  		"MMERGE19": $('#inputJobTitle').val()
	  	},
	  	"message": $('#txtMessage').val()
	  };
	  $(document).ajaxStart(function(){
		$('#btnSubmit').prop("disabled", true);
		//$('.loading-image').fadeIn();
	  }).ajaxStop(function(){
		$('#btnSubmit').prop("disabled", false);
		//$('.loading-image').fadeOut();
	  });
	  $.ajax({
	  	url: 'signup.php',
	  	method: 'POST',
	  	data: data
	  })
	  .done(function(answer){
	  	//$('.video .form .alert').remove();
	  	//console.log(answer);
	  	var obj = $.parseJSON(answer);
	  	if( obj['status'] == "subscribed" && obj['mail'] || obj['status'] == 400 && obj['title'] == "Member Exists" && obj['mail'] ) { // is subscribed
	  		//show_video();
	  		$('#contact .container').html('<div style="text-align:center;"><img src="assets/img/form-sent.png" alt="Form sent" style="display:block;margin-left:auto;margin-right:auto;margin-bottom:20px;"><p style="font-size:28px;margin-bottom:20px;">Message sent</p><p>We will contact you <br>as soon as possible.</p>');
	  	} else {
	  		$('#form').prepend('<div class="alert alert-danger">No hemos podido procesar su solicitud, vuelva a intentarlo</div>')
	  		//console.log(answer);
	  	}
	  })
	  .error(function(answer){
	  	//$('.video .form .alert').remove();
	  	$('#form').prepend('<div class="alert alert-danger">No hemos podido procesar su solicitud, vuelva a intentarlo</div>')
	  	//console.log(answer);
	  });
	}
  })
})(jQuery);