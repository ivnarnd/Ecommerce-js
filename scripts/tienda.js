 const obtenerData = async()=>{
    let data = await fetch('../data/data.json');
    let dataForm = await data.json();
    let contenedor = document.querySelector('.row');
    dataForm.forEach(producto => {
        let product = document.createElement('div');
        product.classList.add('col');
        product.innerHTML=`
                  <div class="card h-100">
                    <img src=${producto.img} class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${producto.nombre}</h5>
                      <p class="card-text">${producto.descripcion}</p>
                      <p class="card-text">Precio: $${producto.precio}</p>
                      <a href='../pages/detalle.html?id=${producto.id}' class="btn btn-outline-info">Ver detalle</a>
                    </div>
                  </div>`
                ;
        contenedor.append(product);
    });
}

obtenerData();



