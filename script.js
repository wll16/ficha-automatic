let editando = false;  // Controla o modo de edição

// Função para alternar entre editar e visualizar
function toggleEditar() {
    editando = !editando;
    const inputs = document.querySelectorAll('.atributo input');
    const spans = document.querySelectorAll('.atributo span');

    if (editando) {
        // Ativa o modo de edição
        inputs.forEach(input => input.style.display = 'inline-block');
        spans.forEach(span => span.style.display = 'none');
    } else {
        // Desativa o modo de edição
        inputs.forEach(input => input.style.display = 'none');
        spans.forEach(span => span.style.display = 'inline-block');
    }
}

// Função para trocar de aba
function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    const selectedTab = document.getElementById(tabName);
    selectedTab.classList.add('active');
}

// Função para rodar o dado
function rodarDado(atributo) {
    const valorAtributo = document.getElementById('input-' + atributo).value;
    let resultado;

    if (valorAtributo == 0) {
        // Rola 2 dados e pega o pior
        resultado = Math.min(rollDice(), rollDice());
    } else if (valorAtributo == 1) {
        // Rola 1 dado
        resultado = rollDice();
    } else if (valorAtributo == 2) {
        // Rola 2 dados e pega o melhor
        resultado = Math.max(rollDice(), rollDice());
    } else if (valorAtributo == 3) {
        // Rola 3 dados e pega o melhor
        resultado = Math.max(rollDice(), rollDice(), rollDice());
    }

    alert(`Resultado para ${atributo}: ${resultado}`);
}

// Função para rolar o dado
function rollDice() {
    return Math.floor(Math.random() * 20) + 1;
}
