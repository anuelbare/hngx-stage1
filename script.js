const colors = ["red", "blue", "green", "yellow", "orange", "purple"];
const colorDisplay = document.getElementById("colorDisplay");
const colorOptions = document.querySelectorAll(".colorOption");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

let targetColor;
let score = 0;

/*The color options*/

function assignColors () {
    let shuffledColors = [...colors].sort();
    colorOptions.forEach((button, index) => {
        button.style.backgroundColor = shuffledColors[index];
        button.onclick = () => guesses(shuffledColors[index]);
    });
}

/*The Target Color*/
function setTargetColor() {
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.style.backgroundColor = targetColor;
}
/*Function to check the user's guesses*/
function guesses(selectedColor) {
    if (selectedColor === targetColor) {
        gameStatus.textContent = "Correct Guess";
        gameStatus.style.color = "green";
        score++;
        scoreDisplay.textContent = score;
    } else {
        gameStatus.textContent = "Wrong. Try Again!!!!"
        gameStatus.style.color = "red"
    }
    setTargetColor();
}
newGameButton.addEventListener("click", newGame);

function newGame() {
    setTargetColor();
    assignColors();
    gameStatus.textContent = "";
}
newGame()