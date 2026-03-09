
const botaoEnviar = document.querySelector("#btn-entrar")

//botaoEnviar.addEventListener( "click", function(){
//    console.log()
// } );


function CampoValida(){
    //capturando os dados do campo SENHA
const CampoSenha = document.getElementById("Input-senha");
let CampoValor = parseInt(CampoSenha.value);


//Verificando se a senha é PAR
console.log(CampoValor % 2 == 0)
}

botaoEnviar.addEventListener( "click", CampoValida());

//Simulação de HASH
const valorHash = CampoValor ** 2;
console.log(valorHash);