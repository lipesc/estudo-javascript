function criarParagrafo() {
  let para = document.createElement('p')
  para.textContent = 'Você clicou o botao!'
  document.body.appendChild(para)
}

const botoes = document.querySelectorAll('button, p')

for (var i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener('click', criarParagrafo)
}
