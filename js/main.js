const wsExcel = new Worker("js/wsExcel.js");
const wsFireBase = new Worker("js/wsFireBase.js");
addEventListener("DOMContentLoaded", (e)=>{
    wsFireBase.postMessage(null);
    wsFireBase.addEventListener("message", (e)=>{
        const key = Object.keys(e.data)[0];
        switch (key) {
            case "menu":
                document.querySelector(".navbar").innerHTML="";
                document.querySelector(".navbar").insertAdjacentHTML("beforeend", e.data[key]);
                break;
            case "home":
                document.querySelector(".home-text").innerHTML="";
                document.querySelector(".home-text").insertAdjacentHTML("beforeend", e.data[key]);
                break;
            case "about":
                document.querySelector(".about-text").innerHTML="";
                document.querySelector(".about-text").insertAdjacentHTML("beforeend", e.data[key].informacion);

                let divCount = document.createElement("DIV");
                divCount.classList.add("count");
                let divMain = document.createElement("DIV");
                divMain.classList.add("main-btn");
                
                divCount.insertAdjacentHTML("beforeend", e.data[key].contador);
                divMain.insertAdjacentHTML("beforeend", e.data[key].botones);
                document.querySelector(".about-text").append(divCount, divMain);

                
                break;
            case "service":
                document.querySelector(".center").innerHTML="";
                document.querySelector(".service-content").innerHTML="";
                document.querySelector(".center").insertAdjacentHTML("beforeend", e.data[key].titulo);
                document.querySelector(".service-content").insertAdjacentHTML("beforeend", e.data[key].servicios);

                break;
            default:
                console.log("null config");
                break;
        }
        // wsFireBase.terminate();
    })
    addEventListener("submit", (e)=>{
        let frag = document.createDocumentFragment();
        let data = Object.fromEntries(Array.from(new FormData(e.target)));
        frag.append(document.querySelector("form"));
        document.querySelector(".contact-from").insertAdjacentHTML("afterbegin", `<img src="img/charging.gif">`);
        data.hoja = "FormularioHtml";
        wsExcel.postMessage(data);
        wsExcel.addEventListener("message", (e)=>{
            if(e.data.mensaje){
                document.querySelector(".contact-from").innerHTML="";
                document.querySelector(".contact-from").insertAdjacentElement("afterbegin", frag.children[0]);
                document.querySelector("form").reset();
            }
        })
        e.preventDefault();
    })
    document.querySelector("#menu-icon").addEventListener("click", (e)=>{
        document.querySelector("#menu-icon").classList.toggle("bx-x");
        document.querySelector(".navbar").classList.toggle("active");
    })
    addEventListener("scroll", (e)=>{
        document.querySelector("#menu-icon").classList.remove("bx-x");
        document.querySelector(".navbar").classList.remove("active");
    })
    const sr = ScrollReveal({
        distance: "60px",
        duration: 2500,
        reset: true
    })
    sr.reveal('.home-text', {delay: 200, origin: 'top'});
    sr.reveal('.home-img', {delay: 400, origin: 'top'});
    sr.reveal('.about, .service, .copyright', {delay: 200, origin: 'top'});
})