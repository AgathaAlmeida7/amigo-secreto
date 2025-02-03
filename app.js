//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//subir pro meu git "amigo secreto"
//fazer um readme desse projeto etalhando suas funcionalidades, incluindo capturas de tela ou vídeos que mostrem como adicionar nomes e realizar o sorteio. Essa prática melhora a documentação e torna seu projeto mais acessível e profissional.

let listaAmigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nome = inputAmigo.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }
    
    listaAmigos.push(nome);
    atualizarLista();
    inputAmigo.value = "";
}

function atualizarLista() {
    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpa a lista antes de atualizar
    
    listaAmigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos dois nomes para sortear um amigo secreto.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let nomeSorteado = listaAmigos[indiceSorteado];

    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "";

    let mensagem = document.createElement("p");
    mensagem.textContent = `O amigo secreto sorteado é: ${nomeSorteado}`;
    mensagem.style.color = "green";
    mensagem.style.fontWeight = "bold";
    resultadoElement.appendChild(mensagem);
}

function reiniciarSorteio() {
    listaAmigos = []; // Zera a lista de amigos
    atualizarLista(); // Atualiza a lista na tela
    document.getElementById("resultado").innerHTML = ""; // Limpa o resultado do sorteio
}
