const excelConfig = "https://script.google.com/macros/s/AKfycbyI8hMxRBhenbM15Iap2UOzFwdz7Vd_ESLg0SEqNwnEDJrvS9rE/exec";

addEventListener("message", async(e)=>{
    let data = new FormData();
    for(let [id, val] of Object.entries(e.data)){
        data.append(id, val);
    }
    const config = {
        method: "POST", 
        body: data
    }
    let peticion = await fetch(excelConfig, config);
    let json = await peticion.json();
    postMessage(json);
})