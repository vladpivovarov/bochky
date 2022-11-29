<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  /* https://api.telegram.org/bot5816015788:AAFI-RuX21Uf91qO9eeCRHASQgS-onF4k0s/getUpdates,
  где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее 📧 ☎️ 📅 */


  $mail = new PHPMailer(true);
  $mail->CharSet = "UTF-8";
  $mail->setLanguage("ru", "phpmailer/language/");
  $mail->IsHTML(true);

  $token = "5816015788:AAFI-RuX21Uf91qO9eeCRHASQgS-onF4k0s";
  $chat_id = "-1001130475336";

  // От кого письмо
  $mail->setFrom("info@krd-bochky.ru", "krd-bochky.ru");
  // Кому отправить
  $mail->addAddress("vladpivovarov2797@ya.ru");
  // Тема письма
  $mail->Subject = "ЗАЯВКА НА ОБРАТНЫЙ ЗВОНОК";

  $txt = "%0A"."<b>ЗАЯВКА НА ОБРАТНЫЙ ЗВОНОК</b>"."%0A"."<b>☎️ </b>".$_POST["phone"]."%0A";

  // Тело письма
  $body = "<h1>ЗАЯВКА НА ОБРАТНЫЙ ЗВОНОК</h1>";

  if(trim(!empty($_POST["phone"]))) {
    $body.="<p><strong>Телефон:</strong> ".$_POST["phone"]."</p>";
  }

  $mail->Body = $body;

  // Отправляем
  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

  if(!$mail->send()) {
    $message = "Ошибка";
  } else {
    $message = "Заявка отправлена!";
  }

  $response = ["message" => $message];

  header("Content-type: application/json");
  echo json_encode($response);


?>