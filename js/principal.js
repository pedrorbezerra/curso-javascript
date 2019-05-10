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

var tdImc= paciente.querySelector(".info-imc");
tdImc.textContent = imc;


