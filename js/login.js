
const botaoEnviar = document.querySelector("#btn-entrar");

botaoEnviar.addEventListener("click", validaCampo);

function validaCampo(){
    const campoSenha = document.getElementById("input-senha");
    const valorCampo = Number(campoSenha.value);

    if(Number.isNaN(valorCampo)){
        console.log9("Valor de senha inválido.");
        return;
    }

    console.log
}