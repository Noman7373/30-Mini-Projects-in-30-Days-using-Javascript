const heading = document.querySelector("h1");
const paragaraph1 = document.getElementById("p1")
const paragaraph2 = document.getElementById("p2")
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");




function playerOneChoice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let randomImages = "dice" + randomNumber + ".png";
    let randomImageSource = "images/" + randomImages;

    let image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src" , randomImageSource);
    return randomNumber;
};


function playerTwoChoice() {
    let random = Math.floor(Math.random() * 6) + 1;
    let rImages = "dice" + random + ".png";
    let imageRandomSource = "images/" + rImages;

    let image2 = document.querySelectorAll("img")[1];
    image2.setAttribute ("src", imageRandomSource);
    return random;
};

function checkWinner(playerOne, playerTwo) {
    if(playerOne == playerTwo) {
        heading.innerText = "Draw!"
        paragaraph1.style.display = "none";
        paragaraph2.style.display = "none";
        btn1.style.display = "none"
        btn2.style.display = "none"

        setTimeout(() => {
            heading.innerText = "Play again!"
            paragaraph1.innerText = "Player 1";
            paragaraph2.innerText = "Player 2";
            paragaraph1.style.color = "#4ECCA3";
            paragaraph2.style.color = "#4ECCA3";
            paragaraph1.style.display = "block";
            paragaraph2.style.display = "block";
            btn1.style.display = "block"
            btn2.style.display = "block"
        }, 2000);

    }
    else if (playerOne > playerTwo) {
        paragaraph1.innerText = "You Win";
        paragaraph2.innerText = "You Lose";
        heading.innerText = "Dicee Game";
        paragaraph1.style.color = "#4ECCA3";
        paragaraph2.style.color = "red";
        paragaraph1.style.display = "block";
        paragaraph2.style.display = "block";
    }
    else {
        paragaraph1.innerText = "You Lose";
        paragaraph2.innerText = "You Win";
        heading.innerText = "Dicee Game";
        paragaraph1.style.color = "red";
        paragaraph2.style.color = "#4ECCA3";
        paragaraph1.style.display = "block";
        paragaraph2.style.display = "block";
    }
};



btn1.addEventListener("click", () => {
    btn2.addEventListener("click", () => {});
    const playerOne = playerOneChoice();
    const playerTwo = playerTwoChoice();
    checkWinner(playerOne, playerTwo);
});