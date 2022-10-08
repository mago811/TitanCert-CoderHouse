$(document).ready(function(){

  $('.contact-form input').blur(function() {
    if (!$(this).val() ) {
      $(this).removeClass('focus');
    } else {
      $(this).addClass('focus');
    }
  });


  $('.contact-form').submit(function( event ) {
    event.preventDefault();
    $("span.error").remove();
    $(".error").removeClass('error');    
    var hasError = false;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    var email = $("#email").val();
    
    
    // VALIDATIONS
    if(email == '') {
      $("#email").parent().parent().after('<span class="error">Por favor, ingrese su e-mail.</span>');
      $("#email").addClass('error');
      hasError = true;
    } else if(!emailReg.test(email)) {
      $("#email").parent().parent().after('<span class="error">Dirección de e-mail inválida.</span>');
      $("#email").addClass('error');
      hasError = true;
    }   

    
    if(hasError == false) {
      $('.contact-form input').attr("disabled", "disabled");
      $(".contact-form .btn").html('Enviando...').addClass('sending').removeClass('arrow');
      $.post("/sendemail.php",
        { 
          email: email,     

        },
          function(data){            
            $(".contact-form .btn").html('Enviado ✓').removeClass('sending arrow').addClass('sent').parents('form').addClass('sent');
            $(".contact-form .form_items").after("<p><strong>Muchas gracias,</strong> nos contactaremos a la brevedad.</p>");
          }
       );
    }
  }); 


  







});