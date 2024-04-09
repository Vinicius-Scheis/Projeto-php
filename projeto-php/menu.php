<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <script src="https://kit.fontawesome.com/8b4042ccf0.js" crossorigin="anonymous"></script>
  <!-- Inclui a biblioteca FontAwesome para ícones -->
  <link rel="stylesheet" href="css/style.css"> <!-- Inclui um arquivo CSS para estilos gerais -->
  <link href="https://fonts.googleapis.com/css?family=Hepta+Slab:400,700|Lato:400,700&display=swap" rel="stylesheet">
  <!-- Inclui fontes do Google Fonts -->
  <link rel="stylesheet" href="css/dados.css">
  <!-- Inclui um arquivo CSS específico para estilos relacionados aos dados -->
  <title>Pizzaria</title>
</head>

<body>
  <div class="loader-content">
    <div class="loader-circle"></div> <!-- Elemento de carregamento -->
    <!-- <span class="loader-text">enviando...</span> --> <!-- Texto de carregamento opcional -->
  </div>

  <header class="header"></header> <!-- Cabeçalho -->

  <div class="container">
    <div class="container-area">
      <div class="models">
        <div class="pizza-item">
          <a href="">
            <div class="pizza-item--img"><img src="" /></div> <!-- Imagem do item de pizza -->
            <div class="pizza-item--add">+</div> <!-- Botão de adicionar -->
            <div class="pizza-item--price">R$ --</div> <!-- Preço do item de pizza -->
            <div class="pizza-item--name">--</div> <!-- Nome do item de pizza -->
            <div class="pizza-item--desc">--</div> <!-- Descrição do item de pizza -->
          </a>
        </div>
        <div class="cart--item">
          <img src="" /> <!-- Imagem do item do carrinho -->
          <div class="cart--item-nome">--</div> <!-- Nome do item do carrinho -->
          <div class="cart--item--qtarea">
            <button class="cart--item-qtmenos">-</button> <!-- Botão de diminuir quantidade -->
            <div class="cart--item--qt">1</div> <!-- Quantidade do item do carrinho -->
            <button class="cart--item-qtmais">+</button> <!-- Botão de aumentar quantidade -->
          </div>
        </div>
      </div>
      <main>
        <h1 class="titulo--h1">Pizzas<br><br>Sabores</h1> <!-- Título principal -->
        <div class="pizza-area"></div> <!-- Área para exibir os itens de pizza -->
      </main>
      <aside>
        <div class="cart--area">
          <div class="menu-closer">
            <i class="fa-solid fa-arrow-left"></i> <!-- Ícone para fechar o carrinho -->
          </div>
          <h1>Suas Pizzas</h1> <!-- Título do carrinho -->
          <div class="cart"></div> <!-- Conteúdo do carrinho -->
          <div class="cart--details">
          </div>
          <!-- Elementos para exibir detalhes do carrinho -->
          <div class="cart--totalitem pizzasValor">
            <span>Pizzas</span> <!-- Total de pizzas -->
            <span>R$ --</span> <!-- Preço total das pizzas -->
          </div>
          <div class="cart--totalitem entrega">
            <span>Taxa de entrega</span> <!-- Taxa de entrega -->
            <span>R$ --</span> <!-- Preço da taxa de entrega -->
          </div>
          <div class="cart--totalitem subtotal">
            <span>Subtotal</span> <!-- Subtotal -->
            <span>R$ --</span> <!-- Valor total dos itens no carrinho -->
          </div>
          <div class="cart--totalitem desconto">
            <span>Desconto (-10%)</span> <!-- Desconto aplicado -->
            <span>R$ --</span> <!-- Valor do desconto -->
          </div>
          <div class="cart--totalitem total big">
            <span>Total</span> <!-- Total geral -->
            <span>R$ --</span> <!-- Valor total a ser pago -->
          </div>
          <br>
          <h2>Informações do Cliente:</h2> <!-- Título para informações do cliente -->
          <form id="user-form" class="user-form" action="processar_pedido.php" method="post">
            <!-- Formulário para informações do cliente -->
            <label for="user-name">Nome:</label>
            <input type="text" name="nome" required> <!-- Campo para nome -->
            <label for="user-telefone">Telefone:</label>
            <input type="text" name="telefone" required> <!-- Campo para telefone -->
            <label for="user-cep">CEP:</label>
            <input type="text" id="user-cep" name="cep" required> <!-- Campo para CEP -->
            <div id="cep-error" style="color: red;"></div> <!-- Mensagem de erro para CEP -->
            <div class="endereco-details" id="endereco-details">
              <!-- Detalhes do endereço -->
              <label>Detalhes do Endereço:</label>
              <br>
              <p id="logradouro"></p> <!-- Logradouro -->
              <p id="bairro"></p> <!-- Bairro -->
              <p id="localidade"></p> <!-- Localidade -->
              <p id="uf"></p> <!-- UF -->
              <br>
              <label for="payment-method">Forma de Pagamento:</label> <!-- Seleção de forma de pagamento -->
              <select name="pagamento" required>
                <option value="">Selecione uma opção</option>
                <option value="credito">Cartão de Crédito</option>
                <option value="debito">Cartão de Débito</option>
                <option value="dinheiro">Dinheiro</option>
              </select>
            </div>
            <input type="submit" class="finalizar-pedido" value="Fazer pedido">
          </form>
        </div>
    </div>
    </aside>
    <div class="pizzaWindowArea">
      <div class="pizzaWindowBody modal">
        <!-- Área do modal -->
        <div class="pizzaInfo--cancelMobileButton">
          <i class="fa-solid fa-arrow-left"></i> <!-- Ícone para cancelar no modal -->
        </div>
        <div class="pizzaBig">
          <img src="" /> <!-- Imagem grande do item do modal -->
        </div>
        <div class="pizzaInfo">
          <h1>--</h1> <!-- Título do item do modal -->
          <div class="pizzaInfo--desc">--</div> <!-- Descrição do item do modal -->
          <div class="pizzaInfo--sizearea">
            <div class="pizzaInfo--sector">Tamanho</div> <!-- Seção de tamanhos -->
            <div class="pizzaInfo--sizes">
              <div data-key="0" class="pizzaInfo--size">
                PEQUENA <span>--</span> <!-- Tamanho pequeno -->
              </div>
              <div data-key="1" class="pizzaInfo--size">
                MÉDIO <span>--</span> <!-- Tamanho médio -->
              </div>
              <div data-key="2" class="pizzaInfo--size selected">
                GRANDE <span>--</span> <!-- Tamanho grande (selecionado por padrão) -->
              </div>
            </div>
          </div>
          <div class="pizzaInfo--pricearea">
            <div class="pizzaInfo--sector">Preço</div> <!-- Seção de preço -->
            <div class="pizzaInfo--price">
              <div class="pizzaInfo--actualPrice">R$ --</div> <!-- Preço atual do item -->
              <div class="pizzaInfo--qtarea">
                <button class="pizzaInfo--qtmenos">-</button> <!-- Botão de diminuir quantidade -->
                <div class="pizzaInfo--qt">1</div> <!-- Quantidade do item -->
                <button class="pizzaInfo--qtmais">+</button> <!-- Botão de aumentar quantidade -->
              </div>
            </div>
          </div>
          <div class="pizzaInfo--addButton">Adicionar ao carrinho</div> <!-- Botão para adicionar ao carrinho -->
          <div class="pizzaInfo--cancelButton">Cancelar</div> <!-- Botão para cancelar -->
        </div>
      </div>
    </div>
  </div>

  <script src="js/nav.js"></script> <!-- Script para navegação -->
  <script type="text/javascript" src="js/geral.js"></script> <!-- Script geral -->
  <script type="text/javascript" src="js/cart.js"></script> <!-- Script para manipulação do carrinho -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> <!-- Biblioteca jQuery -->
  <script src="address_lookup.js"></script> <!-- Script para busca de endereço -->
</body>

</html>