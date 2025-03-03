<?php
session_start();
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <script src="https://kit.fontawesome.com/8b4042ccf0.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/home.css">
    <link rel="stylesheet" href="css/style.css">
    <title>Pizzaria</title>
</head>

<body>
    <header class="header"></header>

    <main class="home">
        <div class="home-area">
            <section class="left-home">
                <div class="left-area">
                    <div class="left-text1">Pizzas 10% OFF</div>
                    <div class="left-text2">Confira no cardápio</div>
                    <div class="left-text3">
                        Adquira agora nossas deliciosas pizzas com 10% de desconto por tempo limitado! Aproveite esta
                        oferta irresistível e desfrute do verdadeiro sabor italiano em cada fatia. Faça seu pedido hoje
                        mesmo!</div>
                    <a href="menu.php">
                        <div class="button">Fazer pedido <i class="fa-solid
                                    fa-arrow-right"></i>
                        </div>
                    </a>
                </div>
            </section>
            <section class="right-home">
                <div class="right-image">
                    <img src="images/pizza-desenho.png" alt="pizza.png">
                </div>
            </section>
        </div>
    </main>

    <script src="js/nav.js"></script>
</body>

</html>