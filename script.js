let number = 0


function ChoseCardsNumber () {
    while (number % 2 == 1 || (number > 14 || number < 4))  {
        number = prompt("Quantas cartas de 4 a 14 você quer jogar?")
    }

}




ChoseCardsNumber()