function rolarDado() {
    return Math.floor(Math.random() * 20) + 1; // Rola 1d20
}

function calcular() {
    let atributos = [
        "forca", "resistencia", "agilidade", "vigor", 
        "inteligencia", "carisma", "resistenciaMental", "sentidos"
    ];
    
    let mensagem = "Resultados da rolagem:\n";

    for (let atributo of atributos) {
        let valor = parseInt(document.getElementById(atributo).value);

        if (valor < 0 || valor > 10 || isNaN(valor)) {
            document.getElementById("resultado").innerText = "Os valores precisam estar entre 0 e 10!";
            return;
        }

        let rolagens = [];
        let resultadoFinal;

        if (valor === 0) {
            rolagens.push(rolarDado(), rolarDado()); // Rola 2 dados
            resultadoFinal = Math.min(...rolagens); // Pega o pior
            mensagem += `${atributo.charAt(0).toUpperCase() + atributo.slice(1)}: ${rolagens} → ${resultadoFinal} (2d20 - Pior)\n`;
        } else if (valor === 1) {
            rolagens.push(rolarDado()); // Rola 1 dado
            resultadoFinal = rolagens[0]; // Só tem 1 dado
            mensagem += `${atributo.charAt(0).toUpperCase() + atributo.slice(1)}: ${rolagens} → ${resultadoFinal} (1d20)\n`;
        } else if (valor === 2) {
            rolagens.push(rolarDado(), rolarDado()); // Rola 2 dados
            resultadoFinal = Math.max(...rolagens); // Pega o melhor
            mensagem += `${atributo.charAt(0).toUpperCase() + atributo.slice(1)}: ${rolagens} → ${resultadoFinal} (2d20 - Melhor)\n`;
        } else if (valor === 3) {
            rolagens.push(rolarDado(), rolarDado(), rolarDado()); // Rola 3 dados
            resultadoFinal = Math.max(...rolagens); // Pega o melhor
            mensagem += `${atributo.charAt(0).toUpperCase() + atributo.slice(1)}: ${rolagens} → ${resultadoFinal} (3d20 - Melhor)\n`;
        } else {
            let rolagemQtd = valor;
            for (let i = 0; i < rolagemQtd; i++) {
                rolagens.push(rolarDado()); // Rola a quantidade de dados
            }
            resultadoFinal = Math.max(...rolagens); // Pega o melhor
            mensagem += `${atributo.charAt(0).toUpperCase() + atributo.slice(1)}: ${rolagens} → ${resultadoFinal} (${rolagemQtd}d20 - Melhor)\n`;
        }
    }

    document.getElementById("resultado").innerText = mensagem;
}
