class Card{
    constructor(id,imgSrc,flipped){
        this.id = id;
        this.imgSrc = imgSrc;
        this.flipped = flipped;
    }
}

const winHolder = document.querySelector(".winHolder");

const element1 = document.getElementById("cardOne");
const element2 = document.getElementById("cardTwo");
const element3 = document.getElementById("cardThree");
const element4 = document.getElementById("cardFour");

const element5 = document.getElementById("cardFive");
const element6 = document.getElementById("cardSix");
const element7 = document.getElementById("cardSeven");
const element8 = document.getElementById("cardEight");

const element9 = document.getElementById("cardNine");
const element10 = document.getElementById("cardTen");
const element11 = document.getElementById("cardEleven");
const element12 = document.getElementById("cardTwelve");

const element13 = document.getElementById("cardThirteen");
const element14 = document.getElementById("cardForteen");
const element15 = document.getElementById("cardFifteen");
const element16 = document.getElementById("cardSixteen");

let cardOne = new Card(element1,element1.getElementsByClassName("back")[0].getElementsByClassName("backImg")[0].src,false);
let cardTwo = new Card(element2,element2.getElementsByClassName("back")[0].getElementsByClassName("backImg")[0].src,false);
let cardThree = new Card(element3,element3.getElementsByClassName("back")[0].getElementsByClassName("backImg")[0].src,false);
let cardFour = new Card(element4,element4.getElementsByClassName("back")[0].getElementsByClassName("backImg")[0].src,false);

let cardFive = new Card(element5,element5.getElementsByClassName("back")[0].getElementsByClassName("backImg")[0].src,false);
let cardSix = new Card(element6,element6.getElementsByClassName("back")[0].getElementsByClassName("backImg")[0].src,false);
let cardSeven = new Card(element7,element7.getElementsByClassName("back")[0].getElementsByClassName("backImg")[0].src,false);
let cardEight = new Card(element8,element8.getElementsByClassName("back")[0].getElementsByClassName("backImg")[0].src,false);

let cardNine = new Card(element9,element9.getElementsByClassName("back")[0].getElementsByClassName("backImg")[0].src,false);
let cardTen = new Card(element10,element10.getElementsByClassName("back")[0].getElementsByClassName("backImg")[0].src,false);
let cardEleven = new Card(element11,element11.getElementsByClassName("back")[0].getElementsByClassName("backImg")[0].src,false);
let cardTwelve = new Card(element12,element12.getElementsByClassName("back")[0].getElementsByClassName("backImg")[0].src,false);

let cardThirteen = new Card(element13,element13.getElementsByClassName("back")[0].getElementsByClassName("backImg")[0].src,false);
let cardFourteen = new Card(element14,element14.getElementsByClassName("back")[0].getElementsByClassName("backImg")[0].src,false);
let cardFifteen = new Card(element15,element15.getElementsByClassName("back")[0].getElementsByClassName("backImg")[0].src,false);
let cardSixteen = new Card(element16,element16.getElementsByClassName("back")[0].getElementsByClassName("backImg")[0].src,false);

let cards = [cardOne,cardTwo,cardThree,cardFour,cardFive,cardSix,cardSeven,cardEight,cardNine,cardTen,cardEleven,cardTwelve,cardThirteen,cardFourteen,cardFifteen,cardSixteen];

let flippedCards = [];
let numberMatches = 0;
cards.forEach(element => {
   element.id.addEventListener('click',()=>{
    console.log(numberMatches)
    if(element.flipped === false){
        element.id.classList.toggle("flipCard");
        element.flipped= true;
        if(flippedCards.length === 0){
            flippedCards.push(element);
        }else{ // if the array of flipped cards is not empty, i.e. if there is a flipped card already
            if(flippedCards[0].imgSrc === element.imgSrc){ // if the new flipped card matches the previously flipped card
                numberMatches++;
                if(numberMatches===8){ // if you won game
                    winHolder.classList.toggle("youwin")

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
