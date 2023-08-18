$(document).ready(function() {
  const carrito = [];
  const productos = [
    { id: 1, nombre: "Producto 1", precio: 14, imagen: "img/35.jpg" },
    { id: 2, nombre: "Producto 2", precio: 20, imagen: "img/54.jpg" },
    { id: 3, nombre: "Producto 3", precio: 15, imagen: "img/73.jpg" },
    { id: 4, nombre: "Producto 4", precio: 13, imagen: "img/34.jpg" },
    { id: 5, nombre: "Producto 5", precio: 15, imagen: "img/33.jpg" },
    { id: 6, nombre: "Producto 6", precio: 17, imagen: "img/72.jpg" },
    { id: 7, nombre: "Producto 7", precio: 17, imagen: "img/71.jpg" },
    { id: 8, nombre: "Producto 8", precio: 10, imagen: "img/38.jpg" },
    { id: 9, nombre: "Producto 9", precio: 10, imagen: "img/55.jpg" },
    { id: 10, nombre: "Producto 10", precio: 11, imagen: "img/37.jpg" },
    { id: 11, nombre: "Producto 11", precio: 8, imagen: "img/36.jpg" },
    { id: 12, nombre: "Producto 12", precio: 8, imagen: "img/21.jpg" },
    { id: 13, nombre: "Producto 13", precio: 20, imagen: "img/19.jpg" },
    { id: 14, nombre: "Producto 14", precio: 12, imagen: "img/15.jpg" },
  ];
  

  let productosVisible = false; // Agrega una bandera para rastrear la visibilidad de la lista de productos

  mostrarResultados(productos);
  
  $("#cargarProductos").click(function() {
    productosVisible = !productosVisible; // Cambia el estado de la bandera de visibilidad
    if (productosVisible) {
      $("#productos").show();
      $(this).text("Ocultar Productos"); // Cambia el texto del botón a "Ocultar Productos"
    } else {
      $("#productos").hide();
      $(this).text("Cargar Productos"); // Cambia el texto del botón de nuevo a "Cargar Productos"
    }
  });

  $("#buscar").keyup(function() {
    const searchTerm = $(this).val().toLowerCase();
    const resultados = productos.filter(producto => producto.nombre.toLowerCase().includes(searchTerm));
    mostrarResultados(resultados);
  });

  function mostrarResultados(resultados) {
    $("#productos").empty();
    resultados.forEach(producto => {
      $("#productos").append(`
        <li data-id="${producto.id}">
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <span>${producto.nombre} - $${producto.precio}</span>
          <button class="agregar">Agregar</button>
        </li>
      `);
    });
    $(".agregar").click(function() {
      const idProducto = $(this).parent().data("id");
      const producto = productos.find(item => item.id === idProducto);
      carrito.push(producto);
      actualizarCarrito();
    });
  }
36
  function actualizarCarrito() {
    $("#carrito").empty();
    let total = 0;

    carrito.forEach(producto => {
      $("#carrito").append(`<li><img src="${producto.imagen}" alt="${producto.nombre}">${producto.nombre} - $${producto.precio} <button class="eliminar" data-id="${producto.id}">Eliminar</button></li>`);
      total += producto.precio;
    });

    $("#total").text(total);

    $(".eliminar").click(function() {
      const idProducto = $(this).data("id");
      const index = carrito.findIndex(item => item.id === idProducto);
      if (index !== -1) {
        carrito.splice(index, 1);
        actualizarCarrito();
      }
    });
    }

$("#realizarPedido").click(function() {
  if (carrito.length === 0) {
    alert("El carrito está vacío. Agregue productos antes de realizar un pedido.");
  } else {
    const productosPedido = [...carrito]; // Almacena los productos del carrito en una constante
    
    carrito.length = 0;
    actualizarCarrito();
    $("#productos").empty();
    $("#cargarProductos").text("Cargar Productos");
    localStorage.setItem("productosPedido", JSON.stringify(productosPedido)); // Guarda los productos en el caché
    alert("Pedido realizado con éxito. ¡Gracias por tu compra!");
  }
});

  });
