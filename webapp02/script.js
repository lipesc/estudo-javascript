var numeroAleatorio = Math.floor(Math.random() * 100) + 1

var palpites = document.querySelector('.palpites')
var ultimoResultado = document.querySelector('.ultimoResultado')
var baixoOuAlto = document.querySelector('.baixoOuAlto')

var envioPalpite = document.querySelector('.envioPalpite')
var campoPalpite = document.querySelector('.campoPalpite')

var contagemPalpites = 1
var botaoReinicio

function conferirPalpite() {
  var palpiteUsuario = Number(campoPalpite.value)
  if (contagemPalpites === 1) {
    palpites.textContent = 'Palpites anteriores: '
  }
  palpites.textContent += palpiteUsuario + ' '

  if (palpiteUsuario === numeroAleatorio) {
    ultimoResultado.textContent = 'Parabéns! Você acertou!'
    ultimoResultado.style.backgroundColor = 'green'
    baixoOuAlto.textContent = ''
    configFimDeJogo()
  } else if (contagemPalpites === 10) {
    ultimoResultado.textContent = '!!!FIM DE JOGO!!!'
    baixoOuAlto.textContent = ''
    configFimDeJogo()
  } else {
    ultimoResultado.textContent = 'Errado!'
    ultimoResultado.style.backgroundColor = 'red'
    if (palpiteUsuario < numeroAleatorio) {
      baixoOuAlto.textContent = 'Seu palpite está muito baixo!'
    } else if (palpiteUsuario > numeroAleatorio) {
      baixoOuAlto.textContent = 'Seu palpite está muito alto!'
    }
  }

  contagemPalpites++
  campoPalpite.value = ''
  campoPalpite.focus()
}
envioPalpite.addEventListener('click', conferirPalpite)
function configFimDeJogo() {
  campoPalpite.disabled = true
  envioPalpite.disabled = true
  botaoReinicio = document.createElement('button')
  botaoReinicio.textContent = 'Iniciar novo jogo'
  document.body.appendChild(botaoReinicio)
  botaoReinicio.addEventListener('click', reiniciarJogo)
}

function reiniciarJogo() {
  contagemPalpites = 1

  var reiniciarParas = document.querySelectorAll('.resultadoParas p')
  for (var i = 0; i < reiniciarParas.length; i++) {
    reiniciarParas[i].textContent = ''
  }

  botaoReinicio.parentNode.removeChild(botaoReinicio)

  campoPalpite.disabled = false
  envioPalpite.disabled = false
  campoPalpite.value = ''
  campoPalpite.focus()

  ultimoResultado.style.backgroundColor = 'white'

  numeroAleatorio = Math.floor(Math.random() * 100) + 1
}

// var randomNumber = Math.floor(Math.random() * 100) + 1
// var guesses = document.querySelector('.guesses')
// var lastResult = document.querySelector('.lastResult')
// var lowOrHi = document.querySelector('.lowOrHi')
// var guessSubmit = document.querySelector('.guessSubmit')
// var guessField = document.querySelector('.guessField')
// var guessCount = 1
// var resetButton

// function checkGuess() {
//   var userGuess = Number(guessField.value)
//   if (guessCount === 1) {
//     guesses.textContent = 'Previous guesses: '
//   }

//   guesses.textContent += userGuess + ' '

//   if (userGuess === randomNumber) {
//     lastResult.textContent = 'Congratulations! You got it right!'
//     lastResult.style.backgroundColor = 'green'
//     lowOrHi.textContent = ''
//     setGameOver()
//   } else if (guessCount === 10) {
//     lastResult.textContent = '!!!GAME OVER!!!'
//     lowOrHi.textContent = ''
//     setGameOver()
//   } else {
//     lastResult.textContent = 'Wrong!'
//     lastResult.style.backgroundColor = 'red'
//     if (userGuess < randomNumber) {
//       lowOrHi.textContent = 'Last guess was too low!'
//     } else if (userGuess > randomNumber) {
//       lowOrHi.textContent = 'Last guess was too high!'
//     }
//   }

//   guessCount++
//   guessField.value = ''
//   guessField.focus()
// }

// guessSubmit.addEventListener('click', checkGuess)

// function setGameOver() {
//   guessField.disabled = true
//   guessSubmit.disabled = true
//   resetButton = document.createElement('button')
//   resetButton.textContent = 'Start new game'
//   document.body.appendChild(resetButton)
//   resetButton.addEventListener('click', resetGame)
// }

// function resetGame() {
//   guessCount = 1
//   var resetPara = document.querySelectorAll('.resultParas p')
//   for (var i = 0; i < resetPara.length; i++) {
//     resetPara[i].textContent = ''
//   }

//   resetButton.parentNode.removeChild(resetButton)
//   guessField.disabled = false
//   guessSubmit.disabled = false
//   guessField.value = ''
//   guessField.focus()
//   lastResult.style.backgroundColor = 'white'
//   var randomNumber = Math.floor(Math.random() * 100) + 1
// }
