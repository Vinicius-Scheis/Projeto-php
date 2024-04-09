// Função ativada ao clicar no botão "Adicionar ao carrinho"
document.querySelector(".pizzaInfo--addButton").addEventListener("click", () => {
  // Extrai o tamanho da pizza selecionada
  let size = parseInt(
    document.querySelector(".pizzaInfo--size.selected").getAttribute("data-key")
  );
  // Concatena o id da pizza e o tamanho para criar um identificador único
  let identifier = pizzas[modalKey].id + "@" + size;
  // Verifica se o item já está no carrinho
  let keyItem = cart.findIndex((item) => item.identifier == identifier);
  if (keyItem > -1) {
    // Aumenta a quantidade se o item já estiver no carrinho
    cart[keyItem].qtd += modalQt;
  } else {
    // Adiciona o item ao carrinho se não estiver presente
    cart.push({
      identifier,
      id: pizzas[modalKey].id,
      size,
      price: pizzas[modalKey].price[size],
      qtd: modalQt,
    });
  }
  // Adiciona uma classe de animação ao ícone do carrinho
  document.querySelector(".fa-cart-shopping").classList.add("pulse");
  // Atualiza a exibição do carrinho
  updateCart();
  // Fecha o modal após adicionar ao carrinho
  closeModal();
  // Salva o carrinho no armazenamento local
  saveCart();
});

// Função para salvar itens do carrinho no armazenamento local
const saveCart = () => {
  localStorage.setItem("pizza_cart", JSON.stringify(cart));
};

// Função ativada ao clicar no botão para abrir o menu do carrinho
document.querySelector(".menu-openner").addEventListener("click", () => {
  // Verifica se há itens no carrinho antes de abrir o menu
  if (cart.length > 0) {
    document.querySelector("asidev'").style.left = 0;
  }
});

// Função ativada ao clicar no botão para fechar o menu do carrinho
document.querySelector(".menu-closer").addEventListener("click", () => {
  // Fecha o menu do carrinho movendo-o para fora da tela
  document.querySelector("aside").style.left = "100vw";
});

// Função para atualizar a exibição do carrinho
function updateCart() {
  // Atualiza o número de itens exibidos no ícone do carrinho
  document.querySelector(".menu-openner span").innerHTML = cart.length;

  // Verifica se há itens no carrinho
  if (cart.length > 0) {
    // Adiciona uma classe para mostrar o menu do carrinho
    document.querySelector("aside").classList.add("show");
    // Limpa o conteúdo do carrinho antes de atualizar
    document.querySelector(".cart").innerHTML = "";

    let pizzasValor = 0;
    let subtotal = 0;
    let entrega = 5;
    let desconto = 0;
    let total = 0;

    // Loop através dos itens no carrinho
    for (let i in cart) {
      // Encontra a pizza correspondente ao id no carrinho
      let pizzaItem = pizzas.find((item) => item.id == cart[i].id);
      // Calcula o valor total das pizzas no carrinho
      pizzasValor += cart[i].price * cart[i].qtd;

      let pizzaSizeName;
      // Determina o nome do tamanho da pizza com base no tamanho
      switch (cart[i].size) {
        case 0:
          pizzaSizeName = "P";
          break;
        case 1:
          pizzaSizeName = "M";
          break;
        case 2:
          pizzaSizeName = "G";
          break;
      }
      let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`;

      // Clona o modelo de item de carrinho e preenche com os detalhes da pizza
      let cartItem = document.querySelector(".models .cart--item").cloneNode(true);
      cartItem.querySelector("img").src = pizzaItem.img;
      cartItem.querySelector(".cart--item-nome").innerHTML = pizzaName;
      cartItem.querySelector(".cart--item--qt").innerHTML = cart[i].qtd;
      // Adiciona event listeners aos botões de aumentar e diminuir quantidade
      cartItem.querySelector(".cart--item-qtmenos").addEventListener("click", () => {
        if (cart[i].qtd > 1) {
          cart[i].qtd--;
        } else {
          cart.splice(i, 1);
        }
        updateCart();
      });
      cartItem.querySelector(".cart--item-qtmais").addEventListener("click", () => {
        cart[i].qtd++;
        updateCart();
      });

      // Adiciona o item de carrinho à exibição do carrinho
      document.querySelector(".cart").append(cartItem);
    }

    // Calcula subtotal, desconto e total
    subtotal = pizzasValor + entrega;
    desconto = subtotal * 0.1;
    total = subtotal - desconto;

    // Atualiza os valores na exibição do carrinho
    document.querySelector(".pizzasValor span:last-child").innerHTML = `${pizzasValor.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`;
    document.querySelector(".entrega span:last-child").innerHTML = `${entrega.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`;
    document.querySelector(".subtotal span:last-child").innerHTML = `${subtotal.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`;
    document.querySelector(".desconto span:last-child").innerHTML = `${desconto.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`;
    document.querySelector(".total span:last-child").innerHTML = `${total.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`;
  } else {
    // Se o carrinho estiver vazio, limpa o armazenamento local, remove a exibição do menu do carrinho e fecha o menu
    localStorage.clear();
    document.querySelector("aside").classList.remove("show");
    document.querySelector("aside").style.left = "100vw";
  }
}
