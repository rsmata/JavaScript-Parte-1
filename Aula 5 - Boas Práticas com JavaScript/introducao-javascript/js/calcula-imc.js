var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tabela = obtemPesoEAlturaDaTabela(paciente);

    var tdImc = paciente.querySelector(".info-imc");

    if (validaPeso(tabela.peso) && validaAltura(tabela.altura)) {

        preencheTdImc(calculaImc(tabela.peso, tabela.altura));
    }
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function obtemPesoEAlturaDaTabela(paciente) {
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;

    var tabela = {
        peso: peso,
        altura: altura
    };

    return tabela;
}

function validaPeso(peso) {
    var pesoEhValido = true;

    if (peso <= 0 || peso >= 1000) {
        preencheTdImc("Peso inválido");
        pesoEhValido = false;
        adicionaClasseAoPaciente("paciente-invalido");
    }

    return pesoEhValido;
}

function validaAltura() {

    var alturaEhValida = true;

    if (altura <= 0 || altura >= 3) {
        preencheTdImc("Altura inválida");
        alturaEhValida = false;
        adicionaClasseAoPaciente("paciente-invalido");
    }

    return alturaEhValida;
}

function preencheTdImc(dado) {
    tdImc.textContent = dado;
}

function adicionaClasseAoPaciente(classe) {
    paciente.classList.add(classe);
}