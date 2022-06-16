let numeroCartas;

function comecaJogo() {
    numeroCartas = Number(prompt("Digite um número par de cartas(4,6,8,10,12 ou 14 cartas):"));

    while (numeroCartas % 2 !== 0 || numeroCartas > 14 || numeroCartas < 4) {
        alert("Digite novamente . Número de cartas inválido.")
        numeroCartas = Number(prompt("Digite um número par de cartas(4,6,8,10,12 ou 14 cartas):"));

    }

    console.log(numeroCartas);
    mostrarCartas();
}

function mostrarCartas() {
    document.querySelector(".cards").innerHTML = "";
    for (let index = 0; index < numeroCartas; index++) {
        let template = `
        <div class="card">
            <img src="images/front.png">
        </div>
        `

        document.querySelector(".cards").innerHTML += template;
    }
}
comecaJogo();