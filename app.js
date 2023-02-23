const cards = document.getElementsByClassName("card")

let numberFlipped = 0;
let cardsFlipped = [];
Array.from(cards).forEach(function(card) {
    card.addEventListener('click',()=>{


        if(numberFlipped === 0){
            card.classList.toggle("flipCard");
            cardsFlipped[numberFlipped] = card;
            numberFlipped++;
            console.log("First click");
        } else if(numberFlipped === 1){
            card.classList.toggle("flipCard");
            setTimeout(function(){
                card.classList.toggle("flipCard");
                cardsFlipped[numberFlipped-1].classList.toggle("flipCard");
                console.log("Second click");
                
            numberFlipped++;
            },2000);
            
        } else{
            console.log("no more")
        }
        
    })
  });

//logic of the game

function flipBack(cardOne,cardTwo){
    cardOne.classList.toggle("flipCard");
    cardTwo.classList.toggle("flipCard");
}


