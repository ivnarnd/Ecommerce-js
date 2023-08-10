import { sabores } from "./sabores.js";
import{Usuario}from './clases/usuario.js';
const iniciar = (e) => {
    e.preventDefault();
    let fechaActual = new Date();
    const nombre = e.target.children[1].value;
    const apellido = e.target.children[3].value;
    const fechaNac = new Date(e.target.children[5].value);
    const edad = Math.floor((fechaActual - fechaNac) / (1000 * 60 * 60 * 24 * 365.25));
    let usuario;
    
    if (edad >= 18) {
        const usuarioenLS = JSON.parse(localStorage.getItem('usuario'));
        if(usuarioenLS && (usuarioenLS.nombre == nombre && usuarioenLS.apellido == apellido)){
            usuario = usuarioenLS;
        }else{
            usuario = new Usuario(nombre,apellido,edad);
            localStorage.setItem('usuario',JSON.stringify(usuario));
        }
        window.location.href='./pages/tienda.html';
     } else {
        Swal.fire({
                 text: "Eres menor de edad. Debes tener al menos 18 años para acceder.",
                 icon: 'warning'
             })
        
    }
};

const saboresEnLS=JSON.parse(localStorage.getItem('Sabores'));
if(saboresEnLS != true){
    localStorage.setItem('Sabores',JSON.stringify(sabores));
}

let form = document.getElementById('formulario_inicio');
form.addEventListener('submit',iniciar);