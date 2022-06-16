let numeroCartas;

function comecaJogo() {
    numeroCartas = Number(prompt("Digite um número par de cartas(4,6,8,10,12 ou 14 cartas):"));

    while (numeroCartas % 2 !== 0 || numeroCartas > 14 || numeroCartas < 4) {
        alert("Digite novamente . Número de cartas inválido.")
        numeroCartas = Number(prompt("Digite um número par de cartas(4,6,8,10,12 ou 14 cartas):"));

    }

    console.log(numeroCartas);
}

comecaJogo();