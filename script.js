randNum1 = Math.floor(Math.random() * 6) + 1;

randNum2 = Math.floor(Math.random() * 6) + 1;

randImg1 = "./images/dice"+ randNum1 +".png";

randImg2 = "./images/dice"+ randNum2 +".png";

randImgGen = document.querySelector('.img1').setAttribute("src", randImg1);

randImgGen = document.querySelector('.img2').setAttribute("src", randImg2);

if (randNum1 > randNum2) {
    document.querySelector('h1').innerHTML = "🚩 Player 1 wins";
}
else if (randNum2 > randNum1) {
    document.querySelector('h1').innerHTML = "Player 2 wins 🚩";
}
else {
    
    document.querySelector('h1').innerHTML = "Draw";
}



