export const obtenerData = async()=>{
    let data = await fetch('../data/data.json');
    let dataForm = await data.json();
    return dataForm;
}