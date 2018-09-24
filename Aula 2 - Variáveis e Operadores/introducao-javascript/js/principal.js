﻿var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var trPaciente = document.querySelector("#primeiro-paciente");
var tdPeso = trPaciente.querySelector(".info-peso");
var tdAltura = trPaciente.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var tdImc = trPaciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    tdImc.textContent = "Peso inválido";
    pesoEhValido = false;
}
if (altura <= 0 || altura >= 3) {
    tdImc.textContent = "Altura inválida";
    alturaEhValida = false;
}

if (pesoEhValido && alturaEhValida) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}