# Project 3: Pizza

¡Bienvenido a Pizza! A continuación, encontrarás una descripción general del proyecto, una lista de los archivos incluidos y las instrucciones para ejecutar la aplicación en tu entorno local.

## Descripción del proyecto

Pizza es una aplicación web diseñada para gestionar pedidos en una pizzería. Los usuarios pueden explorar el menú, que se ha tomado de Pinocchos Pizza, y seleccionar productos para añadirlos a su carrito de compras. Posteriormente, tienen la flexibilidad de revisar y confirmar los elementos deseados antes de realizar un pedido. Una vez realizado el pedido, los administradores del sitio pueden revisar y aprobar la solicitud.

Los administradores cuentan con la capacidad de ampliar la variedad de productos en la plataforma, manteniendo las categorías predeterminadas, que incluyen Pizzas, Subs, Ensaladas, Pastas, Coberturas y Platillos de cena. Además, tienen la facilidad de crear cuentas de administradores adicionales.

El carrito de compras automatiza los cálculos, ajustando automáticamente el total según los cambios realizados, ya sea añadiendo o eliminando productos.

El proceso de registro solicita información básica, como nombre de usuario, nombres, apellidos, contraseña y correo electrónico, asegurando una experiencia de usuario completa y personalizada.

## Video tutorial

   **Youtube**: "Soon"

## Estructura de Archivos de la Aplicación

- **pizza/**: Esta carpeta alberga la aplicación de Django, configurada como un módulo. La ejecución se realiza desde la ruta raíz a través del archivo manage.py.

- **templates/**: Aquí se encuentran las plantillas HTML que posibilitan la visualización del contenido de la aplicación.

- **static/**: Contiene archivos estáticos, como hojas de estilo CSS, Javascript, fuentes y otros recursos utilizados en las plantillas HTML.

- **migrations/**: Registro de todas las migraciones realizadas hacia la base de datos.

## Archivos del Proyecto

- **project3/**: Carpeta que contiene el proyecto principal de Django, responsable de gestionar la aplicación "Pizza".

## Archivos en la Raíz

- **db.sqlite3**: Base de datos precreada en SQLite 3 para gestionar toda la información. Ya incluye el usuario administrador principal y el menú de platillos de Pizza.

## Ejecución de la aplicación.

1. Asegúrate de tener Python 3.11 instalado en tu sistema.

2. Instala las dependencias de Python utilizando el siguiente comando:

   ```
   pip install -r requirements.txt
   ```

3. Desde la ruta raíz, ejecuta el siguiente comando:

   ```
   python manage.py runserver
   ```

4. Abre tu navegador web y accede a `http://localhost:8000` para comenzar a usar la aplicación.

## Notas Adicionales

- Asegúrate de tener los archivos de la aplicación con la siguiente jerarquía:
   ```
    - pizza
        - migrations
        - static
        - css
        - fonts
        - icons
        - javascript
        - sass
        - templates

    - project3

    manage.py
    .gitignore
    requirements.txt
    db.sqlite3
   ```

## A considerar

- Las credenciales de los usuarios no pueden ser modificadas, a menos que un administrador realice dicha acción.

- El sistema de envío de pedidos no cuenta con ningún método de validación de pago, y no existe un límite establecido en la cantidad de productos que pueden ser solicitados.

- El toque personal se refleja en la capacidad del administrador para agregar imágenes a los productos y en la autorización que debe dar para aprobar los pedidos recibidos.

- El usuario administrador principal tiene como nombre de usuario "Admin" y contraseña "Admin".

¡Espero que disfrutes utilizando la aplicación de Pizza! Si tienes alguna pregunta o necesitas más información, no dudes en contactarme.

## Hecho por: Carlos Adrián Espinosa Luna.