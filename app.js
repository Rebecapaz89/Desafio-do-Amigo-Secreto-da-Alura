let amigos = [];

function adicionarAmigo(){
  let inputAmigo = document.getElementById("amigo");
  let nomeAmigo = inputAmigo.value;

    if (nomeAmigo === "") {
        alert("Por favor, insira o nome de um amigo.");
        return;       
    }
    
    else if (amigos.includes(nomeAmigo)) {    
        alert("Este amigo já está na lista.");
        return;
    }
    
    amigos.push(nomeAmigo);
    inputAmigo.value = "";
    atualizarListas();
}

function atualizarListas(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(function(amigo) {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista de amigos está vazia.");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceSorteado];


  let resultado = document.getElementById("resultado");
  resultado.textContent = `🎉 O amigo secreto é: ${amigoSorteado}`;
}

  function reiniciarJogo() {
  amigos = [];
  document.getElementById("amigo").value = "";
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").textContent = "";
}