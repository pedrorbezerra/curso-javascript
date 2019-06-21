var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    // abrindo conexão
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    
    //adicionando escutador 
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if( xhr.status == 200){
        erroAjax.classList.add("invisivel");
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        console.log(xhr.status);
        pacientes.forEach(function(paciente){
            adicionaPacienteTabela(paciente);
        });
    }else{
        erroAjax.classList.remove("invisivel");
        console.log(xhr.status);
        console.log(xhr.responseText);
    }
    });
    xhr.send();


});






