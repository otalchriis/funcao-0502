/*
- Gerar 5 números aleatórios;
- Concatenar os 5 números em uma string;
  Número aleatório: '14590'
- Pedir para o usuário tentar descobrir sua senha (que é o número aleatório)
  - Se o usuário digitar um número no local correto, colocar um 'O';
    Senha: '14590'
    Input: '24607'
    Saída: ' O   '
  - Se o usuário digitar um número que está no local errado, mas existe na string, colocar um '-';
    Senha: '14590'
    Input: '42607'
    Saída: '-    '
  - Se o usuário digitar um número que está no local errado, e não existe na string, colocar um 'X';
    Senha: '14590'
    Input: '42507'
    Saída: '-xOxx'
- O usuário precisa acertar a senha por completo;
- O usuário tem 10 tentativas de acerto;
*/

let strFinal = "";


function gerarAleatorio(num) {
  return Math.floor(Math.random() * num);
}


for (let i = 0; i < 5; i++){
  strFinal += gerarAleatorio();
  
}


function digitarSenha(){
  senha = Number(prompt("Digite a senha gerada aleatoriamente"))
  senhaAleatoria = gerarAleatorio(senha)

}
console.log(strFinal);


function advSenha(senha){
  if (senha === senhaAleatoria){
    alert("Parabéns, você acertou!")
  }
}

digitarSenha();