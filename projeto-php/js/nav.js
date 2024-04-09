// Seleciona o elemento com a classe "header"
let header = document.querySelector(".header");

// Substitui o conteúdo HTML do elemento .header com o código HTML definido abaixo
header.innerHTML = `
    <div class="menu-area">
        <div class="logo">
            <a href="index.php">
                <img src="images/logo_pizza.png" alt="logo_pizza.png">
            </a>
        </div>
        <nav>
            <div class="container-menu-mobile">
                <div class="menuMobile-area">
                    <div class="menu-openner"><span>0</span>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
                <label for="checkbox" class="menu_hamburger">
                    <input type="checkbox" id="checkbox">
                    <span class="line line-main"></span>
                    <span class="line line-split"></span>
                </label>
            </div>
            <div class="menu">
                <ul>
                    <a href="index.php">
                        <li>Início</li>
                    </a>
                    <a href="menu.php">
                        <li>Pizzas</li>
                    </a>
                </ul>
            </div>
        </nav>
    </div>
`;

// Obtém o caminho da URL da página atual
let activePage = window.location.pathname;

// Seleciona todos os links dentro do elemento .menu e itera sobre eles
document.querySelectorAll("nav .menu a").forEach((link) => {
    // Verifica se o href do link inclui o caminho da página atual
    if (link.href.includes(`${activePage}`)) {
        // Adiciona a classe "active" ao link correspondente à página ativa
        link.classList.add("active");
    }
});

// Seleciona o input do tipo checkbox com o id "checkbox" e o elemento .menu
let toggleMenu = document.querySelector("#checkbox");
let openMenu = document.querySelector(".menu");

// Adiciona um ouvinte de evento para o clique no botão de menu móvel
toggleMenu.addEventListener("click", () => {
    // Alterna a classe "menu-opened" no elemento .menu quando o botão é clicado
    openMenu.classList.toggle("menu-opened");
});
