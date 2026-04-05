// VALIDAÇÃO DO FORMULÁRIO E ENVIO PARA O SERVIDOR
document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    // validar campos vazios
    if(nome === "" || email === "" || mensagem === ""){
        alert("Preencha todos os campos!");
        return;
    }

    // validar email
    if(!email.includes("@") || !email.includes(".")){
        alert("E-mail inválido!");
        return;
    }

    // enviar dados para o servidor
    fetch("/salvar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            mensagem: mensagem
        })
    })
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(dados){
        alert(dados.mensagem);
        document.getElementById("formulario").reset();
    })
    .catch(function(erro){
        alert("Erro ao enviar os dados.");
        console.log(erro);
    });
});


// TEMA CLARO / ESCURO
document.getElementById("tema").addEventListener("click", function() {
    document.body.classList.toggle("dark");
});