// const cardOne = document.getElementById("cardOne");
const card = document.querySelector(".card")

card.addEventListener('click',()=>{
    // cardOne.style.backgroundColor = "green";
    // cardOne.style.transform = "rotateY(180deg)";
    card.classList.toggle("flipCard")
})