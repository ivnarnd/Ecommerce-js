import { Producto } from "./clases/producto.js";
/*Variables de la tienda*/
let sabores = JSON.parse(localStorage.getItem('Sabores'));
let usuario = JSON.parse(localStorage.getItem('usuario'));
let filtroGr = document.getElementsByClassName('btn-radio');
let contenedorSabores=document.getElementById('contenedor-sabores');

let agregarSab = (padre)=>{
    console.log(padre);
}

function desplegarItemsSabores(e){
    let productoAct = new Producto(Number(e.target.value),[]);
    console.log(productoAct);
    while (contenedorSabores.firstChild) {
        contenedorSabores.firstChild.remove();
    }
    let saboresDisp = sabores.filter((sab)=> sab.stock >= productoAct.tipo);
    for (const sabor of saboresDisp) {
        let contenedor = document.createElement('div');
        contenedor.classList.add('sabor-item');
        contenedor.innerHTML=
        `<img class="sabor-item-img" src="../images/helado-frutilla.jpg" alt="Helado de ${sabor.nombre}">
        <section class="sabor-item-detalle">
            <h4>${sabor.nombre}</h4>
            <section class="detalle-btns">
                <button class="boton-sabores add" id='${sabor.id}' alt="boton de añadir a cesta">✚</button>
                <button class="boton-sabores fav" id='${sabor.nombre}' alt="boton de añadir a favoritos">★</button>
            </section>
        </section>`;
        contenedorSabores.append(contenedor);    
    }

}
for (const filtro of filtroGr) {
    filtro.addEventListener('click',desplegarItemsSabores);
}
 



// const escogerSabores=(cantidad,tipo)=>{
//     let saboresElegidos = [];
//     let cartelSabores = `Escoja un Sabor de helado: \n`;
//     let gr = 0;
//     let sabor = -1;
//     switch (tipo) {
//         case 1:
//             gr = 1000 / cantidad;
//             break;
//         case 2:
//                 gr = 500 / cantidad;
//                 break;
//         case 3: gr = 250 / cantidad;
//                 break;
//         default:
//             gr = 0;
//             break;
//     }


//     let saboresDisp = sabores.filter(sabor => sabor.stock >= gr );
//     for (let i = 0; i < saboresDisp.length; i++) {
//         cartelSabores = cartelSabores +`${i} ${saboresDisp[i].nombre}\n`;    
//     }
//     while(cantidad > 0){
       
//         sabor = parseInt(prompt(cartelSabores));
//         saboresElegidos.push(saboresDisp[sabor].nombre);
//         saboresDisp[sabor].stock = saboresDisp[sabor].stock - gr;
//         cantidad--; 
//     }
        
    
//     return saboresElegidos;
// }


// const menu = (usuario) => {
//     let finalizado = false;
//     let producto = new Producto(0,[],0);
//     let compra =  new Compra([],false,0);
//     let error = 0;
    
//     while ((finalizado === false) && (compra.estado === false)){
        
//         let op = parseInt(prompt
//             ("Ihelados🍦\n Por Favor Escoja el tamaño de Su helado: \n 1. 1/4kg $1000\n 2. 1/2kg  $2000\n 3. 1kg $4000\n 4. Pagar \n 5.Cancelar y Salir"));
//         switch (op) {
//             case 1:
                
//                 compra.productos.push(new Producto(op,escogerSabores(3,1),1000));
//                 alert(`Los sabores elegidos fueron: ${producto.sabores.join(',')}`);
//                 break;
//             case 2: 
//                 compra.productos.push(new Producto(op,escogerSabores(3,2),2000));
//                 alert(`Los sabores elegidos fueron: ${producto.sabores.join(',')}`);
//                 break;
//             case 3: 
//                 compra.productos.push(new Producto(op,escogerSabores(3,3),4000));
//                 alert(`Los sabores elegidos fueron: ${producto.sabores.join(',')}`);
//                 break;            
//             case 4:
//                 compra.calcularMonto();
                
//                 alert("Usted debera Abonar $"+compra.monto+" Muchas Gracias por su compra!");
//                 compra.estado=true;
//                 break;
//             case 5:
//                 alert("!Hasta luego,vuelva pronto¡");
//                 finalizado = true;
//                 break; 
//             default:
//                 alert('No ingreso una opcion valida intentelo nuevamente');
//                 if(error < 5){
//                   error = error +1;
//                   continue;
//                 }
//                 else{
//                     alert('Ha ingresado una opcion Erronea por quinta vez,Reinice la ventana de navegacion ');
//                     finalizado=true;
//                 };
//                 break;  
//         };

//     };

//     if(compra.estado){
//        usuario.compras.push(compra); 
//     }
      


// };