// Captura os elementos da página
const formulario = document.getElementById("formulario");
const produto = document.getElementById("produto");
const lista = document.getElementById("lista");
const mensagem = document.getElementById("mensagem");
const contador = document.getElementById("contador");
const removerComprados = document.getElementById("removerComprados");

// Variável para controlar a quantidade de produtos
let totalProdutos = 0;

// Atualiza o contador na tela
function atualizarContador() {
    contador.textContent = totalProdutos;
}

// Escuta o envio do formulário
formulario.addEventListener("submit", function(event) {

    // Impede o recarregamento da página
    event.preventDefault();

    // Remove espaços extras
    const nomeProduto = produto.value.trim();

    // Verifica se o campo está vazio
    if (nomeProduto === "") {
        mensagem.textContent = "Digite um produto!";
        mensagem.className = "erro";
        return;
    }

    // Exibe mensagem de sucesso
    mensagem.textContent = "Produto adicionado!";
    mensagem.className = "sucesso";

    // Cria um item da lista
    const item = document.createElement("li");

    // Cria o texto do produto
    const texto = document.createElement("span");
    texto.textContent = nomeProduto;

    // Botão para marcar como comprado
    const btnComprar = document.createElement("button");
    btnComprar.textContent = "Comprado";

    btnComprar.addEventListener("click", function() {
        texto.classList.toggle("comprado");
    });

    // Botão para remover produto
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";

    btnRemover.addEventListener("click", function() {
        item.remove();
        totalProdutos--;
        atualizarContador();
    });

    // Adiciona elementos ao item
    item.appendChild(texto);
    item.appendChild(btnComprar);
    item.appendChild(btnRemover);

    // Adiciona item na lista
    lista.appendChild(item);

    // Atualiza contador
    totalProdutos++;
    atualizarContador();

    // Limpa o campo
    produto.value = "";
});

// Remove todos os produtos comprados
removerComprados.addEventListener("click", function() {

    // Seleciona todos os itens marcados como comprados
    const comprados = document.querySelectorAll(".comprado");

    // Remove cada item encontrado
    comprados.forEach(function(item) {
        item.parentElement.remove();
        totalProdutos--;
    });

    // Atualiza contador
    atualizarContador();
});