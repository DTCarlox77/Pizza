document.addEventListener("DOMContentLoaded", () => {

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

const order_button = document.querySelectorAll(".order-btn");
const toppigns_menu = document.querySelector("#toppings-select");

order_button.forEach(button => {

    button.addEventListener("click", () => {
        cerrar_menu();
        const current_cart = JSON.parse(localStorage.getItem("Cart")) || [];
        let index = parseInt(localStorage.getItem("index")) || 0;

        const Tipo = button.getAttribute("data-pizza-type"); // Regular o siliciana.
        const Toppings = button.getAttribute("data-pizza-toppins"); // Cantidad o tipos de cobertura.
        const Size = button.getAttribute("data-pizza-size"); // Grande o pequeña.
        const Price = button.getAttribute("data-pizza-price");
        const Imagen = button.getAttribute("data-pizza-imagen");

        if (Toppings == "Pizza sencilla") {
            current_cart.push({
                "index": index,
                "Tipo": Tipo,
                "Toppins": Toppings,
                "Size": Size,
                "Price": Price,
                "Imagen": Imagen
            });

            index++;
            localStorage.setItem("index", index);
            localStorage.setItem("Cart", JSON.stringify(current_cart));
            carrito();

            Swal.fire({
                icon: "success",
                title: `Producto agregado al carrito.`,
                confirmButtonColor: "#3085d6",
            });
        }

        else {
            toppigns_menu.style.display = "flex";
            const Topping1 = document.querySelector("#toppin1");
            const Topping2 = document.querySelector("#toppin2");
            const Topping3 = document.querySelector("#toppin3");
            const Topping4 = document.querySelector("#toppin4");

            const T2 = document.querySelector("#t2");
            const T3 = document.querySelector("#t3");
            const T4 = document.querySelector("#t4");

            if (Toppings == "Pizza con doble cobertura" || Toppings == "Pizza con triple cobertura" || Toppings == "Pizza especial") {
                T2.style.display = "flex";
                Topping2.style.display = "flex";
            }

            if (Toppings == "Pizza con triple cobertura" || Toppings == "Pizza especial") {
                T3.style.display = "flex";
                Topping3.style.display = "flex";
            }

            if (Toppings == "Pizza especial") {
                T4.style.display = "flex";
                Topping4.style.display = "flex";
            }

            const agregar_carrito = document.querySelector("#comprar-pizza");
            agregar_carrito.addEventListener("click", () => {
                if (Toppings == "Pizza sencilla") {
                    current_cart.push({
                        "index": index,
                        "Tipo": Tipo,
                        "Toppins": Toppings,
                        "Size": Size,
                        "Price": Price,
                        "Imagen": Imagen,
                    });

                    index++;
                    localStorage.setItem("index", index);
                    localStorage.setItem("Cart", JSON.stringify(current_cart));
                    carrito();

                    Swal.fire({
                        icon: "success",
                        title: `Producto agregado al carrito.`,
                        confirmButtonColor: "#3085d6",
                    }); 
                } 

                else if (Toppings == "Pizza con cobertura" && Topping1.value) {
                    current_cart.push({
                        "index": index,
                        "Tipo": Tipo,
                        "Toppins": Toppings,
                        "Size": Size,
                        "Price": Price,
                        "Imagen": Imagen,
                        "Topping1": Topping1.value,
                    });

                    index++;
                    localStorage.setItem("index", index);
                    localStorage.setItem("Cart", JSON.stringify(current_cart));
                    carrito();

                    Swal.fire({
                        icon: "success",
                        title: `Producto agregado al carrito.`,
                        confirmButtonColor: "#3085d6",
                    }); 
                }
                
                else if (Toppings == "Pizza con doble cobertura" && Topping1.value && Topping2.value) {
                    current_cart.push({
                        "index": index,
                        "Tipo": Tipo,
                        "Toppins": Toppings,
                        "Size": Size,
                        "Price": Price,
                        "Imagen": Imagen,
                        "Topping1": Topping1.value,
                        "Topping2": Topping2.value
                    });

                    index++;
                    localStorage.setItem("index", index);
                    localStorage.setItem("Cart", JSON.stringify(current_cart));
                    carrito();

                    Swal.fire({
                        icon: "success",
                        title: `Producto agregado al carrito.`,
                        confirmButtonColor: "#3085d6",
                    }); 
                }

                else if (Toppings == "Pizza con triple cobertura" && Topping1.value && Topping2.value && Topping3.value) {
                    current_cart.push({
                        "index": index,
                        "Tipo": Tipo,
                        "Toppins": Toppings,
                        "Size": Size,
                        "Price": Price,
                        "Imagen": Imagen,
                        "Topping1": Topping1.value,
                        "Topping2": Topping2.value,
                        "Topping3": Topping3.value
                    });

                    index++;
                    localStorage.setItem("index", index);
                    localStorage.setItem("Cart", JSON.stringify(current_cart));
                    carrito();

                    Swal.fire({
                        icon: "success",
                        title: `Producto agregado al carrito.`,
                        confirmButtonColor: "#3085d6",
                    }); 
                }

                else if (Toppings == "Pizza especial" && Topping1.value && Topping2.value && Topping3.value && Topping4.value) {
                    current_cart.push({
                        "index": index,
                        "Tipo": Tipo,
                        "Toppins": Toppings,
                        "Size": Size,
                        "Price": Price,
                        "Imagen": Imagen,
                        "Topping1": Topping1.value,
                        "Topping2": Topping2.value,
                        "Topping3": Topping3.value,
                        "Topping4": Topping4.value
                    });

                    index++;
                    localStorage.setItem("index", index);
                    localStorage.setItem("Cart", JSON.stringify(current_cart));
                    carrito();

                    Swal.fire({
                        icon: "success",
                        title: `Producto agregado al carrito.`,
                        confirmButtonColor: "#3085d6",
                    }); 
                }
                
                else {
                    Swal.fire({
                        icon: "error",
                        title: `Le faltan coberturas por seleccionar.`,
                        confirmButtonColor: "#3085d6",
                    });
                }
            });
        }
    });
    cerrar_menu();
});

const cancelar_orden = document.querySelector("#cancelar-pizza");
function cerrar_menu() {

    const Topping1 = document.querySelector("#toppin1");
    const Topping2 = document.querySelector("#toppin2");
    const Topping3 = document.querySelector("#toppin3");
    const Topping4 = document.querySelector("#toppin4");

    const T2 = document.querySelector("#t2");
    const T3 = document.querySelector("#t3");
    const T4 = document.querySelector("#t4");

    toppigns_menu.style.display = "none";
    Topping1.value = "";

    T2.style.display = "none";
    Topping2.style.display = "none";
    Topping2.value = "";
    T3.style.display = "none";
    Topping3.style.display = "none";
    Topping3.value = "";
    T4.style.display = "none";
    Topping4.style.display = "none";
    Topping4.value = "";
}

cancelar_orden.addEventListener("click", () => {
    cerrar_menu();
});

const another_order = document.querySelectorAll(".order-ant");
another_order.forEach(function(order) {
    order.addEventListener("click", () => {
        let index = parseInt(localStorage.getItem("index")) || 0;

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

            Swal.fire({
                icon: "success",
                title: `Producto agregado al carrito.`,
                confirmButtonColor: "#3085d6",
            });

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

            Swal.fire({
                icon: "success",
                title: `Producto agregado al carrito.`,
                confirmButtonColor: "#3085d6",
            });
            
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

            Swal.fire({
                icon: "success",
                title: `Producto agregado al carrito.`,
                confirmButtonColor: "#3085d6",
            });

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

            Swal.fire({
                icon: "success",
                title: `Producto agregado al carrito.`,
                confirmButtonColor: "#3085d6",
            });
        }
    });
});

carrito();
});
