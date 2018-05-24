<?php
	$to      = 'aleksandr_1992_15@mail.ru';
	$subject = 'Рехау';
	$message = '<p>Имя: '.$_POST['u_name'].'</p> <p>Телефон: '.$_POST['u_phone'].'</p><p> Регион:'.$_POST['region'].'</p>'; 
	 
	mail($to, $subject, $message);
?>