// VALIDAÇÃO DO FORMULÁRIO
document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if(nome === "" || email === "" || mensagem === ""){
        alert("Preencha todos os campos!");
        return;
    }

    if(!email.includes("@") || !email.includes(".")){
        alert("E-mail inválido!");
        return;
    }

    alert("Mensagem enviada com sucesso!");

    // limpar campos
    document.getElementById("formulario").reset();
});


// TEMA CLARO/ESCURO
document.getElementById("tema").addEventListener("click", function() {
    document.body.classList.toggle("dark");
});