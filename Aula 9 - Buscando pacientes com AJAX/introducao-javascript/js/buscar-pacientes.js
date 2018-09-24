var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
    var erroAjax = document.querySelector("#erro-ajax");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientess");

    xhr.addEventListener("load", function () {

        if (xhr.status == "200") {

            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            erroAjax.classList.add("invisivel");

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        }
        else {
            console.log("erro");
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});