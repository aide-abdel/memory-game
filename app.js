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
