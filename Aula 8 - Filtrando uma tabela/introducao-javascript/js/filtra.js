var inputFiltro = document.querySelector("#filtro");

inputFiltro.addEventListener("input", function () {
    var texto = this.value;

    var pacientes = document.querySelectorAll(".paciente");

    if (texto.length > 0) {

        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var nome = paciente.querySelector(".info-nome").textContent;

            var regex = new RegExp(texto, "i");

            if (!regex.test(nome)) {
                paciente.classList.add("invisivel");
            }
            else {
                paciente.classList.remove("invisivel");
            }
        }
    }
    else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }

});