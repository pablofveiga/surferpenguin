// sendForm()    Formulario
function sendForm() {
	$(".boton_envio").click(function(e) {
	    e.preventDefault();

	    var nombre = $(".nombre").val();
	        email = $(".email").val();
	        validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	        mensaje = $(".mensaje").val();

	    if (nombre == "") {
	        $(".nombre").focus();
	        $(".nombre").parent().prepend("<span class='inputError'>Please type a valid name</span>");
	        $(".inputError").fadeOut(3000);        
	        return false;
	    }else if(email == "" || !validacion_email.test(email)){
	        $(".email").focus();    
	        $(".email").parent().prepend("<span class='inputError'>Please type a valid email</span>");
	        $(".inputError").fadeOut(3000);
	        return false;
	    }else if(mensaje == ""){
	        $(".mensaje").focus();        
	        $(".mensaje").parent().prepend("<span class='inputError msgError'>Please write something</span>");
	        $(".inputError").fadeOut(3000);
	        return false;
	    }else{
	        $('.ajaxgif').removeClass('hide');
	        var datos = 'nombre='+ nombre + '&email=' + email + '&mensaje=' + mensaje;
	        $.ajax({
	            type: "POST",
	            url: "proceso.php",
	            data: datos,
	            success: function() {
	                $('.ajaxgif').hide();
	                $('.msg').text('Message sent!').addClass('msg_ok').fadeOut(5000);  
	                $(".sentMsg").addClass("visible");
	            },
	            error: function() {
	                $('.ajaxgif').hide();
	                $('.msg').text('Something went wrong...').addClass('msg_error').fadeOut(5000);
	            }
	        });
	        document.getElementById("form").reset();
	        return false;
	    }
	});
}

// ## MOBILE ONLY FUNCTIONS - LAUNCHER
$(document).ready(function() {
	sendForm();
});


