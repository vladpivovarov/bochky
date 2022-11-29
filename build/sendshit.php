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
  $mail->Subject = "ЗАЯВКА НА 17 СОВЕТОВ ПО ВЫБОРУ БАНИ";

  $arr = array(
    'ЗАЯВКА НА 17 СОВЕТОВ ПО ВЫБОРУ БАНИ' => "",
    'Куда прислать: ' => $_POST["mess"],
    '☎️ ' => $_POST["phone"]
  );

  foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };

  // Тело письма
  $body = "<h1>ЗАЯВКА НА 17 СОВЕТОВ ПО ВЫБОРУ БАНИ</h1>";

  if(trim(!empty($_POST["mess"]))) {
    $body.="<p><strong>Куда прислать:</strong> ".$_POST["mess"]."</p>";
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