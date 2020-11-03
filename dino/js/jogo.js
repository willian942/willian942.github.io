console.log("inicio de jogo!");
const dino = document.querySelector(".dino");
//console.log/(dino) ;
let dinoPosition = 0;
let estaPulando = false;

//verificar se a tecla espaço foi presionada
document.addEventListener('keydown',(event)=>{
    if (event.code === 'Space')
    if(!estaPulando) pular();
});

function pular(){
    let intervaloPulo = setInterval(()=>{
        estaPulando = true;
        if (dinoPosition >=250){
           clearInterval(intervaloPulo);
            let intervaloQueda = setInterval(()=>{
            if (dinoPosition <= 0 ) {
                estaPulando = false;
                clearInterval(intervaloQueda);

            } else {
                //Decrementar a posição do Dino
                dinoPosition -= 20;
                //Atualizar a posição na tela
                dino.style.bottom = dinoPosition + 'px';
            }
            },20);

        }else{
       //incrementar a posição do Dino
    dinoPosition += 20;
    dino.style.bottom = dinoPosition + 'px';
        }
},20);
}  
