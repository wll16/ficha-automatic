function calcular() {
    let valor = document.getElementById("atributo").value;
    
    if (valor < 0 || valor > 3) {
        document.getElementById("resultado").innerText = "O valor precisa estar entre 0 e 3!";
        return;
    }

    let dados = valor; // Se for 1, rola 1d20; se for 2, pega o melhor de 2d20, etc.
    
    document.getElementById("resultado").innerText = `Você tem ${dados} dado(s) para rolar!`;
}
