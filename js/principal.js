var title = document.querySelector(".title");
title.textContent = "Pedrão Nutrição";

var subTitle = document.querySelector("h2");
subTitle.textContent = "Fique lindo com as dicas de nutrição do Pedrão";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");	
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);
var tdImc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true;

if(peso <= 0 || peso >= 1000) {
  console.log("Peso inválido");
  pesoValido = false;
  tdImc.textContent = "Peso Inválido";
}

if(altura <= 0 || altura >= 3.00) {
    console.log("Altura Inválida");
    alturaValida = false;
    tdImc.textContent = "Altura Inválido";

}

if(alturaValida && pesoValido) {
var tdImc= paciente.querySelector(".info-imc");
tdImc.textContent = imc;
}

