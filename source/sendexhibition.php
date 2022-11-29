<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';


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

  $arr = array(
    'ЗАЯВКА НА ЭКСКУРСИЮ' => "",
    '📅 ' => $_POST["data"],
    '☎️ ' => $_POST["phone"]
  );

  foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };

  // Тело письма
  $body = "<h1>ЗАЯВКА НА ЭКСКУРСИЮ</h1>";

  if(trim(!empty($_POST["data"]))) {
    $body.="<p><strong>Дата:</strong> ".$_POST["data"]."</p>";
  }
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