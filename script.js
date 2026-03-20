let modal1  = document.getElementById("direitoFam")

function direitoFam(){
    modal1.showModal()
    document.getElementById("block-direito-familia").classList.add("hidden")
    document.body.classList.add("no-scroll")
}

function fechar1(){
    modal1.close()
    document.getElementById("block-direito-familia").classList.remove("hidden")
    document.body.classList.remove("no-scroll")
}


let modal2  = document.getElementById("direitoCon")

function direitoCon(){
    modal2.showModal()
    document.getElementById("block-direito-consumi").classList.add("hidden")
    document.body.classList.add("no-scroll")
}

function fechar(){
    modal2.close()
    document.getElementById("block-direito-consumi").classList.remove("hidden")
    document.body.classList.remove("no-scroll")
}

function darkmode(){
    var body = document.body;
    body.classList.toggle("dark");

    let logo = document.getElementById("logo")
    if (document.body.classList.contains("dark")) {
        logo.src = "img/logo-me.png"
    } else {
        logo.src = "img/logo-mc.png"
    }

    let moon = document.getElementById("moon")
    if (document.body.classList.contains("dark")) {
        moon.src = "img/sun.svg"
    } else {
        moon.src = "img/moon.svg"
    }

    let logo2 = document.getElementById("logo2")
    if (document.body.classList.contains("dark")) {
        logo2.src = "img/logo-me.png"
    } else {
        logo2.src = "img/logo-mc.png"
    }
}

function copiar(elemento){
    const text = elemento.innerText

    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Copiado: " + text)
        })
}

function fMenu(){
    document.getElementById("block-menu").classList.add("mostrar-menu")
}