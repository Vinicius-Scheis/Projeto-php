<?php
// Arquivo: Pedido.php

// Define a classe Pedido
class Pedido
{
    // Propriedade privada para armazenar a conexão com o banco de dados
    private $conn;

    // Construtor da classe, recebe a conexão como parâmetro e a atribui à propriedade $conn
    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    // Método para inserir um novo pedido no banco de dados
    public function inserirPedido($nome, $telefone, $cep, $pagamento)
    {
        // Query SQL para inserir um novo pedido na tabela "usuarios"
        $query = "INSERT INTO usuarios (nome, telefone, cep, pagamento) VALUES (?, ?, ?, ?)";

        // Preparação da declaração SQL
        $stmt = $this->conn->prepare($query);

        // Binding dos parâmetros da declaração SQL
        $stmt->bind_param("ssss", $nome, $telefone, $cep, $pagamento);

        // Execução da consulta preparada
        if ($stmt->execute()) {
            return true; // Retorna verdadeiro se o pedido foi inserido com sucesso
        } else {
            return false; // Retorna falso se houve falha ao inserir o pedido
        }
    }

    // Método para excluir um pedido do banco de dados
    public function deletePedido($id)
    {
        // Query SQL para excluir um pedido da tabela "usuarios"
        $query = "DELETE FROM usuarios WHERE id = ?";

        // Preparação da declaração SQL
        $stmt = $this->conn->prepare($query);

        // Binding dos parâmetros da declaração SQL
        $stmt->bind_param("i", $id);

        // Execução da consulta preparada
        if ($stmt->execute()) {
            return true; // Retorna verdadeiro se o pedido foi excluído com sucesso
        } else {
            return false; // Retorna falso se houve falha ao excluir o pedido
        }
    }

    // Método para recuperar todos os pedidos da tabela "usuarios"
    public function getPedidos()
    {
        // Query SQL para selecionar todos os pedidos da tabela "usuarios"
        $query = "SELECT * FROM usuarios";

        // Preparação da declaração SQL
        $stmt = $this->conn->prepare($query);

        // Execução da consulta preparada
        $stmt->execute();

        // Obter resultado da consulta
        $result = $stmt->get_result();

        // Inicializar um array para armazenar os pedidos
        $pedidos = array();

        // Loop através dos resultados e adicionar cada pedido ao array
        while ($row = $result->fetch_assoc()) {
            $pedidos[] = $row;
        }

        // Retorna o array de pedidos
        return $pedidos;
    }
}
?>
