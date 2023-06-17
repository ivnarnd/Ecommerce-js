/*codigo de JavaScript*/
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
    const Apellido = prompt("¿Cual es tu apellido?");
    const edad = parseInt( prompt("¿Cual es tu edad?"));
    if (edad >= 18){
        alert('Hola ' + nombre + ' ' + Apellido + ' ' + 'Bienvenido a Ihelados');
        menu();
    }else{
        alert('Debe ser mayor de edad para ingresar');
    }
};
inicio();