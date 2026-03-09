const botaoEnviar = document.querySelector("#btn-entrar");
botaoEnviar.addEventListener("click",function(){console.log('TESTE')});


function validaCampo(){
const campoSenha = document.getElementById("input-senha");
let valorCampo = parseInt (campoSenha.value);
}

console.log(valorCampo % 2 == 0);


const valorHash = valorCampo ** 2;
console.log(valorHash);

// Capturando os dados do campo SENHA:


const botaoEnviar = document.querySelector("#btn-entrar");

botaoEnviar.addEventListener("click", validaCampo);

function validaCampo(){
    const campoSenha = document.getElementById("input-senha");
    let valorCampo = parseInt(campoSenha.value);


    console.log(valorCampo % 2 == 0);


    // Simulacao de HASH
    const valorHash = valorCampo**
    console.log(valorHash);


}






