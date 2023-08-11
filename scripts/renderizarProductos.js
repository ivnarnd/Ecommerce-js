export const renderizarProductos = (productos,contenedor)=>{
    productos.forEach(producto => {
    let card = document.createElement('div');
    card.classList.add('col');
    card.innerHTML=`<div class="card h-100">
    <img src=${producto.img} class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.descripcion}</p>
        <p class="card-text">Precio: $${producto.precio}</p>
        <a href='../pages/detalle.html?id=${producto.id}' class="btn btn-outline-info">Ver detalle</a>
    </div>
    </div>`;
    contenedor.append(card);
  });
}