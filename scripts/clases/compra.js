 export class Compra {
    constructor(productos,estado,monto){
        this.monto = monto;
        this.productos = productos;
        this.estado = estado;


    }
    
    
    calcularMonto(){
         this.monto = this.productos.reduce((total,producto)=> total + producto.precio,0);
    }
}