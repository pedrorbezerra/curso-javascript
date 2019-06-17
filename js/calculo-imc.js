var title = document.querySelector(".title");
title.textContent = "Pedrão Nutrição";

var subTitle = document.querySelector("h2");
subTitle.textContent = "Fique lindo com as dicas de nutrição do Pedrão";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");	
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);
var tdImc = paciente.querySelector(".info-imc");

var pesoValido = validaPeso(peso);
var alturaValida = validaAltura(altura);

if(!pesoValido) {
  console.log("Peso inválido");
  pesoValido = false;
  tdImc.textContent = "Peso Inválido!";
  paciente.classList.add("paciente-invalido")
}

if(!alturaValida) {
    console.log("Altura Inválida");
    alturaValida = false;
    tdImc.textContent = "Altura Inválido";
    paciente.classList.add("paciente-invalido")

}

if(alturaValida && pesoValido) {
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
  }
}

function validaPeso(peso){

  if(peso >= 0 && peso < 1000){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura >= 0 && altura <=3.0){
    return true;
  }else{
    return false;
  }
}
function calculaImc(peso,altura){
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}

