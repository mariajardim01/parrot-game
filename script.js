let number = 0


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

function comparador() { 
	return Math.random() - 0.5; 
}

function ShowCards(){
    for (let i = 0 ; i < (number/2); i++){
       cartas.push(imagens[i].image) 
       cartas.push(imagens[i].image)
    }

    cartas.sort(comparador);

    for (let i=0; i< cartas.length; i++) {
        let main = document.querySelector("main")
        main.innerHTML += `<div class="card" onclick="cardUp(this)">
            <div class="front-face face">
              <img src="projeto__parrots__imagens/assets/back.png"/>
            </div>
            <div class="back-face face">
              ${cartas[i]}
            </div>
          </div>`
    }
}

function cardUp(){
    alert("funcionou")
}




ChoseCardsNumber()
ShowCards()