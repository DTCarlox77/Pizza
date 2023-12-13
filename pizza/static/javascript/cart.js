document.addEventListener("DOMContentLoaded", () => {

function mostrar_carrito() {
    const contenedor = document.querySelector("#carrito-container");
    const productos = JSON.parse(localStorage.getItem("Cart")) || [];

    contenedor.innerHTML = "";

    productos.forEach(producto => {
        const nuevo_producto = document.createElement("div");
        nuevo_producto.classList.add("food");

        // Función para obtener el texto de las coberturas sin "undefined"
        function obtener_coberturas() {
            const toppings = [producto.Topping1, producto.Topping2, producto.Topping3, producto.Topping4];
            const coberturas = toppings.filter(topping => topping !== undefined).join(" ");
            return coberturas.length > 0 ? coberturas : null;
        }

        const tipo_cobertura = producto.Toppins !== undefined ? `${producto.Toppins} ` : '';
        const tipo = producto.Tipo !== undefined ? producto.Tipo : '';
        const price = producto.Price !== undefined ? `$ ${producto.Price}` : '';

        const banner = `
        <span class="image">
            <img src="${producto.Imagen}" alt="">
        </span>
        <span class="information">
            <span class="title">
                ${(producto.Toppins !== undefined || producto.Tipo !== undefined || producto.Price !== undefined) ? `<h2>${tipo} ${tipo_cobertura} | ${price}</h2>` : ''}
                <p>Tamaño: ${producto.Size !== undefined ? producto.Size : ""}</p>
                ${obtener_coberturas() ? `<p>Coberturas: ${obtener_coberturas()}</p>` : ""}
            </span>
            <span class="button">
                <button class="delete-order" data-index="${producto.index}">Eliminar</button>
            </span>
        </span>
        `;

        nuevo_producto.innerHTML = banner;
        contenedor.appendChild(nuevo_producto);
    });

    const eliminar = document.querySelectorAll(".delete-order");
    eliminar.forEach(button => {
        button.addEventListener("click", eliminar_producto);
    });

    carrito();
}

function eliminar_producto(event) {
    const index = parseInt(event.target.getAttribute("data-index"));
    const productos = JSON.parse(localStorage.getItem("Cart")) || [];

    const nuevo_carrito = productos.filter(producto => producto.index !== index);
    localStorage.setItem("Cart", JSON.stringify(nuevo_carrito));
    mostrar_carrito();
}

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

mostrar_carrito();
carrito();

function obtener_cookies(name) {
    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith(`${name}=`))
        ?.split('=')[1];
    
    return cookieValue || null;
}

const order = document.querySelector("#django_order");

order.addEventListener("click", () => {
    const products = JSON.parse(localStorage.getItem("Cart")) || [];

    if (products.length === 0) {
        Swal.fire({
            icon: "warning",
            title: "Primero selecciona productos.",
            confirmButtonColor: "#3085d6",
        });
        return;
    }

    Swal.fire({
        icon: "question",
        title: "¿Estás seguro de realizar el pedido?",
        showCancelButton: true,
        confirmButtonText: "Sí, realizar pedido",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
    }).then((result) => {
        if (result.isConfirmed) {
            const total_price = products.reduce((total, product) => total + parseFloat(product.Price), 0).toFixed(2);
            const user = "usuario_prueba";

            const orderData = {
                user: user,
                price: total_price,
                products: products,
            };

            const csrfToken = obtener_cookies("csrftoken");
            const headers = new Headers({
                "Content-Type": "application/json",
                "X-CSRFToken": csrfToken,
            });

            fetch("/api/orders/", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(orderData),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        localStorage.removeItem("Cart");
                        console.log("Orden realizada con éxito. ID de orden:", data.order_id);
                        mostrar_carrito();
                        carrito();
                        Swal.fire({
                            icon: "success",
                            title: "Orden realizada exitosamente :)",
                            confirmButtonColor: "#3085d6",
                        });
                    } else {
                        console.error("Error al realizar la orden:", data.error);
                        Swal.fire({
                            icon: "error",
                            title: "Lo sentimos, algo salió mal :(",
                            confirmButtonColor: "#3085d6",
                        });
                    }
                })
                .catch((error) => {
                    console.error("Error en la solicitud POST:", error);
                    Swal.fire({
                        icon: "error",
                        title: "Lo sentimos, algo salió mal :(",
                        confirmButtonColor: "#3085d6",
                    });
                });
        }
    });
});


});