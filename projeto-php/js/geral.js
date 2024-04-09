let cart = []; // Array para armazenar itens do carrinho
let modalQt = 1; // Quantidade padrão no modal
let modalKey = 0; // Chave do item do modal selecionado
let pizzas; // Variável para armazenar os dados das pizzas

// Verifica se há dados salvos no armazenamento local e os carrega, se houver
localStorage.getItem("pizza_cart") ?
  (cart = JSON.parse(localStorage.getItem("pizza_cart"))) :
  (cart = []);

// Busca os dados da API
const api = fetch("apiData.json")
  .then(async (response) => await response.json())
  .then((data) => {
    pizzas = data;

    updateCart(); // Atualiza o carrinho com os dados carregados

    // Mapeia os dados das pizzas e cria elementos HTML correspondentes
    data.map((item, index) => {
      let pizzaItem = document
        .querySelector(".models .pizza-item")
        .cloneNode(true);
      pizzaItem.setAttribute("data-key", index);

      // Preenche os detalhes da pizza nos elementos HTML
      pizzaItem.querySelector(".pizza-item--img img").src = item.img;
      pizzaItem.querySelector(".pizza-item--price").innerHTML = `${item.price[2].toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`;
      pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;
      pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description;

      // Adiciona evento ao clique para abrir o modal da pizza
      pizzaItem.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault(); // Impede a ação padrão do clique
        let key = e.target.closest(".pizza-item").getAttribute("data-key"); // Obtém a chave da pizza selecionada
        modalQt = 1; // Reseta a quantidade ao abrir o modal
        modalKey = key; // Define a chave do item modal aberto

        // Preenche o modal com os detalhes da pizza selecionada
        document.querySelector(".pizzaBig img").src = pizzas[key].img;
        document.querySelector(".pizzaInfo h1").innerHTML = pizzas[key].name;
        document.querySelector(".pizzaInfo--desc").innerHTML = pizzas[key].description;
        document.querySelector(".pizzaInfo--actualPrice").innerHTML = `${pizzas[key].price[2].toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`;

        // Configura os tamanhos de pizza e eventos de clique
        document.querySelector(".pizzaInfo--size.selected").classList.remove("selected");
        document.querySelectorAll(".pizzaInfo--size").forEach((size, sizeIndex) => {
          if (sizeIndex == 2) {
            size.classList.add("selected");
          }
          size.querySelector("span").innerHTML = pizzas[key].sizes[sizeIndex];

          // Adiciona evento ao clique para selecionar o tamanho da pizza
          size.addEventListener("click", () => {
            document.querySelector(".pizzaInfo--size.selected").classList.remove("selected");
            size.classList.add("selected");
            modalQt = 1;
            document.querySelector(".pizzaInfo--qt").innerHTML = modalQt;
            document.querySelector(".pizzaInfo--actualPrice").innerHTML = ` ${pizzas[key].price[sizeIndex].toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`;
          });
        });

        // Exibe o modal da pizza
        document.querySelector(".pizzaWindowArea").style.opacity = 0;
        document.querySelector(".pizzaWindowArea").style.display = "flex";
        setTimeout(() => {
          document.querySelector(".pizzaWindowArea").style.opacity = 1;
        }, 200);
      });

      // Adiciona o elemento da pizza à área de exibição
      document.querySelector(".pizza-area").append(pizzaItem);
    });
  });

// Função para fechar o modal
function closeModal() {
  document.querySelector(".pizzaWindowArea").style.opacity = 0;
  setTimeout(() => {
    document.querySelector(".pizzaWindowArea").style.display = "none";
  }, 600);
  window.scrollTo(0, 0);
}

// Fecha o modal ao pressionar a tecla Esc
document.addEventListener("keydown", (event) => {
  const isEscKey = event.key === "Escape";

  if (document.querySelector(".pizzaWindowArea").style.opacity = 1 && isEscKey) {
    closeModal();
  }
});

// Fecha o modal ao clicar no botão 'cancelar'
document
  .querySelectorAll(".pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton")
  .forEach((item) => {
    item.addEventListener("click", closeModal);
  });

// Eventos para aumentar e diminuir a quantidade de pizzas no modal
document.querySelector(".pizzaInfo--qtmenos").addEventListener("click", () => {
  if (modalQt > 1) {
    let size = parseInt(document.querySelector(".pizzaInfo--size.selected").getAttribute("data-key"));
    let preco = pizzas[modalKey].price[size];
    modalQt--;
    document.querySelector(".pizzaInfo--qt").innerHTML = modalQt;
    let updatePreco = preco * modalQt;
    document.querySelector(".pizzaInfo--actualPrice").innerHTML = `${updatePreco.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`;
  }
});
document.querySelector(".pizzaInfo--qtmais").addEventListener("click", () => {
  let size = parseInt(document.querySelector(".pizzaInfo--size.selected").getAttribute("data-key"));
  let preco = pizzas[modalKey].price[size];
  modalQt++;
  document.querySelector(".pizzaInfo--qt").innerHTML = modalQt;
  let updatePreco = preco * modalQt;
  document.querySelector(".pizzaInfo--actualPrice").innerHTML = `${updatePreco.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`;
});

// Evento para selecionar o tamanho da pizza no modal
document.querySelectorAll(".pizzaInfo--size").forEach((size, sizeIndex) => {
  size.addEventListener("click", (e) => {
    document.querySelector(".pizzaInfo--size.selected").classList.remove("selected");
    size.classList.add("selected");
  });
});
