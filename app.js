const cards = document.getElementsByClassName("card")


let numberFlipped = 0;
let cardsFlipped = [];
let oldSrc = ""
Array.from(cards).forEach(function(card) {
    card.addEventListener('click',()=>{

        let imgSrc = card.getElementsByClassName("back")[0].getElementsByClassName("backImg")[0].src;


        if(numberFlipped === 0){
            card.classList.toggle("flipCard");
            cardsFlipped[numberFlipped] = card;
            oldSrc = imgSrc;
            numberFlipped++;
            console.log("First click");
        } else if(numberFlipped === 1){
            
            card.classList.toggle("flipCard");
            if(oldSrc === imgSrc){
                console.log("You Win!!!")
            }
            setTimeout(function(){
                card.classList.toggle("flipCard");
                cardsFlipped[numberFlipped-1].classList.toggle("flipCard");
                console.log("Second click");
                
            numberFlipped++;
            },1000);
            
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


