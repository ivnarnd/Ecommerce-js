/*codigo de JavaScript*/

const inicio = () => {
    const nombre = prompt("¿Cual es tu nombre?");
    const Apellido = prompt("¿Cual es tu apellido?");
    const edad = parseInt( prompt("¿Cual es tu edad?"));
    if (edad >= 18){
    alert('Hola ' + nombre + ' ' + Apellido + ' ' + 'Bienvenido a Ihelados');
    }else{
        alert('Debe ser mayor de edad para ingresar');
    }
};

inicio();