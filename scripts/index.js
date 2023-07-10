/*codigo de JavaScript*/
class Usuario{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this. edad = edad;
    }
}
const sabores = [
    {
      nombre: "Dulce de leche",
      descripcion: "Delicioso y cremoso helado con el sabor inconfundible del dulce de leche argentino, perfecto para los amantes de lo dulce y caramelizado.",
      stock: 10.000
    },
    {
      nombre: "Frutilla",
      descripcion: "Refrescante y vibrante, este helado de frutilla ofrece el equilibrio perfecto entre dulzura y acidez, resaltando el sabor natural y jugoso de las fresas.",
      stock: 8.000
    },
     {
      nombre: "Chocolate amargo",
      descripcion: "Para los amantes del chocolate intenso, este helado ofrece una experiencia rica y profunda, con un sabor a cacao puro que deleitará a los paladares más exigentes.",
      stock: 5.000
      },
    {
      nombre: "Menta granizada",
      descripcion: "Una combinación refrescante y crujiente, este helado de menta se mezcla con pequeños trozos de chocolate para crear una experiencia deliciosa y revitalizante.",
      stock: 12.000
     },
    {
      nombre: "Banana split",
      descripcion: "Inspirado en el famoso postre, este helado combina el sabor suave y cremoso del helado de banana con una variedad de ingredientes adicionales, como salsa de chocolate, nueces y crema batida, para una experiencia indulgente.",
      stock: 6.000
    },
    {
      nombre: "Sambayón",
      descripcion: "El helado de sambayón ofrece una combinación única de yemas de huevo y vino, creando un sabor suave y dulce con un toque de sofisticación.",
      stock: 3.000
    },
     {
      nombre: "Crema americana",
      descripcion: "Este helado de vainilla cremoso es enriquecido con trozos generosos de dulce, agregando una textura y sabor extra a cada cucharada.",
      stock: 7.000
     },
    {
      nombre: "Frutos del bosque",
      descripcion: "Una explosión de sabores naturales, este helado combina una mezcla de frutas del bosque, como frambuesas, moras y arándanos, para crear una experiencia frutal y vibrante.",
      stock: 9.000
    },
    {
      nombre: "Maracuyá",
      descripcion: "Este helado tropical de maracuyá ofrece un sabor agridulce y refrescante, capturando la esencia de la exótica fruta de la pasión.",
      stock: 4.000
    },
     {
      nombre: "Coco rallado",
      descripcion: "Un sabor tropical y cremoso, este helado de coco está lleno de trozos suaves de coco rallado, brindando una textura suave y un sabor tropical irresistible.",
      stock: 11.000}
    ];
  
const escogerSabores=(cantidad)=>{
    let cartel = 'Usted escogio los Siguientes sabores: ';
    while(cantidad > 0){
        let sabor = parseInt(prompt("SABORES \n 1.Pistacho \n 2.Vainilla \n 3.Frutilla \n 4.Chocolate \n 5.Dulce de Leche"));
        switch (sabor) {
            case 1:
                cantidad--;
                alert('Sabor Pistacho Agredado Satisfactoriamente');
                cartel = cartel+' Pistacho';
                break;
            case 2:
                cantidad--;
                alert('Sabor Vainilla Agredado Satisfactoriamente');
                cartel = cartel+' Vainilla';
                break;
            case 3:
                cantidad--;
                alert('Sabor Frutilla Agredado Satisfactoriamente');
                cartel = cartel+' Frutilla';
                break;
            case 4:
                cantidad--;
                alert('Sabor Chocolate Agredado Satisfactoriamente');
                cartel = cartel+' Chocolate';
                break;
            case 5:
                cantidad--;
                alert('Sabor Dulce de Leche Agredado Satisfactoriamente');
                cartel = cartel+' Dulce de Leche';
                break;
            default:
                alert('Opcion Incorrecta!');
                continue;
        }
        
    }
    return cartel;
}


const menu = () => {
    let pagado = false;
    let precio = 0;
    let finalizado = false;
    let error = 0;
    
    while ((finalizado === false) && (pagado === false)){
        let op = parseInt(prompt("Ihelados🍦\n Por Favor Escoja el tamaño de Su helado: \n 1. 1/4kg $1000\n 2. 1/2kg  $2000\n 3. 1kg $4000\n 4. Pagar \n 5.Cancelar y Salir"));
        switch (op) {
            case 1:
                precio = precio + 1000;
                alert(escogerSabores(3));
                break;
            case 2: precio = precio + 2000;
                alert(escogerSabores(3));
                break;
            case 3: 
                precio = precio + 4000;
                alert(escogerSabores(3));
                break;
            case 4: 
                alert("Usted debera Abonar $"+precio+" Muchas Gracias por su compra!");
                pagado=true;
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
      


};
const inicio = () => {
    const nombre = prompt("¿Cual es tu nombre?");
    const apellido = prompt("¿Cual es tu apellido?");
    const edad = parseInt( prompt("¿Cual es tu edad?"));
    const usuario = new Usuario(nombre,apellido,edad);
    if (usuario.edad >= 18){
        alert('Hola ' + usuario.nombre + ' ' + usuario.apellido + ' ' + 'Bienvenido a Ihelados');
        menu();
    }else{
        alert('Debe ser mayor de edad para ingresar');
    }
};
inicio();