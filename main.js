
function PlaySound (ElementoAudio) {
    const elemento = document.querySelector(ElementoAudio);
    console.log(elemento.localName)//serve para explorar a estrutura de um elemento

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play()
    }
    else {
        console.log('Elemento não encontrado ou seletor invalido')
    }
}
 
const ListaDeTeclas = document.querySelectorAll('.tecla')
 
for (let contador = 0; contador < ListaDeTeclas.length; contador++) {
    
    const tecla = ListaDeTeclas[contador]
    const TeclaSom = tecla.classList[1]   
    const som = `#som_${TeclaSom}` 
    console.log(som)
    
    ListaDeTeclas[contador].onclick = function () {
        PlaySound(som);
    }
    
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa')
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
    
}