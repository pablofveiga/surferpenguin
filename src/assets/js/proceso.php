<?php

require("class.phpmailer.php");

// Guardar los datos recibidos en variables:
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];
// Definir el correo de destino:
$dest = "pablofveiga@gmail.com"; 
 
// Estas son cabeceras que se usan para evitar que el correo llegue a SPAM:
$headers = "From: $nombre <$email>\r\n";  
 
// Aqui definimos el asunto y armamos el cuerpo del mensaje
$asunto = "Contacto desde la web";
$cuerpo = "Nombre: ".$nombre."<br>";
$cuerpo .= "Email: ".$email."<br>";
$cuerpo .= "Mensaje: ".$mensaje;
 
// Esta es una pequena validación, que solo envie el correo si todas las variables tiene algo de contenido:
if($nombre != '' && $email != '' && $mensaje != ''){
    mail($dest,$asunto,$cuerpo,$headers); //ENVIAR!
}
?>