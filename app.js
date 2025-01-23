// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Adicionar o nome à lista
    amigos.push(nome);

    // Atualizar a lista exibida na página
    atualizarLista();

    // Limpar o campo de entrada
    input.value = "";
    input.focus();
}

// Função para atualizar a lista exibida na página
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");

    // Limpar a lista atual
    lista.innerHTML = "";

    // Adicionar cada amigo à lista
    amigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione pelo menos um nome para realizar o sorteio.");
        return;
    }

    // Realizar o sorteio
    const sorteadoIndex = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[sorteadoIndex];

    // Exibir o resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${sorteado}</strong></li>`;
}