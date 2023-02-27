class Card{
    constructor(id,imgSrc,flipped){
        this.id = id;
        this.imgSrc = imgSrc;
        this.flipped = flipped;
    }
}

const src1 = "images/paras-gg32-gg70.1674069807.jpg";
const src2 = "images/decidueye-gx-12-149.1606469926.jpg";
const src3 = "images/garchomp-v-117-189.1663066612.jpg";
const src4 = "images/gumshoos-gx-110-149.1606470044.jpg";
const src5 = "images/swablu-gg27-gg70.1674070013.jpg";
const src6 = "images/tauros-gx-100-149.1606470381.jpg";
const src7 = "images/umbreon-vmax-095-203.1629403889.jpg";
const src8 = "images/regieleki-v-057-195-preorder-11-11-2022.1668061168.png";
const backImgSrc = "images/backPokemonImage.png";

const numMatchesHTML = document.getElementById("numMatches");
const remainingClicks = document.getElementById("remainingClicks");

let imagesSources = [src1,src1,src2,src2,src3,src3,src4,src4,src5,src5,src6,src6,src7,src7,src8,src8];

imagesSources = shuffle(imagesSources);

const mainContainer = document.querySelector(".mainContainter");

let cards = [];

for(let i=0;i<imagesSources.length;i++){
let card = new Card;
card.flipped = false;
let cardDiv = document.createElement("div");
cardDiv.setAttribute("class","card");
cardDiv.setAttribute("id","card"+i);

mainContainer.appendChild(cardDiv);

let divFront = document.createElement("div");
divFront.setAttribute("class","front");
cardDiv.appendChild(divFront);

let imgFront = document.createElement("img");
imgFront.setAttribute("class","frontImg");
imgFront.setAttribute("src",backImgSrc);
divFront.appendChild(imgFront)

let divBack = document.createElement("div");
divBack.setAttribute("class","back");
cardDiv.appendChild(divBack);

let imgBack = document.createElement("img");
imgBack.setAttribute("class","backImg");
imgBack.setAttribute("src",imagesSources[i]);
divBack.appendChild(imgBack);

card.imgSrc = imagesSources[i];
card.id = document.getElementById("card"+i);
cards.push(card);
}
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

let flippedCards = [];
let numberMatches = 0;
let cardClicked = 0;
let totalAllowedClicks = 100;

cards.forEach(element => {
   element.id.addEventListener('click',()=>{
    console.log(numberMatches);
    totalAllowedClicks--;
    if(totalAllowedClicks===0){
        lostGame();
    }
    numMatchesHTML.innerText = numberMatches;
    remainingClicks.innerText = totalAllowedClicks;
    if(element.flipped === false){
        element.id.classList.toggle("flipCard");
        element.flipped= true;
        if(flippedCards.length === 0){
            flippedCards.push(element);
        }else{ // if the array of flipped cards is not empty, i.e. if there is a flipped card already
            if(flippedCards[0].imgSrc === element.imgSrc){ // if the new flipped card matches the previously flipped card
                numberMatches++;
                numMatchesHTML.innerText = numberMatches;
                if(numberMatches===8){ // if you won game
                    winGame();

                }
                flippedCards = [];
            }else{ // if the new flipped card doesn't match the previsouly flipped card then flip them back
                setTimeout(function(){
                    flippedCards[0].id.classList.toggle("flipCard");
                    element.id.classList.toggle("flipCard");
                    flippedCards[0].flipped = false;
                    element.flipped = false;
                    flippedCards = [];
                },1000);

            }
            
        }
        
    }

   }) 
});

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer === 0) {
            lostGame();

        }
    }, 1000);

}
