import { Producto } from "./producto.js";

export class Usuario{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this. edad = edad;
        this.compras = [];
        this.favoritos = [];
        this.carrito = [];
    }

}