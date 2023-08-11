export const obtenerProducto = async(idProd)=>{
    let data = await fetch('../data/data.json');
    let dataForm = await data.json();
    let producto = await dataForm.find((prod)=>prod.id === idProd);
    return producto;  
}