<?php

require_once('phpmailer/class.phpmailer.php');
require_once('phpmailer/class.smtp.php');
require_once('config/EmailConfig.php');

$mailConfig = new EmailConfig();
$mail = new PHPMailer();

$mail->SMTPDebug = 0;                                 // Enable verbose debug output
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->Host = $mailConfig->getHost();                // Specify main and backup SMTP servers
$mail->Username = $mailConfig->getUsername();         // SMTP username
$mail->Password = $mailConfig->getPassword();                     // SMTP password

$mail->CharSet = 'UTF-8';

$message = "";
$status = "false";

if( $_SERVER['REQUEST_METHOD'] == 'POST' ) {
    if( $_POST['form_name'] != '' AND $_POST['form_email'] != '' AND $_POST['form_subject'] != '' ) {

        $name = $_POST['form_name'];
        $email = $_POST['form_email'];
        $subject = $_POST['form_subject'];
        $phone = $_POST['form_phone'];
        $message = $_POST['form_message'];

        $subject = isset($subject) ? $subject : 'New Message | Contact Form';

        $botcheck = $_POST['form_botcheck'];

        $toemail = $mailConfig->getUsername(); // Your Email Address
        $toname = $mailConfig->getName(); // Your Name

        if( $botcheck == '' ) {

            $mail->SetFrom( $toemail , $toname );
            $mail->AddReplyTo( $email , $name );
            $mail->AddAddress( $toemail , $toname );
            $mail->Subject = $subject;

            $name = isset($name) ? "Name: $name<br><br>" : '';
            $email = isset($email) ? "Email: $email<br><br>" : '';
            $phone = isset($phone) ? "Phone: $phone<br><br>" : '';
            $message = isset($message) ? "Message: $message<br><br>" : '';

            $referrer = $_SERVER['HTTP_REFERER'] ? '<br><br><br>This Form was submitted from: ' . $_SERVER['HTTP_REFERER'] : '';

            $body = "$name $email $phone $message $referrer";

            $mail->MsgHTML( $body );

            $sendEmail = $mail->Send();

            if( $sendEmail == true ):
                $message = 'Nós <strong>recebemos</strong> seu e-mail e iremos responder o mais rápido possível!';
                $status = "true";
            else:
                $message = 'Seu e-mail <strong>não pode</strong> ser enviado devido a um erro intesperado. Por favor, tente novamente mais tarde.<br /><br /><strong>Motivo:</strong><br />' . $mail->ErrorInfo . '';
                $status = "false";
            endif;
        } else {
            $message = 'Bot <strong>Detected</strong>.! Clean yourself Botster.!';
            $status = "false";
        }
    } else {
        $message = 'Por favor <strong>Preencha todos</strong> os campos e tente novamente';
        $status = "false";
    }
} else {
    $message = 'Um <strong>erro inesperado</strong> ocorreu. Por favor, tente novamente mais tarde.';
    $status = "false";
}

$status_array = array( 'message' => $message, 'status' => $status);
echo json_encode($status_array);
?>