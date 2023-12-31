export const renderizarProducto = (contenedor,producto)=>{
    let elementoProduct = document.createElement('div');
    elementoProduct.classList.add("row","flex-lg-row-reverse","align-items-center","g-5","py-5");
    elementoProduct.innerHTML=`
        <div class="col-10 col-sm-8 col-lg-6">
            <img src=${producto.img} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">${producto.nombre}</h1>
          <p class="lead">${producto.descripcion}</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <p class="card-text">Precio: $${producto.precio}</p>
            <a href='../pages/detalle.html?id=${producto.id}' class="btn btn-outline-info disable">Agregar al carrito</a>
          </div>
        </div>`;
    contenedor.append(elementoProduct);
  }