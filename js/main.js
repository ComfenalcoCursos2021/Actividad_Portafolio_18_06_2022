const wsExcel = new Worker("js/wsExcel.js");
const wsFireBase = new Worker("js/wsFireBase.js");
addEventListener("DOMContentLoaded", (e)=>{
    // wsFireBase.postMessage(null);
    // wsFireBase.addEventListener("message", (e)=>{
    //     console.log(e.data);
    //     // wsFireBase.terminate();
    // })

    // let data = {
    //     hoja: "FormularioHtml",
    //     Nombre: "Miguel",
    //     Email: "",
    //     Descripcion: "Hola Mundo"
    // }
    // wsExcel.postMessage(data);
    // wsExcel.addEventListener("message", (e)=>{
    //     console.log(e.data);
    //     // wsExcel.terminate();
    // })
})