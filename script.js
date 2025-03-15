function calcular() {
    let atributos = [
        "forca", "resistencia", "agilidade", "vigor", 
        "inteligencia", "carisma", "resistenciaMental", "sentidos"
    ];
    
    let mensagem = "Resultados:\n";

    for (let atributo of atributos) {
        let valor = document.getElementById(atributo).value;

        if (valor < 0 || valor > 3) {
            document.getElementById("resultado").innerText = "Os valores precisam estar entre 0 e 3!";
            return;
        }

        mensagem += `${atributo.charAt(0).toUpperCase() + atributo.slice(1)}: ${valor} dado(s)\n`;
    }

    document.getElementById("resultado").innerText = mensagem;
}
