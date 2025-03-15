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
        
        // Se o valor do atributo for 0, rola 2d20 e pega o pior
        if (valor === 0) {
            rolagens.push(rolarDado(), rolarDado());
            resultadoFinal = Math.min(...rolagens);
            mensagem += `${atributo.charAt(0).toUpperCase() + atributo.slice(1)}: ${rolagens} → ${resultadoFinal} (Pior de 2)\n`;
        } 
        // Se for 1 ou mais, rola Xd20 e pega o melhor
        else {
            for (let i = 0; i < valor; i++) {
                rolagens.push(rolarDado());
            }
            resultadoFinal = Math.max(...rolagens);
            mensagem += `${atributo.charAt(0).toUpperCase() + atributo.slice(1)}: ${rolagens} → ${resultadoFinal} (Melhor de ${valor})\n`;
        }
    }

    document.getElementById("resultado").innerText = mensagem;
}
