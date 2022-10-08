<!-- Form taken from http://trevordavis.net/blog/ajax-forms-with-jquery -->

<?php

$emailFrom = $_POST['email'];
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'Reply-To: <'.$emailFrom.'>' . "\r\n";
$emailTo = "nico@szstudios.net";
$subject = "Contacto desde TitanCert Web";

$mensaje = <<<MAIL


Email: {$_POST['email']}

MAIL;

mail($emailTo, $subject, $mensaje, $headers);
?>