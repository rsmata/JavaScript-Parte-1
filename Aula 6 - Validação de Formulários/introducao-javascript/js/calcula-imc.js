var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tabela = obtemPesoEAlturaDaTabela(paciente);
    var pesoEhValido = validaPeso(tabela.peso);
    var alturaEhValida = validaAltura(tabela.altura);

    var tdImc = paciente.querySelector(".info-imc");
    
    if (!pesoEhValido) {
        preencheTdImc("Peso inválido");
        adicionaClasseAoPaciente("paciente-invalido");
    }

    if (!alturaEhValida) {
        preencheTdImc("Altura inválida");
        adicionaClasseAoPaciente("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
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
    return (peso > 0 && peso < 1000);
}

function validaAltura(altura) {
    return (altura > 0 && altura < 3);
}

function preencheTdImc(dado) {
    tdImc.textContent = dado;
}

function adicionaClasseAoPaciente(classe) {
    paciente.classList.add(classe);
}