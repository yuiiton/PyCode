
const btnMenu = document.getElementById("botao-menu")
const menu = document.getElementById("navegacao")
const conteudosite = document.getElementById("conteudo-visual")
const titulo = document.getElementById("titulo-nav")

function esconderMenu() {
    menu.style.display = 'none';
    conteudosite.style.display = 'block';
}

btnMenu.addEventListener('click', function(){
  if (menu.style.display === 'none') {
    menu.style.display = 'block'
    menu.style.width = '100%'
    menu.style.height = '100%'
    titulo.style.width = '100%'
    conteudosite.style.display = 'none'
    
  } else {
    menu.style.display = 'none'
    conteudosite.style.display = 'block'
}
})

window.onbeforeunload = esconderMenu