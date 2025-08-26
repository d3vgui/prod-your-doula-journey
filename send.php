<?php
header('Content-Type: application/json');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$nome = $_POST['nome'] ?? '';
$email = $_POST['email'] ?? '';
$telefone = $_POST['telefone'] ?? '';
$mensagem = $_POST['mensagem'] ?? '';

$mail = new PHPMailer(true);

try {
    // Configurações SMTP da Hostinger
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@yourdoulajourney.com'; // email corporativo
    $mail->Password   = 'Yourdoula1234@';            // senha criada no hPanel
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Remetente
    $mail->setFrom('info@yourdoulajourney.com', 'Site Your Doula Journey');
    // Destinatário
    $mail->addAddress('info@yourdoulajourney.com');

    // Conteúdo
    $mail->isHTML(true);
    $mail->Subject = "Nova mensagem de contato site Your Doula Journey";
    $mail->Body    = "
      <h3>Nova mensagem recebida!</h3>
      <br>
      <p><b>Nome:</b> {$nome}</p>
      <p><b>Email:</b> {$email}</p>
      <p><b>Telefone:</b> {$telefone}</p>
      <p><b>Mensagem:</b><br>{$mensagem}</p>
    ";

    $mail->send();

    echo json_encode([
      "success" => true,
      "message" => "Mensagem enviada com sucesso!"
    ]);
} catch (Exception $e) {
    echo json_encode([
      "success" => false,
      "message" => "Erro ao enviar: {$mail->ErrorInfo}"
    ]);
}
