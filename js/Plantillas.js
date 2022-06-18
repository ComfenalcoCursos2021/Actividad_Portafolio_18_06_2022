let menu = (json)=>{
    let plantilla = ``;
    for (let data of json ) {
        plantilla += //html
        `
            <li><a href="${data.valor}">${data.nombre}</a></li>
        `;
    }
    return plantilla;
}

let home = (json)=>{
    let plantilla = //html
    `
        <h5>${json.presentacion}</h5>
        <h1>${json.nombre}</h1>
        <h6>${json.perfil}</h6>
        <p>${json.parrafo}</p>
        <a href="${json.boton.valor}" class="btn">${json.boton.nombre}</a>
    `;
    return plantilla;
}

let about = (json)=>{
    let plantilla = {
        informacion: //html 
        `
            <h3>${json.titulo}</h3>
            <h2>${json.subtitulo}</h2>
            <p>${json.presentacion}</p>
        `,
        contador: ``,
        botones: ``
    };
    for (let data of json.contador ) {
        plantilla.contador += //html
        `
            <a href="${data.valor}">${data.nombre}</a>
        `;
    }
    for (let data of json.boton ) {
        plantilla.botones += //html
        `
            <a href="${data.valor}" class="btn">${data.nombre}</a>
        `;
    }
    return plantilla;
}

let service = (json)=>{
    let plantilla = {
        titulo: //html
        `
            <h3>${json.titulo}</h3>
        `,
        servicios: ``
    };
    for (let data of json.lista ) {
        plantilla.servicios += //html
        `
        <div class="row">
            ${data.icono}
            <h3>${data.titulo}</h3>
            <p>${data.parrafo}</p>
        </div>
        `;
    }
    return plantilla;
}