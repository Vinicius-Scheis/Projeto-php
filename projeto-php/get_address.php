<?php
// Verifica se o método da requisição é POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Obtém o CEP enviado pela requisição
    $cep = $_POST["cep"];

    // Faz a requisição para a API do ViaCEP
    $url = "https://viacep.com.br/ws/{$cep}/json/";
    $response = file_get_contents($url);

    // Retorna os dados como resposta da requisição Ajax
    header("Content-Type: application/json");
    echo $response;
} else {
    // Retorna erro se a requisição não for POST
    http_response_code(405);
    echo json_encode(["error" => "Method Not Allowed"]);
}
?>