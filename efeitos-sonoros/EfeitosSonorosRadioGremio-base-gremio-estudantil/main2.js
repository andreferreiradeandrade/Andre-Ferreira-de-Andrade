let lista = document.querySelectorAll(".tecla");

let contador = 0;

while (contador < lista.lenght){
    const efeito = lista [contador].classList[1];
    const idAudio = "som"+efeito;
    lista[contador].onclick = function(){
        tocaSom(idAudio);
    }
    contador++;
}
