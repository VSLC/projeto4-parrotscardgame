let numeroCartas;
let gifs = ["bobrossparrot.gif", "explodyparrot.gif",
    "fiestaparrot.gif", "metalparrot.gif",
    "revertitparrot.gif", "tripletsparrot.gif",
    "unicornparrot.gif"];

let limiteViradas;
let relogio = 0;
let contador = 0;
let elemento;
let elemento1;

function comparador() {
    return Math.random() - 0.5;
}

function comecaJogo() {
    zeraRelogio();
    numeroCartas = Number(prompt("Digite um número par de cartas(4,6,8,10,12 ou 14 cartas):"));

    while (numeroCartas % 2 !== 0 || numeroCartas > 14 || numeroCartas < 4) {
        alert("Digite novamente . Número de cartas inválido.")
        numeroCartas = Number(prompt("Digite um número par de cartas(4,6,8,10,12 ou 14 cartas):"));

    }

    console.log(numeroCartas);
    mostrarCartas();
    relogioContar();
}

function mostrarCartas() {
    document.querySelector(".cards").innerHTML = "";

    const listaImagens = [];
    gifs.sort(comparador);
    limiteViradas = 2;
    let quantidadeCartas = gifs.slice(0, numeroCartas / 2);

    for (i = 0; i < quantidadeCartas.length; i++) {
        listaImagens.push(quantidadeCartas[i]);
        listaImagens.push(quantidadeCartas[i]);
    }

    console.log(listaImagens);

    listaImagens.sort(comparador);
    console.log(listaImagens);

    for (let index = 0; index < numeroCartas; index++) {
        let template = `
        <div class="card" onclick="virarCartas(this);"  >
            <div class="front-face face">
                <img src="images/front.png">    
            </div>
            <div class="back-face face">
                <img src="images/${listaImagens[index]}">
            </div>
        </div>
        `

        document.querySelector(".cards").innerHTML += template;
    }
}

function virarCartas(elemento) {
    if (elemento.classList.contains("virar")) {
        return
    }
    else if (document.querySelectorAll(".card.virar").length >= limiteViradas) {
        return
    }

    elemento.classList.add("virar")

    let cartaVirada = document.querySelectorAll(".virar");
    contador++;
    if ((cartaVirada.length) % 2 !== 0) {
        elemento1 = elemento;
        imagem1 = elemento1.querySelector(".back-face img").src
    }
    else if ((cartaVirada.length) % 2 === 0) {
        let imagem2 = elemento.querySelector(".back-face img").src
        CompararCartas(imagem1, imagem2, elemento1, elemento)
    }

    function CompararCartas(imagem1, imagem2, elemento1, elemento) {
        if (imagem1 !== imagem2) {
            setTimeout(function remover() {
                elemento.classList.remove("virar")
                elemento1.classList.remove("virar")
            }, 1000);

        }
        else if (imagem1 === imagem2) {
            limiteViradas += 2
        }

        setTimeout(FinalizarPartida, 1000)

    }
}


comecaJogo();