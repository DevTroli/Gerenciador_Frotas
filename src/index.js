const abas = document.querySelectorAll('.aba');
const informacoes = document.querySelectorAll('.informacao');

for (let i = 0; i < abas.length; i++) {
  abas[i].addEventListener('click', () => {
    for (let j = 0; j < abas.length; j++) {
      abas[j].classList.remove('selecionado');
      informacoes[j].classList.remove('selecionado');
    }
    abas[i].classList.add('selecionado');
    informacoes[i].classList.add('selecionado');
  });
}







