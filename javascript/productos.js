// Datos de ejemplo en forma de un array de objetos
const productos = [
    {
      nombre: "Producto 1",materiales: "Brazalete de girasol, realizads con técnica de alambrismo y<br>con chaquiras de color amarillo y café oscuro.",imagenSrc: "img/35.jpg",precio: "$14"
    },
    {
      nombre: "Producto 2",materiales: "Juego de brazalete y aretes de girasol, realizados con técnica de alambrismo y <br>con chaquiras de color amarillo y café oscuro.",imagenSrc: "img/54.jpg",precio: "$20"
    },
    {
      nombre: "Producto 3",materiales: "Juego de aretes y dije,  realizados con técnica de alambrismo y cascajos en color turquesa",imagenSrc: "img/73.jpg",precio: "$15"
    },
    {
      nombre: "Producto 4",materiales: "Aretes relizados con técnica de alambrismo y cristal checo en color negro.",imagenSrc: "img/34.jpg",precio: "$13"
    },
    {
        nombre: "Producto 5",materiales: "Aretes realizados con técnica de alambrismo y cristal checo en color lila.",imagenSrc: "img/33.jpg",precio: "$15"
      },
      {
        nombre: "Producto 6",materiales: "Pulsera de acero con perlas naturales y dije de corazón en acero.",imagenSrc: "img/72.jpg",precio: "$17"
      },
      {
        nombre: "Producto 7",materiales: "Pulsera de hilo elástico con dije de acero, perlas naturales y cristales.",imagenSrc: "img/71.jpg",precio: "$17"
      },
      {
        nombre: "Producto 8",materiales: "Aretes realizados con técnica de alambrismo y cristal checo color azul.",imagenSrc: "img/38.jpg",precio: "$10"
      },
      {
        nombre: "Producto 9",materiales: "Aretes realizados con técnica de alambrismo y cristal checo color vino.",imagenSrc: "img/55.jpg",precio: "$10"
      },
      {
        nombre: "Producto 10",materiales: "Aretes realizados con técnica de alambrismo y chaquiras en color lila ",imagenSrc: "img/37.jpg",precio: "$11"
      },
      {
        nombre: "Producto 11",materiales: "Aretes realizados con técnica de alambrismo.",imagenSrc: "img/36.jpg",precio: "$8"
      },
      {
        nombre: "Producto 12",materiales: "Aretes realizados con técnica de alambrismo y perlas de concha de nácar .",imagenSrc: "img/21.jpg",precio: "$8"
      },
      {
        nombre: "Producto 13",materiales: "Juego de collar de acero y anillo realizado con técnica de alambrismo y perla de concha de nácar.",imagenSrc: "img/1.jpg",precio: "$20"
      },
      {
        nombre: "Producto 14",materiales: "Anillo realizado con técnica de alambrismo y cristal checo color celeste.",imagenSrc: "img/1.jpg",precio: "$12"
      },
      // Puedes agregar más objetos aquí si es necesario
    ];
    
    // Función para cargar los datos en la tabla
  function cargarDatosEnTabla() {
    const tbody = document.querySelector("tbody");
  
    productos.forEach(producto => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.materiales}</td>
        <td><img src="${producto.imagenSrc}" alt="${producto.nombre}"></td>
        <td>${producto.precio}</td>
      `;
      tbody.appendChild(row);
    });
  }
  
  // Llamada a la función para cargar los datos cuando la página cargue
  document.addEventListener("DOMContentLoaded", cargarDatosEnTabla);
