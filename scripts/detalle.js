import { renderizarProducto } from "./renderizarProducto.js";
import { obtenerProducto } from "./obtenerProducto.js";
const getParamUrl = (param)=>{
    const urlParam = new URLSearchParams(window.location.search);
    return(parseInt(urlParam.get(param)));
}
let idProd = getParamUrl('id');
let contenedor = document.querySelector('.container');
let productoRender = await obtenerProducto(idProd);
renderizarProducto(contenedor,productoRender);
