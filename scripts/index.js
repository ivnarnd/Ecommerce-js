/*codigo de JavaScript*/
class Usuario{
    constructor(nombre, apellido, edad, compras, favoritos){
        this.nombre = nombre;
        this.apellido = apellido;
        this. edad = edad;
        this.compras = compras;
        this.favoritos = favoritos;
    }
}
class Compra {
    constructor(productos,estado,monto){
        this.monto = monto;
        this.productos = productos;
        this.estado = estado;


    }
    

    calcularMonto(){
        this.monto = this.productos.reduce((total,producto)=> total + producto,0);
    }
}
class Producto  {
    constructor(tipo,sabores,precio){
        this.tipo = tipo;
        this.sabores=sabores;
        this.precio = precio;
    }
}
class Sabor{
    constructor(nombre,descripcion,stock){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.stock = stock;
    }
}


const sabores = [
    {
      nombre: "Dulce de leche",
      descripcion: "Delicioso y cremoso helado con el sabor inconfundible del dulce de leche argentino, perfecto para los amantes de lo dulce y caramelizado.",
      stock: 10000
    },
    {
      nombre: "Frutilla",
      descripcion: "Refrescante y vibrante, este helado de frutilla ofrece el equilibrio perfecto entre dulzura y acidez, resaltando el sabor natural y jugoso de las fresas.",
      stock: 0
    },
     {
      nombre: "Chocolate amargo",
      descripcion: "Para los amantes del chocolate intenso, este helado ofrece una experiencia rica y profunda, con un sabor a cacao puro que deleitará a los paladares más exigentes.",
      stock: 5000
      },
    {
      nombre: "Menta granizada",
      descripcion: "Una combinación refrescante y crujiente, este helado de menta se mezcla con pequeños trozos de chocolate para crear una experiencia deliciosa y revitalizante.",
      stock: 12000
     },
    {
      nombre: "Banana split",
      descripcion: "Inspirado en el famoso postre, este helado combina el sabor suave y cremoso del helado de banana con una variedad de ingredientes adicionales, como salsa de chocolate, nueces y crema batida, para una experiencia indulgente.",
      stock: 0
    },
    {
      nombre: "Sambayón",
      descripcion: "El helado de sambayón ofrece una combinación única de yemas de huevo y vino, creando un sabor suave y dulce con un toque de sofisticación.",
      stock: 3000
    },
     {
      nombre: "Crema americana",
      descripcion: "Este helado de vainilla cremoso es enriquecido con trozos generosos de dulce, agregando una textura y sabor extra a cada cucharada.",
      stock: 7000
     },
    {
      nombre: "Frutos del bosque",
      descripcion: "Una explosión de sabores naturales, este helado combina una mezcla de frutas del bosque, como frambuesas, moras y arándanos, para crear una experiencia frutal y vibrante.",
      stock: 9000
    },
    {
      nombre: "Maracuyá",
      descripcion: "Este helado tropical de maracuyá ofrece un sabor agridulce y refrescante, capturando la esencia de la exótica fruta de la pasión.",
      stock: 0
    },
     {
      nombre: "Coco rallado",
      descripcion: "Un sabor tropical y cremoso, este helado de coco está lleno de trozos suaves de coco rallado, brindando una textura suave y un sabor tropical irresistible.",
      stock: 11000}
    ];




const escogerSabores=(cantidad,tipo)=>{
    let saboresElegidos = [];
    let cartelSabores = `Escoja un Sabor de helado: \n`;
    let gr = 0;
    let sabor = -1;
    switch (tipo) {
        case 1:
            gr = 1000 / cantidad;
            break;
        case 2:
                gr = 500 / cantidad;
                break;
        case 3: gr = 250 / cantidad;
                break;
        default:
            gr = 0;
            break;
    }


    let saboresDisp = sabores.filter(sabor => sabor.stock >= gr );
    console.log(saboresDisp);
    for (let i = 0; i < saboresDisp.length; i++) {
        cartelSabores = cartelSabores +`${i} ${saboresDisp[i].nombre}\n`;    
    }
    while(cantidad > 0){
       
        sabor = parseInt(prompt(cartelSabores));
        saboresElegidos.push(saboresDisp[sabor].nombre);
        saboresDisp[sabor].stock = saboresDisp[sabor].stock - gr;
        cantidad--; 
    }
        
    
    return saboresElegidos;
}


const menu = (usuario) => {
    let finalizado = false;
    let producto = new Producto(0,[],0);
    let compra =  new Compra([],false,0);
    let error = 0;
    
    while ((finalizado === false) && (compra.estado === false)){
        let op = parseInt(prompt
            ("Ihelados🍦\n Por Favor Escoja el tamaño de Su helado: \n 1. 1/4kg $1000\n 2. 1/2kg  $2000\n 3. 1kg $4000\n 4. Pagar \n 5.Cancelar y Salir"));
        switch (op) {
            case 1:
                producto.tipo = op;
                producto.precio = 1000;
                producto.sabores = escogerSabores(3,1);
                compra.productos.push(producto);
                alert(`Los sabores elegidos fueron: ${producto.sabores.join(',')}`);
                break;
            case 2: 
                producto.tipo = op;
                producto.precio = 2000;
                producto.sabores = escogerSabores(3,2);
                compra.productos.push(producto);
                alert(`Los sabores elegidos fueron: ${producto.sabores.join(',')}`);
                break;
            case 3: 
                producto.tipo = op;
                producto.precio = 4000;
                producto.sabores = escogerSabores(3,3);
                compra.productos.push(producto);
                alert(`Los sabores elegidos fueron: ${producto.sabores.join(',')}`);
                break;            
            case 4:
                compra.calcularMonto();
                console.log(compra.monto);
                alert("Usted debera Abonar $"+compra.monto+" Muchas Gracias por su compra!");
                compra.estado=true;
                break;
            case 5:
                alert("!Hasta luego,vuelva pronto¡");
                finalizado = true;
                break; 
            default:
                alert('No ingreso una opcion valida intentelo nuevamente');
                if(error < 5){
                  error = error +1;
                  continue;
                }
                else{
                    alert('Ha ingresado una opcion Erronea por quinta vez,Reinice la ventana de navegacion ');
                    finalizado=true;
                };
                break;  
        };

    };

    if(compra.estado){
       console.log(usuario.compras.push(compra)); 
    }
      


};
const inicio = () => {
    
    const nombre = prompt("¿Cual es tu nombre?");
    const apellido = prompt("¿Cual es tu apellido?");
    const edad = parseInt( prompt("¿Cual es tu edad?"));
    let favoritos = [];
    let compras = [];
    let usuario = new Usuario(nombre,apellido,edad,compras,favoritos);
    if (usuario.edad >= 18){
         alert('Hola ' + usuario.nombre + ' ' + usuario.apellido + ' ' + 'Bienvenido a Ihelados');
        menu(usuario);
    }else{
        alert('Debe ser mayor de edad para ingresar');
    }
};

inicio();