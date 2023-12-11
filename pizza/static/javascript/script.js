document.addEventListener("DOMContentLoaded", () => {

    const open_navbar = document.querySelector("#open_button");
    const close_navbar = document.querySelector("#close_button");
    const hidden = document.querySelector("#hidden");
    
    open_navbar.addEventListener("click", () => {
        hidden.style.transform = "translateX(0%)";
    });

    close_navbar.addEventListener("click", () => {
        hidden.style.transform = "translateX(-100%)";
    });

    const carrito_de_compras = document.querySelector("#carrito-de-compras");
    carrito_de_compras.addEventListener("click", () => {
        window.location.href = "/cart";
    });


});