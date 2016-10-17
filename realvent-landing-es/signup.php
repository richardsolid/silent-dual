<?php

//error_reporting(E_ALL);

require './lib/PHPMailer/PHPMailerAutoload.php';

include( './lib/MailChimp.php'); 
use \DrewM\MailChimp\MailChimp;

$data = $_POST;
//$data = [];
//parse_str( file_get_contents( 'php://input' ), $data );

$MailChimp = new MailChimp('c3d8ec897cce3bafaccc4cb14dbff70f-us9');
$result = $MailChimp->post('lists/cec226cbb7/members',array(
	'status' => 'subscribed',
	'email_address' => $data['email_address'],
	'merge_fields' => $data['merge_fields']
));



$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'erpsolerpalau@gmail.com';                 // SMTP username
$mail->Password = 'S01erP4lau';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('erpsolerpalau@gmail.com', 'ErP Soler&Palau');
$mail->addAddress('erp@solerpalau.com', 'ErP Soler&Palau');
$mail->addReplyTo($data['email_address'], $data['merge_fields']['FNAME'] . ' ' . $data['merge_fields']['LNAME']);

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Message sent from ErP microsite';
$mail->Body    = '<strong>Name</strong>: '. $data['merge_fields']['FNAME'] . ' ' . $data['merge_fields']['LNAME'] . '<br>' .
				 '<strong>Email</strong>: ' . $data['email_address'] . '<br>' .
				 '<strong>Company</strong>: ' . $data['merge_fields']['MMERGE4'] . ' <br>' .
				 '<strong>Job title</strong>: ' . $data['merge_fields']['MMERGE19'] . ' <br><br>' .
				 '<strong>Message</strong>: <br>' . $data['message'] . '<br><br>'.
				 '--<br> Message sent from the contact form in the S&P ErP microsite';

if(!$mail->send()) {
    $result['mail'] = false;
} else {
    $result['mail'] = true;
}


echo json_encode($result);