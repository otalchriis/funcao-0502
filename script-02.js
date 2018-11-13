/*
No nosso jogo, as seguintes etapas acontecem:
- Gere um número aleatório dentro de um range definido pelo usuário
- Peça para ele tentar adivinhar o número;
  - Se ele acertar, informe que ele ganhou o jogo;
  - Se ele errar:
    - Informe que ele errou o número, e informe se o palpite dele foi maior ou menor que o número gerado
    - Retire uma chance do usuário
- O usuário tem 5 chances de acertar
  - Se as chances acabarem, é fim de jogo
*/
function rodarJogo() {
  let valorMinimo = Number(prompt('Digite o valor mínimo que poderá ser sorteado:'));
  let valorMaximo = Number(prompt('Digite o valor máximo que poderá ser sorteado:'));
  let numeroAleatorio = gerarAleatorio(valorMinimo, valorMaximo);

  for (let i = 5; i >= 0; i--) {
    const novoPalpite = Number(prompt('Tente adivinhar o número!'));

    if (novoPalpite === numeroAleatorio) {
      alert('Parabéns, você ganhou!');
      i = 0;
    }
    else {
      if (novoPalpite > numeroAleatorio) {
        alert(`O número sorteado é menor do que seu palpite! Você tem ${i} chances.`);
      }
      else {
        alert(`O número sorteado é maior do que seu palpite! Você tem ${i} chances.`);
      }
    }
  }

  if (confirm('Você gostaria de jogar novamente?')) {
    rodarJogo();
  }
}

rodarJogo();