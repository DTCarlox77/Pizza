document.addEventListener("DOMContentLoaded", function () {

function obtener_cookies(name) {
    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith(`${name}=`))
        ?.split('=')[1];
        
    return cookieValue || null;
}

const completar_orden = document.querySelectorAll(".complete-order");

completar_orden.forEach(button => {
    button.addEventListener("click", function () {
        const id_order = button.getAttribute("data-order-id");

        Swal.fire({
            title: "¿Está seguro que desea confirmar la orden?",
            text: "Esta acción marcará la orden como completada.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, confirmar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                completeOrder(id_order);
            }
        });
    });
});

function completeOrder(id_order) {
    fetch(`/complete_order/${id_order}/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": obtener_cookies("csrftoken"),
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            Swal.fire({
                icon: "success",
                title: "Orden completada",
                confirmButtonColor: "#3085d6",
            }).then(() => {
                location.reload();
            });

        } else {
            Swal.fire({
                icon: "error",
                title: `Error al completar la orden ${id_order}: ${data.error}`,
                confirmButtonColor: "#3085d6",
            });
            console.error(`Error al completar la orden ${id_order}: ${data.error}`);
        }
    })
    .catch(error => {
        Swal.fire({
            icon: "error",
            title: `Error en la solicitud POST: ${error}`,
            confirmButtonColor: "#3085d6",
        });
        console.error(`Error en la solicitud POST: ${error}`);
    });
}
});
