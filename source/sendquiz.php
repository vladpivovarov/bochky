<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';


  $mail = new PHPMailer(true);
  $mail->CharSet = "UTF-8";
  $mail->setLanguage("ru", "phpmailer/language/");
  $mail->IsHTML(true);

  $type = $_POST["types"];
  $area = $_POST["area"];
  $installation = $_POST["installation"];
  $region = $_POST["region"];
  $when = $_POST["when"];

  if ($type == "standart") {
    $type = "Баня-бочка";
  }
  if ($type == "quadro-oval") {
    $type = "Квадро-овал бочка";
  }
  if ($type == "quadro") {
    $type = "Квадро-бочка";
  }
  if ($type == "oval") {
    $type = "Овал-бочка";
  }
  if ($type == "okta") {
    $type = "Окта-бочка";
  }

  if ($area == "no") {
    $area = "Не готова";
  }
  if ($area == "already-yes") {
    $area = "Уже готова";
  }
  if ($area == "want") {
    $area = "Хотим чтобы вы подготовили";
  }

  if ($installation == "ready") {
    $installation = "Доставка в готовом виде";
  }
  if ($installation == "in-place") {
    $installation = "Сборка на участке";
  }

  if ($region == "krasnodar") {
    $region = "Краснодар";
  }
  if ($region == "50-100") {
    $region = "50-100 км ";
  }
  if ($region == "100-150") {
    $region = "100-150 км";
  }
  if ($region == "150-250") {
    $region = "150-250 км";
  }
  if ($region == "other") {
    $region = "Другой регион";
  }

  if ($when == "now") {
    $when = "В самое ближайшее время";
  }
  if ($when == "autumn") {
    $when = "Осенью";
  }
  if ($when == "winter") {
    $when = "Зимой";
  }
  if ($when == "spring") {
    $when = "Весной";
  }
  if ($when == "summer") {
    $when = "Летом";
  }
  if ($when == "next-year") {
    $when = "В следующем году";
  }

  $token = "5816015788:AAFI-RuX21Uf91qO9eeCRHASQgS-onF4k0s";
  $chat_id = "-1001130475336";

  // От кого письмо
  $mail->setFrom("info@krd-bochky.ru", "krd-bochky.ru");
  // Кому отправить
  $mail->addAddress("vladpivovarov2797@ya.ru");
  // Тема письма
  $mail->Subject = "ЗАЯВКА С САЙТА - КВИЗ";

  $arr = array(
    'ЗАЯВКА С САЙТА - КВИЗ' => "",
    'Тип бочки: ' => $type,
    'Куда прислать: ' => $_POST["mess"],
    '☎️ ' => $_POST["phone"]
  );

  foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };

  // Тело письма
  $body = "<h1>ЗАЯВКА С САЙТА - КВИЗ</h1>";

  if(trim(!empty($_POST["types"]))) {
    $body.="<p><strong>Форма бочки:</strong> ".$type."</p>";
  }
  if(trim(!empty($_POST["area"]))) {
    $body.="<p><strong>Площадка под баню:</strong> ".$area."</p>";
  }
  if(trim(!empty($_POST["installation"]))) {
    $body.="<p><strong>Возможность установки:</strong> ".$installation."</p>";
  }
  if(trim(!empty($_POST["region"]))) {
    $body.="<p><strong>Регион доставки:</strong> ".$region."</p>";
  }
  if(trim(!empty($_POST["when"]))) {
    $body.="<p><strong>Планирую приобретать баню:</strong> ".$when."</p>";
  }
  if(trim(!empty($_POST["mess"]))) {
    $body.="<p><strong>Куда прислать:</strong> ".$_POST["mess"]."</p>";
  }
  if(trim(!empty($_POST["phone"]))) {
    $body.="<p><strong>Телефон:</strong> ".$_POST["phone"]."</p>";
  }

  $body.="<p>*** Вышлите мне расчет стоимости и 17 рекомендаций по выбору бани ***</p>";

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