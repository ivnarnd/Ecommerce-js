let sabores = JSON.parse(localStorage.getItem('Sabores'));
let contenedorSabores=document.getElementById('contenedor-sabores');
console.log(contenedorSabores);

for (const sabor of sabores) {
    let contenedor = document.createElement('div');
    contenedor.classList.add('sabor-item');
    contenedor.innerHTML=
    `<img class="sabor-item-img" src="../images/helado-frutilla.jpg" alt="Helado de ${sabor.nombre}">
    <section class="sabor-item-detalle">
        <h4>${sabor.nombre}</h4>
        <section class="detalle-btns">
            <button class="boton-sabores" alt="boton de añadir a cesta">✚</button>
            <button class="boton-sabores" alt="boton de añadir a favoritos">★</button>
        </section>
    </section>`
    contenedorSabores.append(contenedor);
    
}