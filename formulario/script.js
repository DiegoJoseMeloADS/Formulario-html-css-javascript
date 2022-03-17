function verificaCampo() {
  var nome = document.getElementById('Cnome')
  var senha = document.getElementById('Csenha')
  var email = document.getElementById('Cemail')
  var forma = document.getElementById('formacao')

  if (nome.value == '') {
    nome.style.backgroundColor = '#ff6459'
    window.alert('Preencha o nome')
    nome.focus()
    return false
  } else if (senha.value == '') {
    senha.style.backgroundColor = '#ff6459'
    window.alert('Preencha a senha')
    senha.focus()
    return false
  } else if (email.value.indexOf('@') == -1 && email.value.indexOf('.') == -1) {
    email.style.backgroundColor = '#ff6459'
    window.alert('Preencha o email')
    email.focus()
    return false
  } else if (forma.selectedIndex == 0) {
    forma.style.backgroundColor = '#ff6459'
    window.alert('Preencha a formação ')
    forma.focus()
    return false
  } else {
    /*direcionar para a pagina agradecimentos html*/
    window.location.href = 'agradecimentos.html'
  }
}

function resetaCampo() {
  var nome = document.getElementById('Cnome')
  var senha = document.getElementById('Csenha')
  var email = document.getElementById('Cemail')
  var forma = document.getElementById('formacao')

  nome.value = ''
  nome.style.backgroundColor = '#ffffff'

  senha.value = ''
  senha.style.backgroundColor = '#ffffff'

  email.value = ''
  email.style.backgroundColor = '#ffffff'

  forma.selectedIndex = 0
  forma.style.backgroundColor = '#ffffff'
}
