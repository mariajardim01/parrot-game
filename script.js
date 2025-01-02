let number = 0
let counter = 0

function ChoseCardsNumber () {
    while (number % 2 == 1 || (number > 14 || number < 4))  {
        number = prompt("Quantas cartas de 4 a 14 você quer jogar?")
    }

}

const imagens = [
    {image:"<img src='projeto__parrots__imagens/assets/bobrossparrot.gif'/>"},
    {image:"<img src='projeto__parrots__imagens/assets/explodyparrot.gif'/>"},
    {image:"<img src='projeto__parrots__imagens/assets/fiestaparrot.gif'/>"},
    {image:"<img src='projeto__parrots__imagens/assets/metalparrot.gif'/>"},
    {image:"<img src='projeto__parrots__imagens/assets/revertitparrot.gif'/>"},
    {image:"<img src='projeto__parrots__imagens/assets/tripletsparrot.gif'/>"},
    {image:"<img src='projeto__parrots__imagens/assets/unicornparrot.gif'/>"}
] 

const cartas = [];

function shuffle() { 
	return Math.random() - 0.5; 
}

function ShowCards(){
    for (let i = 0 ; i < (number/2); i++){
       cartas.push(imagens[i].image) 
       cartas.push(imagens[i].image)
    }

    cartas.sort(shuffle);

    for (let i=0; i< cartas.length; i++) {
        let main = document.querySelector("main")
        main.innerHTML += `<div class="card unMatch" onclick="cardUp(this)">
            <div class="front-face face">
              <img src="projeto__parrots__imagens/assets/back.png"/>
            </div>
            <div class="back-face face">
              ${cartas[i]}
            </div>
          </div>`
    }
}

function cardUp(card){
    let OtherUpCard = document.querySelector(".unMatch.up")
    let CardsUp = document.querySelectorAll('.unMatch.up');
    let QntdCardsUp = CardsUp.length;
    if (QntdCardsUp < 2){
        card.classList.add("up");
        counter += 1;
        if (OtherUpCard != null) { 
            if (OtherUpCard.outerHTML === card.outerHTML) {
                    setTimeout(() => OtherUpCard.classList.remove("unMatch"), 1000);
                    setTimeout(() => card.classList.remove("unMatch"), 1000);
                    setTimeout(endGame,1002);
                }
            else{
                setTimeout(() => OtherUpCard.classList.remove("up"), 1000);
                setTimeout(() => card.classList.remove("up"), 1000);
                }
        }
    }
}

function endGame() {
    
    let unMatchCard = document.querySelector(".unMatch")
    console.log(unMatchCard)
    if (unMatchCard == null ){
        alert(`Parabéns!! você ganhou em ${counter} jogadas`)
    }
}



ChoseCardsNumber()
ShowCards()