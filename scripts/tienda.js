  import { obtenerData } from "./obtenerProductos.js";
  import{renderizarProductos} from "./renderizarProductos.js";
  let productos = await obtenerData();
  let contenedor = document.querySelector('.row');
  renderizarProductos(productos,contenedor);



