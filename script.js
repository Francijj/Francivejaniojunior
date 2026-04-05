document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if(nome === "" || email === "" || mensagem === ""){
        alert("Preencha todos os campos!");
        return;
    }

    fetch("http://127.0.0.1:5000/salvar", {
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
    .then(res => res.json())
    .then(data => {
        alert(data.mensagem);
        document.getElementById("formulario").reset();
    })
    .catch(error => {
        console.error(error);
        alert("Erro ao enviar dados");
    });
});