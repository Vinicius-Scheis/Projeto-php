<?php
session_start();
include_once ("config.php");
include_once ("Pedido.php");

// Criar uma instância da classe Pedido
$pedido = new Pedido($conn);

$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
$telefone = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_NUMBER_INT);
$cep = filter_input(INPUT_POST, 'cep', FILTER_SANITIZE_NUMBER_INT);
$pagamento = filter_input(INPUT_POST, 'pagamento', FILTER_SANITIZE_STRING);

// Verifica se todos os campos do formulário foram preenchidos
if ($nome && $telefone && $cep && $pagamento) {
    // Tenta inserir o pedido no banco de dados
    if ($pedido->inserirPedido($nome, $telefone, $cep, $pagamento)) {
        // Exibe um alerta de confirmação em JavaScript
        echo '<script>alert("Pedido realizado com sucesso! Será entregue em até 30 minutos.");</script>';
    } else {
        // Exibe um alerta de erro em JavaScript
        echo '<script>alert("Ocorreu um erro ao processar o pedido. Por favor, tente novamente mais tarde.");</script>';
    }
} else {
    // Exibe um alerta se algum campo estiver vazio
    echo '<script>alert("Por favor, preencha todos os campos do formulário.");</script>';
}

// Redireciona para index.php após um determinado período de tempo
echo '<script>setTimeout(function() { window.location.href = "index.php"; });</script>';
?>