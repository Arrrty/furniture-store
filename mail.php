<?php

function console_log($data){
	if(is_array($data) || is_object($data)){
		echo("<script>console.log('php_array: ".json_encode($data)."');</script>");
	} else {
		echo("<script>console.log('php_string: ".$data."');</script>");
	}
}


$method = $_SERVER['REQUEST_METHOD'];

$admin_email = 'arty49464@gmail.com';

$message;

foreach ( $_GET as $key => $value ) {
		$message .= "
		" . "<tr>
			<td style='padding: 10px; width: auto;'><b>$key:</b></td>
			<td style='padding: 10px;width: 100%;'>$value</td>
		</tr>
		";
}

$message = "<table style='width: 50%;'>$message</table>";

$message = wordwrap($message, 70, "\r\n");

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// function adopt($text) {
// 	return '=?UTF-8?B?'.Base64_encode($text).'?=';
// }

// $headers = "MIME-Version: 1.0" . PHP_EOL .
// "Content-Type: text/html; charset=utf-8" . PHP_EOL .
// 'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
// 'Reply-To: '.$admin_email.'' . PHP_EOL;

if (mail($admin_email, 'Заказ!', $message, $headers)) {
	exit('Сообщение отправлено!');
} else {
	exit('Сообщение не отправлено!');
}
