document.addEventListener("DOMContentLoaded", () => {

const styles = document.querySelectorAll(".style");
const sizes = document.querySelectorAll(".size");

styles.forEach(function (style) {

    style.addEventListener("click", () => {
        styles.forEach(function(unselected) {
            unselected.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            unselected.style.color = "white";
        });
    
        style.style.backgroundColor = "#ff7514";
        style.style.color = "white";
    });
});

sizes.forEach(function (size) {

    size.addEventListener("click", () => {
        sizes.forEach(function(unselected) {
            unselected.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            unselected.style.color = "white";
        });
    
        size.style.backgroundColor = "#ff7514";
        size.style.color = "white";
    });
});

let index = parseInt(localStorage.getItem("index")) || 0;
const order_button = document.querySelectorAll(".order-btn");

const toppigns_menu = document.querySelector("#toppings-select");

const t1 = document.querySelector("#t1");
const t2 = document.querySelector("#t2");
const t3 = document.querySelector("#t3");
const t4 = document.querySelector("#t4");

const tp1 = document.querySelector("#toppin1");
const tp2 = document.querySelector("#toppin2");
const tp3 = document.querySelector("#toppin3");
const tp4 = document.querySelector("#toppin4");

const comprar_pizza = document.querySelector("#comprar-pizza");
const cancelar_compra = document.querySelector("#cancelar-pizza");

function cerrar_menu() {
    toppigns_menu.style.display = "none";
    t1.style.display = "none";
    tp1.value = "Ninguna";
    t2.style.display = "none";
    tp2.style.display = "none";
    tp2.value = "Ninguna";
    t3.style.display = "none";
    tp3.style.display = "none";
    tp3.value = "Ninguna";
    t4.style.display = "none";
    tp4.style.display = "none";
    tp4.value = "Ninguna";
}

cancelar_compra.addEventListener("click", () => {
    cerrar_menu();
});

order_button.forEach(function(order) {
    order.addEventListener("click", () => {
        const tipo_pizza = order.getAttribute("data-pizza-type");
        const size_pizza = order.getAttribute("data-pizza-size");
        const toppins = order.getAttribute("data-pizza-toppins");
        const price = parseFloat(order.getAttribute("data-pizza-price"));
        const imagen = order.getAttribute("data-pizza-imagen");

        const current_cart = JSON.parse(localStorage.getItem("Cart")) || [];
        
        if (toppins === "Pizza sencilla") {
            current_cart.push({
                "index": index,
                "Tipo": tipo_pizza,
                "Toppins": toppins,
                "Size": size_pizza,
                "Price": price,
                "Imagen": imagen
            });

            carrito();
            index++;
            localStorage.setItem("index", index);
            localStorage.setItem("Cart", JSON.stringify(current_cart));

        } else if (toppins === "Pizza con cobertura"){

            toppigns_menu.style.display = "flex";
            t1.style.display = "flex";
            tp1.style.display = "flex";

            comprar_pizza.addEventListener("click", () => {
                const toppin1 = tp1.value;

                if (toppin1 === "Ninguna") {
                    Swal.fire({
                        icon: "error",
                        title: `Le faltan coberturas por seleccionar.`,
                        confirmButtonColor: "#3085d6",
                    });
                    carrito();
                } else {
                    current_cart.push({
                        "index": index,
                        "Tipo": tipo_pizza,
                        "Toppins": toppins,
                        "Size": size_pizza,
                        "Price": price,
                        "Toppin1": toppin1,
                        "Imagen": imagen
                    });
                    
                    carrito();
                    cerrar_menu();
                    index++;
                    localStorage.setItem("index", index);
                    localStorage.setItem("Cart", JSON.stringify(current_cart));
                }
            });

        } else if (toppins === "Pizza con doble cobertura"){

            toppigns_menu.style.display = "flex";
            t2.style.display = "flex";
            tp2.style.display = "flex";

            comprar_pizza.addEventListener("click", () => {
                const toppin1 = tp1.value;
                const toppin2 = tp2.value;

                if (toppin1 === "Ninguna" || toppin2 === "Ninguna") {
                    Swal.fire({
                        icon: "error",
                        title: `Le faltan coberturas por seleccionar.`,
                        confirmButtonColor: "#3085d6",
                    });
                    carrito();
                } else {

                    current_cart.push({
                        "index": index,
                        "Tipo": tipo_pizza,
                        "Toppins": toppins,
                        "Size": size_pizza,
                        "Price": price,
                        "Toppin1": toppin1,
                        "Toppin2": toppin2,
                        "Imagen": imagen
                    });

                    carrito();
                    cerrar_menu();
                    index++;
                    localStorage.setItem("index", index);
                    localStorage.setItem("Cart", JSON.stringify(current_cart));
                }
            });

        } else if (toppins === "Pizza con triple cobertura"){

            toppigns_menu.style.display = "flex";
            t2.style.display = "flex";
            tp2.style.display = "flex";
            t3.style.display = "flex";
            tp3.style.display = "flex";

            comprar_pizza.addEventListener("click", () => {
                const toppin1 = tp1.value;
                const toppin2 = tp2.value;
                const toppin3 = tp3.value;

                if (toppin1 === "Ninguna" || toppin2 === "Ninguna" || toppin3 === "Ninguna") {
                    Swal.fire({
                        icon: "error",
                        title: `Le faltan coberturas por seleccionar.`,
                        confirmButtonColor: "#3085d6",
                    });
                    carrito();
                } else {

                    current_cart.push({
                        "index": index,
                        "Tipo": tipo_pizza,
                        "Toppins": toppins,
                        "Size": size_pizza,
                        "Price": price,
                        "Toppin1": toppin1,
                        "Toppin2": toppin2,
                        "Toppin3": toppin3,
                        "Imagen": imagen
                    });

                    carrito();
                    cerrar_menu();
                    index++;
                    localStorage.setItem("index", index);
                    localStorage.setItem("Cart", JSON.stringify(current_cart));
                }
            });
            
        } else if (toppins === "Pizza especial"){

            toppigns_menu.style.display = "flex";
            t2.style.display = "flex";
            tp2.style.display = "flex";
            t3.style.display = "flex";
            tp3.style.display = "flex";
            t4.style.display = "flex";
            tp4.style.display = "flex";

            comprar_pizza.addEventListener("click", () => {
                const toppin1 = tp1.value;
                const toppin2 = tp2.value;
                const toppin3 = tp3.value;
                const toppin4 = tp4.value;

                if (toppin1 === "Ninguna" || toppin2 === "Ninguna" || toppin3 === "Ninguna" || toppin4 === "Ninguna") {
                    Swal.fire({
                        icon: "error",
                        title: `Le faltan coberturas por seleccionar.`,
                        confirmButtonColor: "#3085d6",
                    });
                    carrito();
                } else {

                    current_cart.push({
                        "index": index,
                        "Tipo": tipo_pizza,
                        "Toppins": toppins,
                        "Size": size_pizza,
                        "Price": price,
                        "Toppin1": toppin1,
                        "Toppin2": toppin2,
                        "Toppin3": toppin3,
                        "Toppin4": toppin4,
                        "Imagen": imagen
                    });

                    carrito();
                    cerrar_menu();
                    index++;
                    localStorage.setItem("index", index);
                    localStorage.setItem("Cart", JSON.stringify(current_cart));
                }

            });

        comprar_pizza.removeEventListener("click");
        }
    });
});

const another_order = document.querySelectorAll(".order-ant");

another_order.forEach(function(order) {
    order.addEventListener("click", () => {

        const name = order.getAttribute("data-tipo");
        const current_cart = JSON.parse(localStorage.getItem("Cart")) || [];

        if (name === "sub") {
            const sub_name = order.getAttribute("data-sub-name");
            const sub_price = order.getAttribute("data-sub-price");
            const sub_size = order.getAttribute("data-sub-size");
            const imagen = order.getAttribute("data-sub-imagen");

            current_cart.push({
                "index": index,
                "Tipo": sub_name,
                "Size": sub_size,
                "Price": sub_price,
                "Imagen": imagen
            });

            index++;
            localStorage.setItem("index", index);
            localStorage.setItem("Cart", JSON.stringify(current_cart));
            carrito();

        } else if (name === "pasta") {
            const pasta_name = order.getAttribute("data-pasta-name");
            const pasta_price = order.getAttribute("data-pasta-price");
            const imagen = order.getAttribute("data-pasta-imagen");

            current_cart.push({
                "index": index,
                "Tipo": pasta_name,
                "Price": pasta_price,
                "Imagen": imagen
            });

            index++;
            localStorage.setItem("index", index);
            localStorage.setItem("Cart", JSON.stringify(current_cart));
            carrito();
            
        } else if (name === "ensalada") {
            const ensalada_name = order.getAttribute("data-ensalada-name");
            const ensalada_price = order.getAttribute("data-ensalada-price");
            const imagen = order.getAttribute("data-ensalada-imagen");

            current_cart.push({
                "index": index,
                "Tipo": ensalada_name,
                "Price": ensalada_price,
                "Imagen": imagen
            });

            index++;
            localStorage.setItem("index", index);
            localStorage.setItem("Cart", JSON.stringify(current_cart));
            carrito();

        } else if (name === "cena") {
            const cena_name = order.getAttribute("data-cena-name");
            const cena_price = order.getAttribute("data-cena-price");
            const cena_size = order.getAttribute("data-cena-size");
            const imagen = order.getAttribute("data-cena-imagen");

            current_cart.push({
                "index": index,
                "Tipo": cena_name,
                "Size": cena_size,
                "Price": cena_price,
                "Imagen": imagen
            });

            index++;
            localStorage.setItem("index", index);
            localStorage.setItem("Cart", JSON.stringify(current_cart));
            carrito();
        }
    });
});

function carrito() {
    const productos = JSON.parse(localStorage.getItem("Cart")) || [];
    const saldo = document.querySelector("#total-pagar");

    if (productos.length === 0) {
        saldo.textContent = "$ 0.00";
        return;
    }

    const total_pago = productos.reduce((total, producto) => total + parseFloat(producto.Price), 0);
    saldo.textContent = `$ ${total_pago.toFixed(2)}`;
}

carrito();
});
